const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  done_by: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  duration: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  annotations: {
    type: String,
    default: "",
  },
});

const purchaseSchema = new mongoose.Schema({
  vendor: {
    type: String,
  },
  price: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  original_purpose: {
    type: String,
  },
});

const containerSchema = new mongoose.Schema(
  {
    version: {
      type: Number,
    },
    number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    color: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      trim: true,
    },
    qr_code: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    purchase: {
      type: purchaseSchema,
      ref: "Purchase",
      default: {},
    },
    type: {
      type: String,
      required: true,
    },
    maintenance: [
      {
        type: maintenanceSchema,
        ref: "Maintenance",
        default: {},
      },
    ],
  },
  {
    timestamps: true,
    minimize: false,
  }
);

module.exports = mongoose.model("Container", containerSchema);
