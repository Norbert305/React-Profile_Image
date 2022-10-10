const express = require('express'); //common js module syntext 
const router = express.Router();
const { getItems,createItem } = require('../controllers/items')
router.get('/',getItems)
router.post('/',createItem);

module.exports = router