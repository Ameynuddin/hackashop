# Hackashop E-commerce Platform

Live Demo: https://hackashop.onrender.com

## Overview

Hackashop is a full-featured e-commerce platform built with the MERN (MongoDB, Express, React, Node.js) stack. This project allows users to browse products, search for products, view product details, add products to their cart, and proceed through the checkout process.

## Features

- User authentication and authorization
- Product listing and filtering by categories
- Product search functionality
- Shopping cart management
- Order placement and order history
- User profile management
- Responsive design

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Bootstrap
- Axios
- React Router
- React Context API

## Project Setup

### Prerequisites

Have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/ZarinZaidi/DAY_40-Hackathon
    cd DAY_40-Hackathon
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following environment variables:
    ```env
    MONGODB_URI=mongodb+srv://aereinzayed:userzarin@cluster0.x2fyyot.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=somethingsecret
    PAYPAL_CLIENT_ID=AWI9tIqfKYmT59PFXGys8ELdgskkfJHGP8mpL5q5tIDDZMReIpf5TqSzj7vhm6c8almPk9Ntw2-Ca01l
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

## Project Structure

- `backend/`: Contains the Express server, database models, routes, and controllers.
- `frontend/`: Contains the React application, components, and styles.

## Usage

1. Open your browser and navigate to `http://localhost:3000` to view the frontend.
2. The backend server runs on `http://localhost:5000`.

## Screens

### Home Screen

Displays a list of all products. Users can browse and select products to view details.


### Product Screen

Displays detailed information about a selected product. Users can add the product to their cart.
![products](frontend/public/output/home.png)


### Cart Screen

Displays the user's shopping cart. Users can modify quantities and proceed to checkout.

### Sign In / Sign Up Screen

Allows users to create an account or sign in to an existing account.

### Profile Screen

Allows authenticated users to view and update their profile information.

### Order History Screen

Displays the authenticated user's past orders.


## License

This project is licensed under the MIT License.
