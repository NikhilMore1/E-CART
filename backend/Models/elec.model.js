const mongoose = require('mongoose');
const elecSchema = mongoose.Schema({
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    display:{type:String},
    os:{type:String},
    free:{type:String,required:true},
    discount:{type:String,required:true},
    delivery:{type:String,required:true},
    image:{type:String,required:true},
    rating:{type:String},
    Price:{type:String,required:true}
});

const elecModel = mongoose.model('Electronics',elecSchema);
module.exports= elecModel;   