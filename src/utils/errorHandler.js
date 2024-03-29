import logger from "./logger";

const catchErrors = fn => {
	return function(req, res, ...args) {
		return fn(req, res, ...args).catch(error => {
			logger.error(error);
			res.status(400).json({
				status: false,
				errors: error.errors || error.message
			});
		});
	};
};

const notFound = (req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
};

export {
    catchErrors,
    notFound
}