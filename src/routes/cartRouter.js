const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/show', cartController.show)
router.post('/:id', cartController.add)
/* router.delete('/:id', remove) */

module.exports = router;
