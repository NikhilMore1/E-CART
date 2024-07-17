const cloudinary = require('cloudinary');
const elecModel = require('../Models/elec.model');
const fs = require('fs');
const Addelec = async(req,res)=>{
    try{
        const {Heading,Company,os,display,free,discount,delivery,rating,Price} = req.body;
        const existing = await elecModel.findOne({Heading});
        if(existing){
            res.status(400).json({message:'product already exists'});

        }
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'Image cloude',
            image_url:result.secure_url
        })
        const newElecModel = new elecModel({
            Heading,Company,os,display,free,discount,delivery,rating,Price,image:result.secure_url
        });
        const resp = newElecModel.save();
        res.status(201).send({
            message:'Peoduct saved ..',
            product:resp
        });
        console.log(resp);

    }catch(error){
        console.log(error);
        res.status(500).send({error:'Internal error occured'});
    }
}

const getAllElec=async (req, res) => {
    try {
        const resp= await elecModel.find();
        res.status(200).send({ products:resp })
    } catch (error) {     
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}
const getElecById = async (req, res) => {    
    try { 
        const productId = req.params.id;
        const product = await elecModel.findById(productId);
        
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
         
        res.status(200).send({ product }); 
    } catch (error) { 
        console.log(error);
        return res.status(500).send({ error: "Error occurred" });
    }
}   
 


module.exports={
    Addelec,
    getAllElec,
    getElecById
}