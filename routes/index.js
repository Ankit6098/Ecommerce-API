const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ecommerce API");
});

router.use("/products", require("./productRoutes.js"));

module.exports = router;