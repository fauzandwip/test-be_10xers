const guardAdminOnly = async (req, res, next) => {
	try {
		const { role } = req.user;

		if (role !== 'ADMIN') {
			throw {
				name: 'Forbidden',
				message: 'You are not authorized, ADMIN ONLY',
			};
		}

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = {
	guardAdminOnly,
};
