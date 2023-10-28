const mongoose = require("mongoose");

const containerSchema = new mongoose.Schema(
  {
    // version: {
    //   type: Number,
    // },
    number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    // color: {
    //   type: String,
    //   trim: true,
    // },
    // size: {
    //   type: String,
    //   trim: true,
    // },
    // qr_code: {
    //   type: String,
    //   unique: true,
    // },
    status: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    // purchase: {
    //   type: purchaseSchema,
    //   required: true,
    // },
    type: {
      type: String,
      required: true,
    },
    // maintenance: {
    //   type: maintenanceSchema,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const purchaseSchema = new mongoose.Schema({
  vendor: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  original_purpose: {
    type: String,
  },
});

const maintenanceSchema = new mongoose.Schema({
  done_by: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  annotations: {
    type: String,
  },
});

module.exports = mongoose.model("Container", containerSchema);
