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
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
				},
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
				},
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
				},
			},
			thumbnail: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Title is required' },
					notEmpty: { msg: 'Title is required' },
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
