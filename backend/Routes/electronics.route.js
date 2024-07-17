const express = require('express');
const router = express.Router();
const up = require('../Middleware/Mobileupload');
const { Addelec, getAllElec, getElecById } = require('../Controllers/electronics.controller');
router.post('/',up.single('image'),Addelec);
router.get('/',getAllElec);
router.get('/:id',getElecById);

module.exports = router; 