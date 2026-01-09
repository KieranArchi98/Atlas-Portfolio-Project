from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class ProjectBase(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    thumbnail_url: Optional[str] = None
    category: Optional[str] = None
    technologies: List[str] = []
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    detailed_content: Optional[str] = None
    is_featured: bool = False

class ProjectCreate(ProjectBase):
    title: str
    description: str
    thumbnail_url: str
    category: str

class ProjectUpdate(ProjectBase):
    pass

class ProjectOut(ProjectBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
