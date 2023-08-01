const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products_controller');

// To get all products
router.get("/", productsController.products);

// To create a product
router.post("/create", productsController.createProduct);

// To get a product by id
router.get("/:productId", productsController.getProduct);

// To update quantity of a product by id
router.patch("/:productId/update_quantity", productsController.updateProduct);

// To update price of a product by id
router.patch("/:productId/update_price", productsController.updatePrice);

// To delete a product by id
router.delete("/:productId", productsController.deleteProduct);


module.exports = router;