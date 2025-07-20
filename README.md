# ToDo App

A sleek and modern MERN stack Todo application (MongoDB, Express, React, Node.js) built for seamless task management. Effortlessly organize, prioritize, and sync your tasks in real-time across all devices with a clean and intuitive interface. Fully Dockerized for fast setup, smooth development, and scalable deployment across any environment.

## Technologies Used

- Node.js  
- Express.js  
- MongoDB  
- React.js  

## Setup Guide

### Clone the Repository

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_folder>
```

### Backend Setup

1. Install dependencies:

```bash
cd Backend
npm install
```

2. Create a `.env` file in the backend root directory with the following:

```env
PORT=your-port
JWT_SECRET=your-secret
MONGO_URI=your-mongo-uri
CORS_ORIGIN=frontend-url
```

3. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Install dependencies:

```bash
cd Frontend
npm install
```

2. Create a `.env` file in the frontend root directory with:

```env
VITE_API_URL=backend-url
```

3. Start the React development server:

```bash
npm run dev
```

## Docker Setup

### Build Docker Images

1. Build the frontend image:

```bash
docker-compose build -t todo-frontend ./frontend
```

2. Build the backend image:

```bash
docker-compose build -t todo-backend ./backend
```

### Create `docker-compose.yml` in the Project Root

Create a `docker-compose.yml` file in the root of your project:

```yaml
version: "3.9"

services:
  backend:
    image: todo-backend
    container_name: todo-backend
    ports:
      - "8000:8000"
    environment:
      PORT: 8000
      JWT_SECRET: docker-todo-app
      MONGO_URI: mongodb://mongo:27017/todoapp
      CORS_ORIGIN: http://localhost:4173
    depends_on:
      - mongo

  frontend:
    image: todo-frontend
    container_name: todo-frontend
    ports:
      - "4173:4173"
    environment:
      VITE_API_URL: http://localhost:8000

  mongo:
    image: mongo:6.0
    container_name: mongo
    ports:
      - "27018:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Start All Services

1. Start all services using Docker Compose:

```bash
docker compose -f docker-compose.yml up -d
```

2. Access the App:

- Frontend: [http://localhost:4173](http://localhost:4173)  
- Backend API: [http://localhost:8000](http://localhost:8000)  
- MongoDB (via Compass): `mongodb://localhost:27018`

