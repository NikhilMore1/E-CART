const mongoose = require('mongoose');
const BeautySchema = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    Size:{type:String,required:true},
    Price:{type:Number,required:true},
    Delivery:{type:String,required:true},
    discount:{type:Number,required:true},
    free:{type:String,required:true},
    image:{type:String,required:true} 
},{timestamps:true});

const BeautyModel = mongoose.model('Beauty',BeautySchema);
module.exports = BeautyModel;          