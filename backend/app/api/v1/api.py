from fastapi import APIRouter
from app.api.v1.endpoints import auth, projects, blog

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(projects.router, prefix="/projects", tags=["projects"])
api_router.include_router(blog.router, prefix="/blog", tags=["blog"])
