Trika Yoga

Trika Yoga is a modern, responsive web application designed to provide users with an immersive and user-friendly yoga dashboard experience. Built using cutting-edge technologies, Trika Yoga enables seamless interaction with features like user authentication, CRUD operations, and protected routes.

Table of Contents

Demo

Features

Tech Stack

Installation

Usage

Project Structure

API Endpoints

Contributing

License

Demo

Check out the live demo of Trika Yoga here.

Features

User Authentication: Secure login and registration with token-based authentication.

Dashboard: Interactive dashboard showcasing personalized yoga content.

CRUD Operations: Manage user data and yoga-related content seamlessly.

Responsive Design: Mobile-first design for a seamless experience across devices.

Protected Routes: Ensure only authenticated users can access specific routes.

Toast Notifications: Instant feedback for actions like form submissions and file uploads.

Tech Stack

Frontend:

React.js

Bootstrap 5

React Router DOM

Backend:

Node.js

Express.js

MongoDB (Database)

Hosting:

AWS (APIs and backend)

Link to live site

Installation

Clone the repository:

git clone https://github.com/your-username/trika_frontend.git

Navigate to the project directory:

cd trika_frontend

Install dependencies for both the frontend and backend:

npm install

Create a .env file in the root directory with the following variables:

MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
S3_BUCKET_NAME=<your-s3-bucket-name>

Start the development server:

npm run dev

Usage

Open your browser and navigate to http://localhost:3000 for the frontend.

Use the API endpoints (see below) for backend operations.

Create an account or log in to access the features.

Project Structure

trika-yoga/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Log in a user and get a token

Dashboard

GET /api/dashboard - Fetch user-specific dashboard data

Content Management

GET /api/content - Retrieve yoga content

POST /api/content - Add new content

PUT /api/content/:id - Update content

DELETE /api/content/:id - Delete content

Contributing

We welcome contributions to improve Trika Yoga! To contribute:

Fork the repository.

Create a new branch for your feature or bug fix.

git checkout -b feature-name

Commit your changes.

git commit -m "Add new feature"

Push your branch.

git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Special thanks to everyone who contributed to the development of Trika Yoga.

