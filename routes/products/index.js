const ProductController = require('../../controllers/ProductController');
const authentication = require('../../middlewares/authentication');
const { guardAdminOnly } = require('../../middlewares/authorization');

const router = require('express').Router();

router.use(authentication, guardAdminOnly);
router.get('/', ProductController.getAllProducts);

module.exports = router;
