const Product = require('../models/product');

// To get all products
module.exports.products = async function(req, res) {
    const products = await Product.find({})
    if (products) {
        res.status(200).json({
            products: products
        });
    } else {
        res.status(400).json({
            message: "No products found"
        });
    }
};

// To create a product
module.exports.createProduct = async function(req, res) {
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            image: req.body.image
        });
        res.status(200).json({
            message: "Product created",
            newProduct: newProduct
        })
    } catch(err) {
        console.log('error in creating product', err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// To get a one product by using id
module.exports.getProduct = async function(req, res) {
    try {
        console.log(req.query);
        const id = req.params.productId;
        const product = await Product.findById(id);
        if (product) {
            console.log('product found');
            res.status(200).json({
                product: product
            });
        } else {
            console.log('error in getting product', err);
            res.status(400).json({
                message: `There is no product with id: ${id}`
            });
        }
    }
    catch(err) {
        console.log('error in getting product', err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// To search product by using name
module.exports.searchProduct = async function(req, res) {
    try {
        // const query = req.query.name;
        // const product = await Product.find(req.query);


        const query = req.query;
    
        // If the 'name' query parameter exists, add the regex query to perform case-insensitive search
        if (query.name) {
        query.name = { $regex: query.name, $options: "i" };
        }

        const product = await Product.find(query);
        if (product) {
            res.status(200).json({
                product: product
            })
        } else {
            res.status(400).json({
                message: `There is no product`
            })
        }
    } catch {
        res.status(500).json({
            message: "Internel Server Error"
        })
    }
}

// To update quantity of a product by using id
module.exports.updateProduct = async function(req, res) {
    try {
        const id = req.params.productId;
        const product = await Product.findByIdAndUpdate(id)
        if (product) {
            product.quantity = req.query.quantity;
            product.save();
            console.log('product updated');
            res.status(200).json({
                message: "Product updated successfully",
                product: product
            });
        } else {
            console.log('error in updating product', err);
            res.status(400).json({
                message: `There is no product with id: ${id}`
            });
        }
    } catch(err) {
        console.log('error in updating product', err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// to update price of a product by using id
module.exports.updatePrice = async function(req, res) {
    try {
        const id = req.params.productId;
        const product = await Product.findByIdAndUpdate(id)
        if (product) {
            product.price = req.query.price;
            product.save();
            console.log('product updated');
            res.status(200).json({
                message: "Product updated successfully",
                product: product
            });
        } else {
            console.log('error in updating product', err);
            res.status(400).json({
                message: `There is no product with id: ${id}`
            });
        }
    } catch(err) {
        console.log('error in updating product', err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// To delete a product by using id
module.exports.deleteProduct = async function(req, res) {
    try {
        const id = req.params.productId;
        const product = await Product.findByIdAndRemove(id)
        if (product) {
            console.log('product deleted');
            res.status(200).json({
                message: "Product Deleted"
            })
        } else {
            console.log('error in deleting product', err);
            res.statsu(400).json({
                message: `There is no product with id: ${id}`
            })
        }
    } catch(err) {
        console.log('error in deleting product', err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}
