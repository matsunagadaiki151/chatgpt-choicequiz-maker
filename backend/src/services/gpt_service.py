from langchain import PromptTemplate
from langchain.chains import LLMChain, SimpleSequentialChain
from langchain.chains.summarize import load_summarize_chain
from langchain.chat_models import ChatOpenAI
from langchain.docstore.document import Document
from langchain.output_parsers import PydanticOutputParser
from langchain.schema import OutputParserException
from langchain.text_splitter import CharacterTextSplitter

from schema.quizzes_schema import Quizzes


class GPTService:
    def __init__(self, text, model_name):
        self.llm = ChatOpenAI(model=model_name, temperature=0, client=None)

        self.recommend_length = 3000
        self.parser = PydanticOutputParser(pydantic_object=Quizzes)

        self.text = text

    @staticmethod
    def from_model_name(text, model_name):
        return GPTService(text, model_name)

    def create_quiz_normal(self):
        template = """以下の説明文から日本語の文章の4択クイズを5つ作成し特定のフォーマットで出力してください。
        誤った選択肢は存在しない単語や、反対の意味を持つ文章等明らかに間違ったものになるようにしてください。

        説明文: {document}

        {format_instructions}
        """

        prompt = PromptTemplate(
            template=template,
            input_variables=["document"],
            partial_variables={
                "format_instructions": self.parser.get_format_instructions()
            },
        )

        chain = LLMChain(llm=self.llm, prompt=prompt)

        output = chain.run(self.text)
        return output

    def create_quiz_map_reduce(self):
        # テキストの分割を行う。
        text_splitter = CharacterTextSplitter(
            separator="<br>", chunk_size=3000
        )
        texts = text_splitter.split_text(self.text)
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
        template = """以下の説明文から4択クイズを5つ作成し特定のフォーマットで出力してください。
        クイズは必ず日本語で作成してください。
        また誤った選択肢は存在しない単語や、反対の意味を持つ文章等明らかに間違ったものになるようにしてください。

        説明文: {document}

        {format_instructions}
        """

        prompt_subject = PromptTemplate(
            template=template,
            input_variables=["document"],
            partial_variables={
                "format_instructions": self.parser.get_format_instructions()
            },
        )
        chain_subject = LLMChain(llm=self.llm, prompt=prompt_subject)
        overall_chain_map_reduce = SimpleSequentialChain(
            chains=[summary_chain, chain_subject]
        )
        output = overall_chain_map_reduce.run(docs)

        return output

    def parse_output(self, output: str):
        try:
            quizzes = self.parser.parse(output)
            if len(quizzes.Items) != 5:
                raise ValueError
            return quizzes
        except (OutputParserException, ValueError):
            raise ValueError("Invalida data structure")

    def create_quiz(self):
        if len(self.text) < self.recommend_length:
            output = self.create_quiz_normal()
        else:
            output = self.create_quiz_map_reduce()
        return self.parse_output(output)
