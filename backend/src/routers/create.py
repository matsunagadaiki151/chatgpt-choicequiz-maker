from fastapi.routing import APIRouter

from schema.quizzes_schema import CreateHeader
from services.openai_service import create_quiz

router = APIRouter()

text_path: str = "./sandbox/documents/zenn_langchain.txt"


@router.post("/create/")
def read_item(create_header: CreateHeader):
    quizzes = create_quiz(create_header.text)
    return quizzes
