const WatchproductModel = require('../Models/Watchproduct.model');
const fs = require('fs');
const cloudinary = require('cloudinary');
const addWatches = async(req,res)=>{
    try{
        const {id,Heading,Company,Price,Rating,Dilivery,discount,left,free} = req.body;
        const existing = await WatchproductModel.findOne({Heading});
        if(existing){
            return res.status(400).json({message:"Watch already exists"});

        }
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'Image cloude',
            image_url:result.secure_url
        })
         
        const newWatchProduct = new WatchproductModel({
            id,Heading,Company,Price,Rating,Dilivery,discount,left,free,image:result.secure_url

        })
        const resp = newWatchProduct.save();
        res.status(201).send({
            message:'new Watch saved', 
            product:resp
        })
        console.log(resp);

    }catch(error){
        console.log(error);  
        return res.status(500).send({error:'Error occured'})
    }
}
const getAllWatches=async (req, res) => {
    try {
        const resp= await WatchproductModel.find();
        res.status(200).send({ products:resp })
    } catch (error) {     
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
} 

const getWatchById = async (req, res) => {  
    try { 
        const productId = req.params.id;
        const product = await WatchproductModel.findById(productId);
        
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
        
        res.status(200).send({ product });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error occurred" });
    }
}

module.exports  = {
    addWatches,
    getAllWatches,
    getWatchById
}