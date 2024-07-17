const cloudinary = require('cloudinary');
const BeautyModel = require('../Models/Beauty.model');
const fs = require('fs');
const { log } = require('console');

const addBeauty = async(req,res) =>{
    try{
        const {id,Heading,Company,Size,Price,Delivery,discount,free} = req.body;
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'image saved',
            image_url:result.secure_url
        })
        const newBeauty = new BeautyModel({
            id,Heading,Company,Size,Price,Delivery,discount,free,image:result.secure_url
        });
        const resp = newBeauty.save();
        res.status(201).send({
            message:'Product saved to database',
            product:resp 
        });
        console.log(resp);
    }catch(error){
        console.log(error);
        res.status( 500 ).send({error:'An error occured'});
    }
}

const getAllBeauty = async(req,res)=>{
    try{
        const resp = await BeautyModel.find();
        res.status(200).send({products:resp});
    }catch(error){
        console.log(error);
        res.status(500).send({error:'an error occured'})
    }
}

const getAllBeautyById = async (req, res) => {  
    try { 
        const productId = req.params.id;
        const product = await BeautyModel.findById(productId);
        
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
        
        res.status(200).send({ product });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error occurred" });
    }
}

module.exports =  {
    addBeauty,
    getAllBeauty,
    getAllBeautyById
}