const express = require('express');
const upload = require('../../Middleware/Watchupload');
const { addKurtas, getAllKurtas, getKurtasById } = require('../../Controllers/MensKurtas.controller');
const router = express.Router();
router.post('/',upload.single('image'),addKurtas);
router.get('/',getAllKurtas);
router.get('/:id',getKurtasById); 
module.exports = router;