# ToDo App

A sleek MERN stack todo app (MongoDB, Express, React, Node.js) that makes task management effortless. Securely organize, prioritize, and sync your tasks in real-time across devices with an intuitive interface. Perfect for boosting personal productivity or team collaboration.



## Main Technologies Used

- Node js
- Express js
- MongoDB
- React js


## Setup


### Clone Repo

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

2. Set up environment variables:

   Create a `.env` file in the root directory of the Backend and add the following values:

   ```env
   PORT=your-port

   JWT_SECRET=your-secret

   MONGO_URI=your-mongo-uri

   CORS_ORIGIN=frontend-api-url
   ```

3. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup


1. Install dependencies:

   ```bash
   cd Frontend
   npm install
   ```
2. Set up environment variables:

   Create a `.env` file in the root directory of the Frontend and add the following values:

   ```env
   VITE_API_URL=backend-api-url
   ```


3. Start the React development server:

   ```bash
   npm run dev
   ```




