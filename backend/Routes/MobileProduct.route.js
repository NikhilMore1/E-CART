const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Mobileupload');
const { addMobiles, getAllMobile, GetAllMobileById } = require('../Controllers/MobileProducts.contoller');
router.post('/',upload.single('image'),addMobiles);
router.get('/',getAllMobile);
router.get('/:id',GetAllMobileById);
module.exports = router;