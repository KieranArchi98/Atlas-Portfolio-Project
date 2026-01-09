from datetime import datetime
from typing import List, Optional
from beanie import Document
from pydantic import Field

class Project(Document):
    title: str
    description: str
    thumbnail_url: str
    category: str
    technologies: List[str] = []
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    detailed_content: Optional[str] = None  # Markdown content
    is_featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "projects"
