const express = require("express");
const router = express.Router();

const {
  getPharmacy,
  getMedicines,
  postOrder,
  getOrder,
  getCoupons
} = require("../controllers/delivery");

router.get("/", getPharmacy);
router.get("/:id", getMedicines);
router.post("/order", postOrder);
router.get("/order/getOrder", getOrder)
router.get("/get/coupons", getCoupons)

module.exports = router;
