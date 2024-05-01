'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {
			// define association here
		}
	}
	Product.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Description is required' },
					notEmpty: { msg: 'Description is required' },
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: 'Price is required' },
					notEmpty: { msg: 'Price is required' },
					min: {
						args: [0],
						msg: 'Price must be more or equal than 0',
					},
				},
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: 'Stock is required' },
					notEmpty: { msg: 'Stock is required' },
					min: {
						args: [0],
						msg: 'Stock must be more or equal than 0',
					},
				},
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Brand is required' },
					notEmpty: { msg: 'Brand is required' },
				},
			},
			thumbnail: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Thumbnail is required' },
					notEmpty: { msg: 'Thumbnail is required' },
				},
			},
		},
		{
			sequelize,
			modelName: 'Product',
		}
	);
	return Product;
};
