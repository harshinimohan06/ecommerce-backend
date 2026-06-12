const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-Commerce Backend is Running 🚀");
});

app.use("/api/auth", authRoutes);

module.exports = app;
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);