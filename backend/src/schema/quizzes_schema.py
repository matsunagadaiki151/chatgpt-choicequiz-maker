from typing import List

from pydantic import BaseModel, Field


class CreateHeader(BaseModel):
    text: str = Field(description="input text")


class Choice(BaseModel):
    choice_id: int = Field(description="choice_id")
    choice_sentence: str = Field(description="choice description")


class Quiz(BaseModel):
    quiz_id: int = Field(description="quiz_id")
    question: str = Field(description="quiz sentence")
    choice: List[Choice] = Field("choices")
    answer_id: int = Field("correct choice id")


class Quizzes(BaseModel):
    Items: List[Quiz] = Field(description="quiz items")
