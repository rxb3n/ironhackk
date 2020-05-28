const router = require("express").Router();
const Item = require("../models/Item");
router.get("/items", (req, res, next) => {
  Item.find()
    .then((items) => {
      res.status(200).json({ items });
    })
    .catch((err) => res.status(500).json({ err }));
});
module.exports = router;
