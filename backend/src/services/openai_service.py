from services.GPTService import GPT35Turbo4kService, GPT35Turbo16kService

model2service = {
    "gpt-3.5-turbo": GPT35Turbo4kService,
    "gpt-3.5-turbo-16k": GPT35Turbo16kService,
}


def create_quiz(text: str, model_name: str):
    try:
        service_class = model2service[model_name]
    except KeyError:
        raise ValueError(
            f"Invalid model_name: {model_name}. Available options are "
            + f"{', '.join(model2service.keys())}"
        )

    service = service_class(text)

    quizzes = service.create_quiz()
    return quizzes
