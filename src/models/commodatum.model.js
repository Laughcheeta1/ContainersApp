const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const commodatumSchema = new mongoose.Schema(
  {
    version: {
      type: Number,
      default: 1,
    },
    commodatum_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    container: {
      type: mongoose.Types.ObjectId,
      ref: "Container",
      required: true,
    },
    receiver: {
      type: receiverSchema,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    duration: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    transport_price: {
      type: Number,
      required: true,
    },
    created_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commodatum", commodatumSchema);
