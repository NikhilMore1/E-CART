const mongoose = require('mongoose');
const MensFasionSchema = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    Price:{type:Number,required:true},
    Size:{type:String,required:true}, 
    delivery:{type:String,required:true},
    discount:{type:Number,required:true},
    free:{type:String,required:true},
    color:{type:String,required:true},
    Rating:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true});

const MensFasionModel = mongoose.model('MensFasionKurtas',MensFasionSchema);
module.exports = MensFasionModel; 