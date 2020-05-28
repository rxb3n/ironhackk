const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: String,
    name: String,
    orders: [
      {
        type: ObjectId,
        ref: "Cart",
      },
    ],
    cart: {
      type: ObjectId,
      ref: "Cart",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(PLM, {
  usernameField: "email",
  populateFields: ["cart", "item"],
});

module.exports = model("User", userSchema);
