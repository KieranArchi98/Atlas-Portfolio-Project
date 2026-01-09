from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class BlogPostBase(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    summary: Optional[str] = None
    content: Optional[str] = None
    thumbnail_url: Optional[str] = None
    tags: List[str] = []
    is_published: bool = False

class BlogPostCreate(BlogPostBase):
    title: str
    slug: str
    summary: str
    content: str

class BlogPostUpdate(BlogPostBase):
    published_at: Optional[datetime] = None

class BlogPostOut(BlogPostBase):
    id: str
    published_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
