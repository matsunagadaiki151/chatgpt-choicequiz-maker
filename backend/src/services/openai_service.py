from services.gpt_service import GPTService

model_names = ["gpt-3.5-turbo", "gpt-3.5-turbo-16k"]


def create_quiz(text: str, model_name: str):
    if model_name not in model_names:
        raise ValueError(
            f"Invalid model_name: {model_name}. Available options are "
            + f"{', '.join(model_names)}"
        )

    service = GPTService.from_model_name(text, model_name)

    quizzes = service.create_quiz()
    return quizzes
