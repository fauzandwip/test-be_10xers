'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const products = require('../dummy_data/products.json').map((product) => {
			product.createdAt = product.updatedAt = new Date();
			return product;
		});

		await queryInterface.bulkInsert('Products', products, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
