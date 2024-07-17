const express = require('express');
const Wupload = require('../Middleware/Watchupload');
const { addWatches, getAllWatches, getWatchById } = require('../Controllers/WatchProduct.controller');
const router = express.Router();

router.post('/',Wupload.single('image'),addWatches);
router.get('/',getAllWatches);
router.get('/:id',getWatchById);

module.exports = router;