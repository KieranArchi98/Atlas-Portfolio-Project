from typing import Optional
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    full_name: Optional[str] = None
    is_active: Optional[bool] = True
    is_superuser: bool = False

class UserCreate(UserBase):
    email: EmailStr
    password: str

class UserUpdate(UserBase):
    password: Optional[str] = None

class UserOut(UserBase):
    id: str
    email: EmailStr

    class Config:
        from_attributes = True
        # Since Beanie uses '_id' and 'id' as a property, we might need a custom validator 
        # but Beanie handles Pydantic well.
