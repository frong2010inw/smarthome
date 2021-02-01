var express = require('express');
var router = express.Router();

let index = require('../controllers/index')
let frong = require('../controllers/frong')
/* GET home page. */
router.get('/', index.index);
router.get('/frong', frong.frong)
module.exports = router;
