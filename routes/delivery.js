const express = require("express");
const router = express.Router();

const {
  getPharmacy,
  getMedicines,
  postOrder,
} = require("../controllers/delivery");

router.get("/", getPharmacy);
router.get("/:id", getMedicines);
router.post("/order", postOrder);

module.exports = router;
