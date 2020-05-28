const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    name: String,
    description: String,
    imgUrl: String,
    price: Number,
    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Item", itemSchema);
