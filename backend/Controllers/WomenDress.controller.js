const fs = require('fs');
const cloudinary = require('cloudinary');
const WomenDressModel = require('../Models/fastion_brands/WomenDress.model');
const addWomenDress = async (req,res)=>{
    try{
        const {id,Heading,Company,Price,Size} = req.body;
        const existing = await WomenDressModel.findOne({Heading});
        if(existing){
            res.status(400).json({message:'Data Already exists'});
        }
        const filename = req.file.filename;
        const result =await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'Image stored on cloude',
            image_Url:result.secure_url
        });
        const newWomenDress = new WomenDressModel({
            id,Heading,Company,Price,Size,image:result.secure_url
        });
        const resp  = newWomenDress.save();
        res.status(201).send({
            message:'data stored ',
            product:resp
        })
        console.log(resp);
    }catch(error){
        console.log(error);
        res.status(500).send({message:'an error occured'})
    }
}

const getAllWomenDress = async(req,res)=>{
    try{
        const resp = await WomenDressModel.find();
        res.status(200).send({
            product:resp
        })
    }catch(error){
        console.log(error);
        res.status(500).send({message:'An error occured'});
    }
}

const getWomenDressById = async (req, res) => {  
    try { 
        const productId = req.params.id;
        const product = await WomenDressModel.findById(productId);
        
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
    addWomenDress,
    getAllWomenDress,
    getWomenDressById
}