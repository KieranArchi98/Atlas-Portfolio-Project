from typing import List, Optional
from fastapi import HTTPException
from app.crud.project import project_crud
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectUpdate

class ProjectService:
    async def get_projects(self, skip: int = 0, limit: int = 100) -> List[Project]:
        return await project_crud.get_multi(skip, limit)

    async def get_project(self, id: str) -> Project:
        project = await project_crud.get(id)
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return project

    async def create_project(self, project_in: ProjectCreate) -> Project:
        return await project_crud.create(project_in)

    async def update_project(self, id: str, project_in: ProjectUpdate) -> Project:
        project = await self.get_project(id)
        return await project_crud.update(project, project_in)

    async def delete_project(self, id: str) -> Project:
        project = await self.get_project(id)
        return await project_crud.remove(project)

project_service = ProjectService()
