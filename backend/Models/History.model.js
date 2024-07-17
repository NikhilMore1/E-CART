const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
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

const HistoryModel = mongoose.model('history', HistorySchema);
module.exports = HistoryModel; 
             