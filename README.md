
# Full-Stack Food Recipe App

This repository contains a **full-stack food recipe application** built with:

- **Backend:** Node.js, Express (REST API)
- **Frontend:** React, Vite, Axios
- **Architecture:** Clean separation of concerns, API-first design, easily swappable persistence layer

The app lets users:
- View a list of recipes
- See full details of a selected recipe
- Create new recipes (with ingredients, steps, tags, and times)

Currently the backend uses an **in-memory data store** for simplicity. You can replace it with MongoDB, PostgreSQL, or any other database by swapping out the `Recipe` model.

## 🗂 Project Structure

- `backend/` – Express API (`/api/recipes`)
- `frontend/` – React single-page app powered by Vite

## 🚀 Getting Started

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

By default the API runs on `http://localhost:4000`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server runs on `http://localhost:5173` and proxies `/api` calls to the backend.

## 🔧 API Overview

- `GET /api/recipes` – list all recipes (supports `?search=` and `?tag=` filters)
- `GET /api/recipes/:id` – get a single recipe
- `POST /api/recipes` – create a recipe
- `PUT /api/recipes/:id` – update a recipe
- `DELETE /api/recipes/:id` – delete a recipe

## 🌱 Next Steps / Improvements

- Persist recipes in a real database
- Add authentication and user-specific recipe collections
- Implement image uploads for recipes
- Add pagination, ratings, and favorites

This repo is designed to be a **strong portfolio example** of a modern full-stack JavaScript application with clear structure and clean code.
