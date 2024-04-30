'use strict';

const { hashPassword } = require('../helpers/bcrypt');

require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const username = process.env.ADMIN_USERNAME;
		const email = process.env.ADMIN_EMAIL;
		const password = process.env.ADMIN_PASSWORD;

		if (!username) {
			throw Error('Username Admin is required');
		}
		if (!email) {
			throw Error('Email Admin is required');
		}
		if (!password) {
			throw Error('Password Admin is required');
		}
		if (password.length < 5) {
			throw Error('Password Admin must be more than or equal to 5 characters');
		}

		const userAdmin = {
			username,
			email,
			password: hashPassword(password),
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		await queryInterface.bulkInsert('Users', [userAdmin], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
