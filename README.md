# E-Book Project

## Project Description
The E-Book project is a full-stack web application built using the MERN stack. This platform allows users to explore and purchase books while providing administrators with robust tools to manage the bookstore. It features a user-friendly interface for customers and a secure admin dashboard for efficient inventory and order management.

## Features
### User Features
- Browse a wide selection of books.
- Add or remove products from the shopping cart.
- Proceed to checkout and place orders with a cash-on-delivery system.

### Admin Features
- Secure login access with a username and password.
- Upload new books to the inventory.
- Update information on existing books.
- Delete books from the inventory.
- Manage inventory efficiently through a dedicated dashboard.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Redux, RTK Query Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **ORM:** Mongoose

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <https://github.com/Nelkeasha/E-book-project.git>
   ```
2. Navigate to the project directory:
   ```bash
   cd e-book-project
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the backend directory with the following variables:
     ```env
     DB_URL = 'mongodb+srv://nelkeasha5:zXuFIgUrOfOf6POL@cluster0.ld2xn.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0'
     JWT_SECRET_KEY = '8bfcbd41017b6f5632c312e1b1cb0ec05960634694a8f0778ce40e22160a28de905cf0161306d682325ca41d02a106ad737e12759b19152b5d620f32cab1baa0'
     ```
    
    - Create a `.env.local` file in the frontend directory with the following variables:
     ```VITE_API_KEY="AIzaSyDNn4OQc3SrRmKhaYZGPw1Tc5DbnhHd0-k"
        VITE_Auth_Domain="book-store-2c56d.firebaseapp.com"
        VITE_PROJECT_ID= "book-store-2c56d"
        VITE_STORAGE_BUCKET= "book-store-2c56d.firebasestorage.app"
        VITE_MESSAGING_SENDERID= "221279423421"
        VITE_APPID= "1:221279423421:web:0b5c793c240434ffd0e0d4"
     ```

5. Start the development servers:
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```
   - Backend:
     ```bash
     cd backend
     npm run start:dev
     ```
6. Open the application in your browser at `http://localhost:3000`.

## Usage
- **Users:** Browse books, add to cart, and place orders.
- **Admins:** Log in to the dashboard to manage books and inventory.

## Screenshots
![Dashboard](frontend\src\assets\dashboard.png "Optional Title")
![LandPage](frontend\src\assets\E-book.png "Optional Title")

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing
We welcome contributions to this project. Please submit a pull request or open an issue to discuss your ideas.

## Acknowledgments
- **Technologies:** React, Node.js, MongoDB, and others.
- **Inspiration:** Designed to simplify book purchasing and inventory management.

Feel free to reach out for further details or feedback!

