// const mongoose = require('mongoose');
// const RegistrationShema = mongoose.Schema({
//     name:{type:String},
//     username:{type:String},
//     Email:{type:String},
//     Mobile:{type:Number},
//     password:{type:String},
//     Pincode:{type:Number},
//     image:{type:String}
// },{timestamps:true});

// const RegistrationModel = mongoose.model('UserReg',RegistrationShema);
// module.exports = RegistrationModel;

const mongoose = require('mongoose');
const regSchema = mongoose.Schema({
    name:{type:String},
    username:{type:String}, 
    mobile:{type:Number},
    email:{type:String},
    password:{type:String},
    image:{type:String}
},{timestamps:true});
const regModel = mongoose.model("UserReg",regSchema);
module.exports = regModel;               