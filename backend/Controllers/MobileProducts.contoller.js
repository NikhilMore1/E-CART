const MobileProductsModel = require('../Models/Mobileproducts.model');
const cloudinary = require('cloudinary');
const fs = require('fs');
const addMobiles = async(req,res)=>{
    try{
        const {id,Heading,RamRom,Camera,Price,Battery,Processor,Display,Rating,discount,delivery,free} = req.body;
        const existing = await MobileProductsModel.findOne({Heading});
        if(existing){
            return res.status(400).json({message:"product are already registerd in ur database.."});
        }
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'image cloude ',
            image_url:result.secure_url 
        }) 
        const newMobileProducts = new MobileProductsModel({
            id,Heading,RamRom,Camera,Price,Battery,Processor,Display,Rating,discount,delivery,free,image:result.secure_url
        })
        const resp = newMobileProducts.save();
        res.status(201).send({
            message:'new product',
            product:resp
        })
        console.log(resp);
    }catch(error){
    console.log(error);
    return res.status(500).send({error:"error occured"})
}
}


const getAllMobile=async (req, res) => {
    try {
        const resp= await MobileProductsModel.find();
        res.status(200).send({ products:resp })
    } catch (error) {     
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}

const GetAllMobileById = async (req, res) => {    
    try { 
        const productId = req.params.id;
        const product = await MobileProductsModel.findById(productId);
         
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
         
        res.status(200).send({ product }); 
    } catch (error) { 
        console.log(error);
        return res.status(500).send({ error: "Error occurred" });
    }
}   

module.exports = {  
    addMobiles,   
    GetAllMobileById,
    getAllMobile
}