const express = require('express');
const upload = require('../Middleware/Mobileupload');
const { addBeauty, getAllBeauty, getAllBeautyById } = require('../Controllers/Beauty.controller');
const router = express.Router();
router.post('/',upload.single('image'),addBeauty);
router.get('/',getAllBeauty);
router.get('/:id',getAllBeautyById);

module.exports = router;