const express = require('express');
const { addCartItem, getAllcart, removeCart } = require('../Controllers/cart.controller');
const router = express.Router();


router.post('/', addCartItem);
router.get('/',getAllcart);
router.delete('/:id',removeCart);
module.exports = router;
