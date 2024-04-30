const ProductController = require('../../controllers/ProductController');
const authentication = require('../../middlewares/authentication');
const { guardAdminOnly } = require('../../middlewares/authorization');

const router = require('express').Router();

router.use(authentication, guardAdminOnly);
// get all product
router.get('/', ProductController.getAllProducts);
// get product by id
router.get('/:id', ProductController.getProductById);
// add product
router.post('/', ProductController.addProduct);
// update product
router.put('/:id', ProductController.updateProduct);

module.exports = router;
