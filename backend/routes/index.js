const router = require("express").Router();
const Item = require("../models/Item");
router.get("/items", (req, res, next) => {
  Item.find()
    .then((items) => {
      res.status(200).json({ items });
    })
    .catch((err) => res.status(500).json({ err }));
});
router.post("/items", (req, res, next) => {
  Item.create(req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
});

router.post("/items/:id", (req, res, next) => {
  Item.findByIdAndDelete(req.params.id).then((result) =>
    res.status(200).json(result)
  );
});
module.exports = router;
