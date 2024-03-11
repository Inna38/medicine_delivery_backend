const { Order, Pharmacy, Coupon, orderSchema } = require("../models/deliver");

const getPharmacy = async (req, res) => {
  try {
    const results = await Pharmacy.find();

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getMedicines = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Pharmacy.findById(id);
    if (!results) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(results);
  } catch (error) {
    next(error);
  }
};

const postOrder = async (req, res, next) => {
  try {
    const { error } = orderSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: `missing required ${error.message.split(" ", 1)} field`,
      });
      return;
    }
    const result = await Order.create({ ...req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const results = await Order.find();

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getCoupons = async (req, res) => {
  try {
    const results = await Coupon.find();

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getPharmacy,
  getMedicines,
  postOrder,
  getOrder,
  getCoupons,
};
