const ProductController = require('../../controllers/ProductController');
const authentication = require('../../middlewares/authentication');
const { guardAdminOnly } = require('../../middlewares/authorization');

const router = require('express').Router();

router.use(authentication, guardAdminOnly);
// get all product
router.get('/', ProductController.getAllProducts);

// get product by id
router.get('/:id', ProductController.getProductById);

// create product
router.post('/', ProductController.createProduct);

// update product by id
router.put('/:id', ProductController.updateProductById);

// delete product by id
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;
