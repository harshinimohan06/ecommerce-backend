# E-Commerce Backend API

A robust RESTful E-Commerce Backend built using Node.js, Express.js, MongoDB, and JWT Authentication. This project provides APIs for user authentication, product management, cart operations, and order processing.

## Features

* User Registration & Login
* JWT-based Authentication & Authorization
* Product Management
* Shopping Cart Functionality
* Order Placement & Tracking
* MongoDB Database Integration
* RESTful API Architecture
* Secure Password Hashing using Bcrypt

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* Bcrypt
* Dotenv

## Project Structure

```text
ecommerce-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/harshinimohan06/ecommerce-backend.git
cd ecommerce-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Server

```bash
npm start
```

For development:

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Products

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Get All Products  |
| GET    | /api/products/:id | Get Product By ID |
| POST   | /api/products     | Create Product    |
| PUT    | /api/products/:id | Update Product    |
| DELETE | /api/products/:id | Delete Product    |

### Cart

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | /api/cart     | Get User Cart         |
| POST   | /api/cart     | Add Item To Cart      |
| DELETE | /api/cart/:id | Remove Item From Cart |

### Orders

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| POST   | /api/orders | Place Order     |
| GET    | /api/orders | Get User Orders |

## Security

* Password hashing with Bcrypt
* JWT Authentication
* Protected Routes
* Environment Variable Management

## Future Enhancements

* Payment Gateway Integration
* Product Search & Filtering
* Wishlist Feature
* Admin Dashboard
* Product Reviews & Ratings
* Email Notifications

## Author

**Harshini Mohan**

B.Tech Information Technology
Velammal Engineering College

GitHub: https://github.com/harshinimohan06
