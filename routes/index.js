const express = require("express");
const router = express.Router();

router.use("/products", require("./productRoutes.js"));

module.exports = router;