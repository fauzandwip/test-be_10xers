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
	static async getProductById(req, res, next) {
		try {
			const { id } = req.params;
			const product = await Product.findByPk(id);

			if (!product) {
				throw {
					name: 'NotFound',
					message: 'Product not found',
				};
			}

			res.status(200).json({
				status: 'success',
				message: 'Success Get Product By Id',
				data: product,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
