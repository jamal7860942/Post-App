# Post App

A personal post management application built with Express.js that allows users to create, manage, and organize their own posts with secure authentication.

## Features

- 👤 User Authentication (Register/Login/Logout)
- 📝 Create and manage personal posts
- ✏️ Edit and delete your own posts
- 🖼️ Profile picture upload
- 🔒 Protected routes with JWT authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- EJS templating
- JWT for authentication
- bcrypt for password hashing
- Multer for file uploads
- Cookie Parser

## Project Structure

```
├── config/
│   └── multerconfig.js     # Multer configuration for file uploads
├── models/
│   ├── post.js            # Post model schema
│   └── user.js            # User model schema
├── public/
│   ├── images/
│   │   └── uploads/       # User uploaded profile picture
│   ├── javascripts/
│   │   └── popup.js       # Client-side JavaScript
│   └── stylesheets/
│       └── style.css      # Application styles
├── views/
│   ├── edit.ejs          # Post edit page
│   ├── index.ejs         # Home page
│   ├── login.ejs         # Login page
│   ├── profile.ejs       # User profile page
│   └── profileupload.ejs # Profile picture upload page
├── app.js                # Main application file
└── package.json         # Project dependencies
```

## API Endpoints

- `GET /` - Home page
- `GET /login` - Login page
- `POST /register` - Register new user
- `POST /login` - Authenticate user
- `GET /profile` - User profile page (protected)
- `POST /post` - Create new post (protected)
- `GET /like/:id` - Like/Unlike a post (protected)
- `GET /edit/:id` - Edit post page (protected)
- `POST /update/:id` - Update post (protected)
- `GET /delete/:id` - Delete post (protected)
- `GET /profile/upload` - Profile picture upload page (protected)
- `POST /upload` - Upload profile picture (protected)

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes with middleware
- Secure cookie handling
