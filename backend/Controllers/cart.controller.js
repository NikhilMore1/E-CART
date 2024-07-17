const CartItem =require('../Models/cart.model');

const addCartItem = async (req, res) => {
    try {
        const cartItem = new CartItem(req.body);
        await cartItem.save();
        return res.status(201).json(cartItem);
    } catch (error) {
        console.error("Error saving cart item:", error);
        return res.status(400).json({ error: "Failed to add cart item" });
    }
};   
const getAllcart=async (req,res)=>{
   try{
    const resp = await CartItem.find();
    res.status(200).send({product:resp});
   }catch(error){
    console.log(error);
    res.status(500).send({error:'an error occured'});
   }
}

const removeCart = async (req,res)=>{
    try {
        const cartItem = await CartItem.findByIdAndDelete(req.params.id);
        if (!cartItem) {
            return res.status(404).send({ error: "Item not found" });
        }
        res.send({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).send({ error: "Server error" });
    }
}

module.exports = { addCartItem,getAllcart,removeCart
 };
