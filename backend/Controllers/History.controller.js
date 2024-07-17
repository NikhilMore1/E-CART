const History =require('../Models/History.model');

const addHistory = async (req, res) => {
    try {
        const cartItem = new History(req.body);
        await cartItem.save();
        return res.status(201).json(cartItem);
    } catch (error) {
        console.error("Error saving cart item:", error);
        return res.status(400).json({ error: "Failed to add cart item" });
    }
};   
const getAllHistory=async (req,res)=>{
   try{
    const resp = await History.find();
    res.status(200).send({product:resp});
   }catch(error){
    console.log(error);
    res.status(500).send({error:'an error occured'});
   }
}

const removeHistory = async (req,res)=>{
    try {
        const cartItem = await History.findByIdAndDelete(req.params.id);
        if (!cartItem) {
            return res.status(404).send({ error: "Item not found" });
        }
        res.send({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).send({ error: "Server error" });
    }
}

module.exports = { addHistory,getAllHistory,removeHistory
 };
