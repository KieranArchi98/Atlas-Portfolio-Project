from typing import List, Optional
from fastapi import HTTPException
from app.crud.blog import blog_crud
from app.models.blog import BlogPost
from app.schemas.blog import BlogPostCreate, BlogPostOut, BlogPostUpdate

class BlogService:
    async def get_posts(self, skip: int = 0, limit: int = 100) -> List[BlogPost]:
        return await blog_crud.get_multi(skip, limit)

    async def get_post(self, id: str) -> BlogPost:
        post = await blog_crud.get(id)
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return post

    async def create_post(self, post_in: BlogPostCreate) -> BlogPost:
        # Business Logic Example: Check for duplicate slug
        existing = await blog_crud.get_by_slug(post_in.slug)
        if existing:
            raise HTTPException(status_code=400, detail="Slug already exists")
        return await blog_crud.create(post_in)

    async def update_post(self, id: str, post_in: BlogPostUpdate) -> BlogPost:
        post = await self.get_post(id)
        return await blog_crud.update(post, post_in)

    async def delete_post(self, id: str) -> BlogPost:
        post = await self.get_post(id)
        return await blog_crud.remove(post)

blog_service = BlogService()
