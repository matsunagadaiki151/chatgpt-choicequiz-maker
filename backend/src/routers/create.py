from fastapi.routing import APIRouter

from schema.quizzes_schema import CreateHeader
from services.openai_service import create_quiz

router = APIRouter()


@router.post("/create/")
def read_item(create_header: CreateHeader):
    text = create_header.text
    text.replace("¥n", "")
    quizzes = create_quiz(text, create_header.model_name)
    return quizzes
