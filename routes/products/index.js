const ProductController = require('../../controllers/ProductController');

const router = require('express').Router();

router.get('/', ProductController.getAllProducts);

module.exports = router;
