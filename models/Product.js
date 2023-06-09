const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "SubCategory",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    collectionInfo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Collection",
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Supplier",
    },
    productName: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    sizeGuide: {
      type: String,
    },
    description: {
      type: String,
    },
    colors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
      },
    ],
    active: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
