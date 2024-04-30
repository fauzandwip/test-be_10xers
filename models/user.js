'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notNull: { msg: 'Email is required' },
					notEmpty: { msg: 'Email is required' },
					isEmail: { msg: 'Email already exists' },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Password is required' },
					notEmpty: { msg: 'Password is required' },
					len: {
						args: [5],
						msg: 'Password must be more than 5 characters',
					},
				},
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Username is required' },
					notEmpty: { msg: 'Username is required' },
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
