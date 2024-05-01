const errorHandler = (err, req, res, next) => {
	let message, messages, statusCode;

	switch (err.name) {
		case 'BadRequest':
			statusCode = 400;
			message = err.message ?? 'Invalid user input';
			break;

		case 'SequelizeValidationError':
			statusCode = 400;
			messages = err.errors.map((error) => {
				return error.message;
			});
			break;

		case 'JsonWebTokenError':
			statusCode = 400;
			message = err.message ?? 'Invalid Token';
			break;

		case 'Unauthenticated':
			statusCode = 401;
			message = err.message ?? 'Unauthenticated';
			break;

		case 'NotFound':
			statusCode = 404;
			message = err.message ?? 'Not Found';
			break;

		case 'SequelizeConstraintError':
			statusCode = 409;
			message = err.errors[0].message;
			break;

		default:
			statusCode = 500;
			message = 'Internal Server Error';
			break;
	}

	console.log(err, statusCode);
	res.status(statusCode).json({
		status: 'error',
		[message ? 'message' : 'messages']: message ? message : messages,
	});
};

module.exports = errorHandler;
