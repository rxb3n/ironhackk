const router = require("express").Router();
const Item = require("../models/Item");
const Cart = require("../models/Cart");
// const User = require("../models/User");
router.post("/cart", (req, res, next) => {
  const { item, quantity } = req.body;
  Cart.findByIdAndUpdate(req.user.cart, {
    $push: { items: { item, quantity } },
  }).then((cart) => {
    res.status(200).json(cart);
  });
});
module.exports = router;
