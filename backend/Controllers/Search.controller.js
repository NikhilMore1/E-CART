const SearchModel = require('../Models/SearchBar.model');

const Addsearch = async(req,res)=>{
    try{
        const searchItem = new SearchModel(req.body);
        await searchItem.save();
        return res.status(201).json(searchItem);
    }catch(error){
        console.log(error);
        req.status(400).json({error:'An error occred'});
    }
};
const getAllSearch=async (req,res)=>{
    try{
     const resp = await SearchModel.find();
     res.status(200).send({product:resp});
    }catch(error){
     console.log(error);
     res.status(500).send({error:'an error occured'});
    }
 }

 const getSearchById = async(req,res)=>{
    try{
        const ProductId = req.params.id;
        const product = await SearchModel.findById(ProductId);
        if(!product){
            res.status(404).send({message:'Product Not found'});
        }
        res.status(200).send({product});
    }catch(error){
        console.log(error);
        res.status(500).send({error:'Error occured'});
    }
 }

 module.exports={
    Addsearch,
    getAllSearch,
    getSearchById
 }