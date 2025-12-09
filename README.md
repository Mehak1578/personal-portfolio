# Portfolio Website

A modern 2-slide portfolio website built with React + Vite (frontend) and Node.js + Express (backend), connected to MongoDB Atlas.

## Project Structure

```
Personal Portfolio/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── pages/           # Page components
│   │   │   ├── About.jsx    # Slide 1: About Me
│   │   │   ├── About.css
│   │   │   ├── Projects.jsx # Slide 2: Projects
│   │   │   ├── Projects.css
│   │   │   ├── Contact.jsx  # Contact page with form
│   │   │   └── Contact.css
│   │   ├── App.jsx          # Main app with routing
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── backend/                  # Node.js + Express backend
    ├── models/
    │   └── Contact.js       # MongoDB schema
    ├── routes/
    │   └── contactRoutes.js # API routes
    ├── server.js            # Express server
    ├── .env                 # Environment variables
    └── package.json
```

## Features

### Frontend
- **About Page (Slide 1)**: Name, title, introduction, skills, and image
- **Projects Page (Slide 2)**: 4 projects with title, description, tech stack, and links
- **Contact Page**: Form with name, email, and message fields
- **Navbar**: Navigation links to all pages
- **Animations**: Fade-in, slide-in, and hover effects
- **Responsive Design**: Works on all devices

### Backend
- **Express Server**: RESTful API
- **MongoDB Integration**: Stores contact form submissions
- **Data Validation**: Email validation and required fields
- **CORS Enabled**: Frontend-backend communication
- **Error Handling**: Proper error messages

## Setup Instructions

### 1. MongoDB Atlas Setup
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update `backend/.env` with your MongoDB URI:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
The backend server will start on http://localhost:5000

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on http://localhost:5173

## API Endpoints

### POST /api/contact
Submit a contact form
- **Body**: `{ name: string, email: string, message: string }`
- **Response**: `{ success: boolean, message: string, data: object }`

## Technologies Used

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- CSS3 (with animations)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- dotenv

## Environment Variables

Create a `.env` file in the backend directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Usage

1. **Navigate**: Use the navbar to switch between pages
2. **View About**: See personal information and skills on the home page
3. **Browse Projects**: Check out project showcase with links
4. **Contact**: Fill out the form to send a message (stored in MongoDB)

## Notes

- Update the MongoDB URI in `backend/.env` with your actual credentials
- Customize the content in the components (name, projects, contact info)
- The contact form sends data to MongoDB Atlas
- Replace the placeholder image URL in About.jsx with your own image

## License

MIT
