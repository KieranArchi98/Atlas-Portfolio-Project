from typing import List, Optional
from app.models.project import Project
from app.schemas.project import ProjectCreate, ProjectUpdate

class CRUDProject:
    async def get(self, id: str) -> Optional[Project]:
        return await Project.get(id)

    async def get_multi(self, skip: int = 0, limit: int = 100) -> List[Project]:
        return await Project.find_all().skip(skip).limit(limit).to_list()

    async def create(self, project_in: ProjectCreate) -> Project:
        project = Project(**project_in.model_dump())
        await project.insert()
        return project

    async def update(self, project: Project, project_in: ProjectUpdate) -> Project:
        update_data = project_in.model_dump(exclude_unset=True)
        await project.set(update_data)
        return project

    async def remove(self, project: Project) -> Project:
        await project.delete()
        return project

project_crud = CRUDProject()
