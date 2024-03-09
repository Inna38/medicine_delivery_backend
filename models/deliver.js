const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      require: true,
    },
    order: {
      type: String,
      require: true,
    },
    pharmacyOrder: {
      type: String,
      require: true,
    },
  },

  { versionKey: false }
);

const pharmacyShema = new Schema({
  pharmacy: {
    type: String,
    required: true,
  },

  analgesics: {
    type: Array,

    name: {
      type: String,
      require: true,
    },

    price: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
});

const Order = model("order", orderShema);
const Pharmacy = model("pharmacy", pharmacyShema);

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.string().required(),
  pharmacyOrder: Joi.string().required(),
});

module.exports = {
  Order,
  Pharmacy,
  orderSchema,
};
