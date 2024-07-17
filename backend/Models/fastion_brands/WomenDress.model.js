const mongoose = require('mongoose');
const WomenDressSchema = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    Price:{type:String,required:true},
    Size:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true});

const WomenDressModel = mongoose.model('WomenDress',WomenDressSchema);
module.exports = WomenDressModel;