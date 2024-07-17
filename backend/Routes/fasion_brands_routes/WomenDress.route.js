const express = require('express');
const upload = require('../../Middleware/Mobileupload');
const { addWomenDress, getAllWomenDress } = require('../../Controllers/WomenDress.controller');
const router = express.Router();
router.post('/',upload.single('image'),addWomenDress);
router.get('/',getAllWomenDress);

module.exports = router;