from typing import Any, List
from fastapi import APIRouter, Depends
from app.api import deps
from app.services.project import project_service
from app.schemas.project import ProjectCreate, ProjectOut, ProjectUpdate
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[ProjectOut])
async def read_projects(
    skip: int = 0,
    limit: int = 100,
) -> Any:
    return await project_service.get_projects(skip, limit)

@router.post("/", response_model=ProjectOut)
async def create_project(
    *,
    project_in: ProjectCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await project_service.create_project(project_in)

@router.get("/{id}", response_model=ProjectOut)
async def read_project(id: str) -> Any:
    return await project_service.get_project(id)

@router.put("/{id}", response_model=ProjectOut)
async def update_project(
    *,
    id: str,
    project_in: ProjectUpdate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await project_service.update_project(id, project_in)

@router.delete("/{id}", response_model=ProjectOut)
async def delete_project(
    *,
    id: str,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    return await project_service.delete_project(id)
