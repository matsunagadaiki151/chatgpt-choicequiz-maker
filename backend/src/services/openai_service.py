from services.gpt_service import GPTService

model_names = ["gpt-3.5-turbo", "gpt-3.5-turbo-16k"]
max_quiz_num = 5


def create_quiz(text: str, model_name: str, quiz_num: int):
    if model_name not in model_names:
        raise ValueError(
            f"Invalid model_name: {model_name}. Available options are "
            + f"{', '.join(model_names)}"
        )

    if quiz_num <= 0 and quiz_num > max_quiz_num:
        raise ValueError(
            f"""Invalid quiz num: {quiz_num}.
            quiz_num should be a number between 1 and 5."""
        )

    service = GPTService.from_model_name(text, model_name, quiz_num)

    quizzes = service.create_quiz()
    return quizzes
