from langchain import PromptTemplate
from langchain.chains import LLMChain, SimpleSequentialChain
from langchain.chains.summarize import load_summarize_chain
from langchain.chat_models import ChatOpenAI
from langchain.docstore.document import Document
from langchain.output_parsers import PydanticOutputParser
from langchain.text_splitter import CharacterTextSplitter

from schema.quizzes_schema import Quizzes

chat = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, client=None)


def load_text(text_path: str):
    # サンプルのテキストファイル
    with open(text_path, "r", encoding="utf-8") as f:
        return f.read()


def create_quiz_normal(text: str):
    template = """以下の説明文から日本語の文章の4択クイズを5つ作成し特定のフォーマットで出力してください。
誤った選択肢は存在しない単語や、反対の意味を持つ文章等明らかに間違ったものになるようにしてください。

    説明文: {document}

    {format_instructions}
    """

    parser = PydanticOutputParser(pydantic_object=Quizzes)

    prompt = PromptTemplate(
        template=template,
        input_variables=["document"],
        partial_variables={
            "format_instructions": parser.get_format_instructions()
        },
    )

    chain = LLMChain(llm=chat, prompt=prompt)

    output = chain.run(text)
    quizzes = parser.parse(output)

    return quizzes


def create_quiz_map_reduce(text: str):
    # テキストの分割を行う。
    text_splitter = CharacterTextSplitter(separator="<br>", chunk_size=3000)
    texts = text_splitter.split_text(text)
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
        llm=chat,
        chain_type="map_reduce",
        map_prompt=map_prompt,
        combine_prompt=map_prompt,
        verbose=True,
    )
    template = """以下の説明文から4択クイズを5つ作成し特定のフォーマットで出力してください。
    クイズは必ず日本語で作成してください。
    また誤った選択肢は存在しない単語や、反対の意味を持つ文章等明らかに間違ったものになるようにしてください。

    説明文: {document}

    {format_instructions}
    """

    parser = PydanticOutputParser(pydantic_object=Quizzes)

    prompt_subject = PromptTemplate(
        template=template,
        input_variables=["document"],
        partial_variables={
            "format_instructions": parser.get_format_instructions()
        },
    )
    chain_subject = LLMChain(llm=chat, prompt=prompt_subject)
    overall_chain_map_reduce = SimpleSequentialChain(
        chains=[summary_chain, chain_subject]
    )
    output = overall_chain_map_reduce.run(docs)

    quizzes = parser.parse(output)
    return quizzes


def create_quiz(text: str):
    if len(text) < 3000:
        return create_quiz_normal(text)
    else:
        return create_quiz_map_reduce(text)
