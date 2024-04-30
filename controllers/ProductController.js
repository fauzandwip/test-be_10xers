const { Product } = require('../models');

class ProductController {
	static async getAllProducts(req, res, next) {
		try {
			const products = await Product.findAll();

			res.status(200).json({
				status: 'success',
				message: 'Success Get All Products',
				data: products,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
