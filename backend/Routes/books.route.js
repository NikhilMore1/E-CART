const express = require('express');
const upload = require('../Middleware/Watchupload');
const { addBooks, getAllBooks, getBookById } = require('../Controllers/books.controller');
const router = express.Router();
router.post('/',upload.single('image'),addBooks);
router.get('/',getAllBooks);
router.get('/:id',getBookById);
module.exports = router;