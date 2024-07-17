const express = require('express');
const { addHistory, getAllHistory, removeHistory } = require('../Controllers/History.controller');

const router = express.Router();

router.post('/',addHistory);
router.get('/',getAllHistory);
router.delete('/:id',removeHistory);
module.exports = router;
