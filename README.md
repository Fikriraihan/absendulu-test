# AbsenDulu Full-Stack Technical Test

## Technologies Used

- Front-end: Next.js
- Back-end: Node.js, Express
- Database: MongoDB

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version 18 or higher)
- npm or yarn

## Installation Instructions

### Backend Setup

1. **Navigate to the backend directory**

   ```sh
   cd backend
   ```

2. **Install backend dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables for the backend**

   - Create a `.env` file in the `backend` directory
   - Add the necessary environment variables as per `backend/.env.example`

4. **Run the backend server**
   ```sh
   npm run server
   ```

### Frontend Setup

1. **Navigate to the frontend directory**

   ```sh
   cd frontend
   ```

2. **Install frontend dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables for the frontend**

   - Create a `.env` file in the `frontend` directory
   - Add the necessary environment variables as per `frontend/.env.example`

   ```
       BASE_API_URL=http://localhost:8000/api
   ```

- Replace `http://localhost:8000` with the actual base URL of your API server.

4. **Run the frontend application**
   ```sh
   npm run dev
   ```

## Usage Instructions

- Open your browser and navigate to the appropriate URLs:
  - Backend API: `http://localhost:8000`
  - Frontend: `http://localhost:3000`

## Contact Information

For any questions or contributions, please reach out to [your email or other contact information].
