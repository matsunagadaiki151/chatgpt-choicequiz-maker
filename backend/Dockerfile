# ベースイメージを指定
FROM python:3.11

# ワーキングディレクトリを設定
WORKDIR /app

# Poetryのインストール
RUN pip install poetry
RUN poetry config virtualenvs.create false

# プロジェクトの依存ライブラリをインストール
COPY pyproject.toml .
COPY poetry.lock .

# ソースコードをコピー
COPY . .

RUN poetry update
RUN poetry install --no-interaction --no-ansi

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
