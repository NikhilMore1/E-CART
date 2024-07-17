const fs = require('fs');
const cloudinary = require('cloudinary');
const booksModel = require('../Models/books.model');

const addBooks = async(req,res)=>{
    try{
        const {id,Heading,Company,Price,delivery,discount,Rating,free} = req.body;
        const existing = await booksModel.findOne({Heading});
        if(existing){
            return res.status(400).json({message:'Kurta already exists'});
        }

        const filename = req.file.filename;  
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'Image stored successfully',
            image_url:result.secure_url
        })

        const newBooksModel =new booksModel({
            id,Heading,Company,Price,delivery,discount,Rating,free,image:result.secure_url
        })   
        const resp = newBooksModel.save();
        res.status(201).send({
            message:'Data Stored ',
            product:resp  
        })
        console.log(resp);
    }catch(error){
        console.log(error);
        res.status(500).send({error:'An error occured'})
    }
}


const getAllBooks = async(req,res)=>{
    try{
        const resp = await booksModel.find();
        res.status(200).send({product:resp});  

    }catch(error){
        console.log(error);   
        res.status(500).send({error:'Error occured while fetching data'})
    }
}

const getBookById = async(req,res)=>{
    try{
        const productId = req.params.id;
        const product = await booksModel.findById(productId);
        if(!product){
            res.status(404).send({message:'Product does not exists'});
        }
        res.status(200).send({product});



    }catch(error){

        console.log(error);
        res.status(500).send({error:'An Error Ocuured..'});
    }
}
 
module.exports = {
 addBooks,
 getAllBooks,
 getBookById    
}