from langchain import PromptTemplate
from langchain.chains import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser

from schema.quizzes_schema import Quizzes

chat = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, client=None)


def load_text(text_path: str):
    # サンプルのテキストファイル
    with open(text_path, "r", encoding="utf-8") as f:
        return f.read()


def create_quiz(text: str):
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
    print(parser.get_format_instructions)

    chain = LLMChain(llm=chat, prompt=prompt)

    output = chain.run(text)
    quizzes = parser.parse(output)

    return quizzes
