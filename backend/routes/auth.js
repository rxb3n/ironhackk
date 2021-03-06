const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Cart = require("../models/Cart");
const passport = require("../config/passport");

router.post("/signup", (req, res, next) => {
  Cart.create({}).then((cart) => {
    console.log("cart ", cart);
    User.register({ ...req.body, cart: cart._id }, req.body.password)
      .then((user) => {
        req.login(user, function (err, result) {
          res.status(201).json(user);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  });
});

//return await service.get('/is-logged-in');
router.get("/is-logged-in", (req, res, next) => {
  console.log(req.user);
  res.json(req.user);
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  // Cart.findById(req.cart)
  //   .populate("item")
  //   .then((cart) => {
  const { user } = req;
  // console.log("Users cart", cart, user.cart.items);
  // user.cart = cart;
  res.status(200).json(user);
  // });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
});

router.get("/profile", isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
