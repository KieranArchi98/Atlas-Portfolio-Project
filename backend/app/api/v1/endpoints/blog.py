from typing import Any, List
from fastapi import APIRouter, Depends
from app.api import deps
from app.services.blog import blog_service
from app.schemas.blog import BlogPostCreate, BlogPostOut, BlogPostUpdate
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[BlogPostOut])
async def read_blog_posts(
    skip: int = 0,
    limit: int = 100,
) -> Any:
    return await blog_service.get_posts(skip, limit)

@router.post("/", response_model=BlogPostOut)
async def create_blog_post(
    *,
    post_in: BlogPostCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await blog_service.create_post(post_in)

@router.get("/{id}", response_model=BlogPostOut)
async def read_blog_post(id: str) -> Any:
    return await blog_service.get_post(id)

@router.put("/{id}", response_model=BlogPostOut)
async def update_blog_post(
    *,
    id: str,
    post_in: BlogPostUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await blog_service.update_post(id, post_in)

@router.delete("/{id}", response_model=BlogPostOut)
async def delete_blog_post(
    *,
    id: str,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await blog_service.delete_post(id)
