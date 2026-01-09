from datetime import datetime
from typing import List, Optional
from beanie import Document
from pydantic import Field

class BlogPost(Document):
    title: str
    slug: str
    summary: str
    content: str  # Markdown content
    thumbnail_url: Optional[str] = None
    tags: List[str] = []
    is_published: bool = False
    published_at: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "blog_posts"
        indexes = ["slug"]
