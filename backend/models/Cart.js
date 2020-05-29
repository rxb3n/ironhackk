const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const cartSchema = new Schema(
  {
    items: [
      {
        item: {
          type: ObjectId,
          ref: "Item",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Cart", cartSchema);
