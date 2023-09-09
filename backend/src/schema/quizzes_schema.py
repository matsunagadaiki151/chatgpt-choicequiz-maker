from pydantic.v1 import BaseModel, Field


class CreateHeader(BaseModel):
    text: str = Field(description="input text")
    model_name: str = Field(description="model_name (ex: 'gpt-3.5-turbo')")


class Choice(BaseModel):
    choice_id: int = Field(description="choice_id")
    choice_sentence: str = Field(description="choice description")


class Quiz(BaseModel):
    quiz_id: int = Field(description="quiz_id")
    question: str = Field(description="quiz sentence")
    choice: list[Choice] = Field(description="choices")
    answer_id: int = Field(description="correct choice id")


class Quizzes(BaseModel):
    Items: list[Quiz] = Field(..., description="quiz items")
