const mongoose = require('mongoose');
const booksSchema = mongoose.Schema({
    id:{type:Number,required:true},
    Heading:{type:String,required:true},
    Company:{type:String,required:true},
    Price:{type:Number,required:true},
    delivery:{type:String,required:true},
    discount:{type:Number,required:true},
    free:{type:String,required:true},
    Rating:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true});

const booksModel = mongoose.model('booksModel',booksSchema);
module.exports = booksModel;  