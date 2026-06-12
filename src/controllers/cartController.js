const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    const cartItem = await Cart.create({
      user: req.user.id,
      product,
      quantity
    });

    res.status(201).json(cartItem);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.user.id
    }).populate("product");

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};