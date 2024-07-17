const express = require('express');
const Otp_gen = require('../Controllers/otp_generation.controller');
const router = express.Router();

router.post('/',Otp_gen);

module.exports = router;
   