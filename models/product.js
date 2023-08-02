const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    quantity: {
        type: Number,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    image: {
        type: String,
    }
}, {versionKey: false});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
