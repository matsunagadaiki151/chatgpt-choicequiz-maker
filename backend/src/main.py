from fastapi import FastAPI

from routers import create

app = FastAPI()

app.include_router(create.router)
