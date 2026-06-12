const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user.id
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty"
      });
    }

    const items = cartItems.map(item => ({
      product: item.product._id,
      quantity: item.quantity
    }));

    const totalAmount = cartItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount
    });

    await Cart.deleteMany({
      user: req.user.id
    });

    res.status(201).json({
      message: "Order placed successfully",
      order
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id
    }).populate("items.product");

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};