const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: String,
    Heading: String,
    Price: String,
    image: String,
    Company: String,
    Rating: String, 
    discount: String,
    delivery: String , 
    RamRom: String,
    Camera: String,
    Battery: String,
    Processor: String,
    Display: String
    
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
             