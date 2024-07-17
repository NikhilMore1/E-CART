const express = require('express');
const upload = require('../../Middleware/Mobileupload');
const { register, loginUser } = require('../../Controllers/Log_reg/Registration.controller');
const router = express.Router();
router.post('/',upload.single('image'),register);
router.post('/log',loginUser)
module.exports = router;