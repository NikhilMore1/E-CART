const express = require('express');
const { Addsearch, getAllSearch, getSearchById } = require('../Controllers/Search.controller');
const router = express.Router();

router.post('/', Addsearch);
router.get('/',getAllSearch);
router.get('/:id',getSearchById);
module.exports = router;
