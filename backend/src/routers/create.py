from fastapi import HTTPException
from fastapi.routing import APIRouter

from schema.quizzes_schema import CreateHeader
from services.openai_service import create_quiz

router = APIRouter()


@router.post("/create/")
def read_item(create_header: CreateHeader):
    text = create_header.text
    text.replace("¥n", "")
    try:
        quizzes = create_quiz(text, create_header.model_name)
    except ValueError:
        raise HTTPException(
            status_code=502, detail="クイズの作成に失敗しました。別の文章で試してみてください。"
        )
    return quizzes
