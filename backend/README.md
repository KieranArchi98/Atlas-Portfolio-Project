# Atlas Portfolio Backend

Industry-standard FastAPI backend with MongoDB/Beanie ODM integration.

## Features
- **FastAPI**: Modern, high-performance web framework.
- **MongoDB + Beanie**: Async ODM for MongoDB with Pydantic v2.
- **JWT Authentication**: Secure login and signup with token-based access.
- **Project CRUD**: Manage portfolio projects.
- **Blog CRUD**: Manage development blog posts.
- **CORS Middleware**: Pre-configured for local frontend development.

## Project Structure
```text
backend/
├── app/
│   ├── api/v1/         # API endpoints and routers
│   ├── core/           # Config and security
│   ├── db/             # MongoDB initialization
│   ├── models/         # Beanie document models
│   ├── schemas/        # Pydantic validation schemas
│   └── main.py         # App entry point
├── requirements.txt    # dependencies
└── .env.example        # Environment template
```

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure Environment**:
   - Copy `.env.example` to `.env`.
   - Update `MONGODB_URL` with your MongoDB connection string.

3. **Run the Server**:
   ```bash
   uvicorn app.main:app --reload
   ```

## API Documentation
Once the server is running, visit:
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
