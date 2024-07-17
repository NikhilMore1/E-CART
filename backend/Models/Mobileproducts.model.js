const mongoose = require('mongoose');
const Mobileproducts = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    RamRom:{type:String,required:true},
    Camera:{type:String,required:true},
    Price:{type:Number,required:true},                             
    Battery:{type:String,required:true},
    Processor:{type:String,required:true},       
    Display:{type:String,required:true},
    Rating:{type:String,required:true},          
    discount:{type:Number,required:true},
    free:{type:String,required:true},
    delivery:{type:String,required:'true'},

    image:{type:String,required:true}
},{timestamps:true});

const MobileproductsModel = mongoose.model('Mobile',Mobileproducts);
module.exports =  MobileproductsModel;
