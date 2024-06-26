const { Op } = require('sequelize');
const { Product } = require('../models');

class ProductController {
	static async getAllProducts(req, res, next) {
		try {
			const { search } = req.query;
			const query = { where: {} };

			if (search) {
				query.where['title'] = {
					[Op.iLike]: `%${search}%`,
				};
			}

			const products = await Product.findAll(query);

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
	static async createProduct(req, res, next) {
		try {
			const { title, description, price, stock, brand, thumbnail } = req.body;

			const newProduct = await Product.create({
				title,
				description,
				brand,
				thumbnail,
				price: +price,
				stock: +stock,
			});

			res.status(201).json({
				status: 'success',
				message: 'Success Create Product',
				data: newProduct,
			});
		} catch (error) {
			next(error);
		}
	}
	static async updateProductById(req, res, next) {
		try {
			const { id } = req.params;
			const { title, description, price, stock, brand, thumbnail } = req.body;

			const product = await Product.findByPk(id);

			if (!product) {
				throw {
					name: 'NotFound',
					message: 'Product not found',
				};
			}

			await product.update({
				title,
				description,
				brand,
				thumbnail,
				price: +price,
				stock: +stock,
			});

			res.status(200).json({
				status: 'success',
				message: 'Success Update Product',
			});
		} catch (error) {
			next(error);
		}
	}
	static async deleteProductById(req, res, next) {
		try {
			const { id } = req.params;

			const product = await Product.findByPk(id);

			if (!product) {
				throw {
					name: 'NotFound',
					message: 'Product not found',
				};
			}

			await product.destroy();

			res.status(200).json({
				status: 'success',
				message: 'Success Delete Product',
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
