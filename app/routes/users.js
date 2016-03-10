var express = require('express');
var router = express.Router();

var users = require('../controllers/Users');

/* GET the listing Users */
router.get('/', users.index);

/* POST New Users */
router.post('/', users.create);

/* GET the listing Users */
router.put('/:id(\\d+)', users.update);

/* GET the listing Users */
router.delete('/:id(\\d+)', users.delete);

module.exports = router;