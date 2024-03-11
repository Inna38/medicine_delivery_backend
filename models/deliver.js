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
      type: Array,
      require: true,
    },
    coupon: {
    type: Array,
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

const CouponShema = new Schema({
  coupon: {
    type: Array,
  },
});

const Order = model("order", orderShema);
const Pharmacy = model("pharmacy", pharmacyShema);
const Coupon = model("Coupon", CouponShema);

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.array().required(),
  coupon: Joi.array(),
});

module.exports = {
  Order,
  Pharmacy,
  orderSchema,
  Coupon,
};
