const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class AuthController {
	static async login(req, res, next) {
		try {
			const { email, password } = req.body;

			if (!email) {
				throw {
					name: 'BadRequest',
					message: 'Email is required',
				};
			}
			if (!password) {
				throw {
					name: 'BadRequest',
					message: 'Password is required',
				};
			}

			const user = await User.findOne({ where: { email } });

			if (!user || !comparePassword(password, user.password)) {
				throw {
					name: 'Unauthenticated',
					message: 'Invalid email/password',
				};
			}

			const accessToken = signToken({ id: user.id, email: user.email });

			res.status(200).json({
				status: 'success',
				message: 'Success Login',
				access_token: accessToken,
				user: {
					id: user.id,
					username: user.username,
					email: user.email,
				},
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AuthController;
