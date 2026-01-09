from datetime import timedelta
from typing import Optional
from fastapi import HTTPException, status
from app.core import security
from app.core.config import settings
from app.crud.user import user_crud
from app.models.user import User
from app.schemas.user import UserCreate
from app.schemas.token import Token

class UserService:
    async def signup(self, user_in: UserCreate) -> User:
        user = await user_crud.get_by_email(user_in.email)
        if user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email already exists",
            )
        hashed_password = security.get_password_hash(user_in.password)
        return await user_crud.create(user_in, hashed_password)

    async def authenticate(self, email: str, password: str) -> Optional[User]:
        user = await user_crud.get_by_email(email)
        if not user or not security.verify_password(password, user.hashed_password):
            return None
        return user

    async def login(self, user: User) -> Token:
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        return Token(
            access_token=security.create_access_token(
                user.id, expires_delta=access_token_expires
            ),
            token_type="bearer",
        )

user_service = UserService()
