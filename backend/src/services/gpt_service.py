from langchain import PromptTemplate
from langchain.chains import SimpleSequentialChain
from langchain.chains.openai_functions import create_structured_output_chain
from langchain.chains.summarize import load_summarize_chain
from langchain.chat_models import ChatOpenAI
from langchain.docstore.document import Document
from langchain.output_parsers import PydanticOutputParser
from langchain.prompts import ChatPromptTemplate
from langchain.schema import OutputParserException
from langchain.text_splitter import CharacterTextSplitter

from schema.quizzes_schema import Quizzes


class GPTService:
    def __init__(self, text, model_name, recommend_length, quiz_num):
        self.llm = ChatOpenAI(model=model_name, temperature=0, client=None)
        self.parser = PydanticOutputParser(pydantic_object=Quizzes)
        self.recommend_length = recommend_length
        self.text = text
        self.quiz_num = quiz_num
        self.system_prompt = f"""以下の説明文から日本語の文章の4択クイズを{quiz_num}問作成し特定のフォーマットで出力してください。
        誤った選択肢は存在しない単語や、反対の意味を持つ文章等明らかに間違ったものになるようにしてください。"""  # noqa

    @staticmethod
    def from_model_name(text, model_name, quiz_num):
        model_length_dic = {
            "gpt-3.5-turbo": 3000,
            "gpt-3.5-turbo-16k": 12000,
            "gpt-4": 5000,
        }
        return GPTService(
            text, model_name, model_length_dic[model_name], quiz_num
        )

    def create_quiz_normal(self):
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", self.system_prompt),
                ("human", "{input}"),
                ("human", "クイズは指定のフォーマットで出力してください"),
            ]
        )

        chain = create_structured_output_chain(
            Quizzes, self.llm, prompt, verbose=False
        )

        output = chain.run(self.text)
        return output

    def insert_text_br(self):
        def insert_string_at_position(input_string, position, insert_text):
            # n番目の位置に文字列を挿入する
            return (
                input_string[:position] + insert_text + input_string[position:]
            )

        new_text = self.text
        for i in range(1, len(self.text) // self.recommend_length):
            new_text = insert_string_at_position(
                new_text, i * self.recommend_length, "<br>"
            )
        return new_text

    def create_quiz_map_reduce(self):
        # textに一定間隔で<br>を埋め込む
        processed_text = self.insert_text_br()
        # テキストの分割を行う。
        text_splitter = CharacterTextSplitter(
            separator="<br>", chunk_size=self.recommend_length
        )
        texts = text_splitter.split_text(processed_text)
        docs = [Document(page_content=t) for t in texts]

        # 要約を行う。
        map_template = """
        以下の内容について1000文字程度の要約を書いて下さい。
        ただし、文字数が少ない場合は可能な範囲で要約を書いてください。

        "{text}"

        要約:"""

        map_prompt = PromptTemplate(
            template=map_template, input_variables=["text"]
        )
        summary_chain = load_summarize_chain(
            llm=self.llm,
            chain_type="map_reduce",
            map_prompt=map_prompt,
            combine_prompt=map_prompt,
        )

        prompt_subject = ChatPromptTemplate.from_messages(
            [
                ("system", self.system_prompt),
                ("human", "{input}"),
                ("human", "クイズは指定のフォーマットで出力してください"),
            ]
        )

        chain_subject = create_structured_output_chain(
            Quizzes, self.llm, prompt_subject, verbose=False
        )
        overall_chain_map_reduce = SimpleSequentialChain(
            chains=[summary_chain, chain_subject]
        )
        output = overall_chain_map_reduce.run(docs)

        return output

    def _check_parse(self, output: Quizzes):
        try:
            if len(output.Items) != self.quiz_num:
                raise ValueError
            return output
        except (OutputParserException, ValueError):
            raise ValueError("Invalida data structure")

    def create_quiz(self):
        if len(self.text) < self.recommend_length:
            output = self.create_quiz_normal()
        else:
            output = self.create_quiz_map_reduce()
        return self._check_parse(output)
