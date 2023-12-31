const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema(
  {
    version: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      default: "Generico",
    },
    total_quantity: {
      type: Number,
      default: 0,
    },
    available_quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemsSchema);
