from typing import List, Optional
from datetime import datetime
from app.models.blog import BlogPost
from app.schemas.blog import BlogPostCreate, BlogPostUpdate

class CRUDBlogPost:
    async def get(self, id: str) -> Optional[BlogPost]:
        return await BlogPost.get(id)

    async def get_by_slug(self, slug: str) -> Optional[BlogPost]:
        return await BlogPost.find_one(BlogPost.slug == slug)

    async def get_multi(self, skip: int = 0, limit: int = 100) -> List[BlogPost]:
        return await BlogPost.find_all().skip(skip).limit(limit).to_list()

    async def create(self, post_in: BlogPostCreate) -> BlogPost:
        post = BlogPost(**post_in.model_dump())
        await post.insert()
        return post

    async def update(self, post: BlogPost, post_in: BlogPostUpdate) -> BlogPost:
        update_data = post_in.model_dump(exclude_unset=True)
        if update_data.get("is_published") and not post.published_at:
            update_data["published_at"] = datetime.utcnow()
        await post.set(update_data)
        return post

    async def remove(self, post: BlogPost) -> BlogPost:
        await post.delete()
        return post

blog_crud = CRUDBlogPost()
