import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import create

load_dotenv("../.env")

app = FastAPI()

frontend_endpoint = os.environ.get("FRONTEND_ENDPOINT")

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3002",
    frontend_endpoint,
    "https://chatgpt-choicequiz-maker.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(create.router)
