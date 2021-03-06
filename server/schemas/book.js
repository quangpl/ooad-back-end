const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    typeId: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    discount_rate: {
      type: Number,
      default: 0
    },
    numberOf: {
      type: Number,
      required: true,
      default: 0
    },
    numberOfSell: {
      type: Number,
      default: 0
    },
    unitPrice: {
      type: Number,
      required: true
    },
    importDate: {
      type: Number,
    },
    publishBy: {
      type: String,
      required: true
    },
    publishAt: {
      type: Number
    },
    description: {
      type: String,
      required: true
    },
    comments: {
      type: [
        new Schema({
          customerId: String,
          message: String
        })
      ]
    },
    image: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/600"
    },
    viewCount: {
      type: Number,
      default: 0
    },
    tag: {
      type: [String],
      required: true,
      default: ["book"],
      index: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = BookSchema;