const mongoose = require("mongoose");

// Schema para objetos de mantenimiento

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

// Schema para objetos de compra

const purchaseSchema = new mongoose.Schema({
  vendor: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
  },
  original_purpose: {
    type: String,
    default: "",
  },
});

// Schema para el contenedor

const containerSchema = new mongoose.Schema(
  {
    version: {
      type: Number,
      default: 1,
    },
    container_id: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    color: {
      type: String,
      trim: true,
      required: true,
    },
    size: {
      type: String,
      trim: true,
      required: true,
    },
    qr_code: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      default: "Libre",
    },
    notes: {
      type: String,
      default: ""
    },
    purchase: {
      type: purchaseSchema,
      default: {},
    },
    type: {
      type: String,
      required: true,
    },
    maintenance: [
      {
        type: maintenanceSchema,
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
