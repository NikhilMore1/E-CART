const mongoose = require('mongoose');
const WatchproductSchema = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    Price:{type:Number,required:true},
    Rating:{type:String,required:true}, 
    Dilivery:{type:String},
    discount:{type:Number,required:true},
    free:{type:String,required:true}, 
    left:{type:String},     
    image:{type:String,required:true}
},{timestamps:true});
 
const WatchproductModel = mongoose.model('Watches',WatchproductSchema);
module.exports = WatchproductModel;       