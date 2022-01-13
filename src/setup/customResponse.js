module.exports = function setupCustomResponse(req, res, next) {
    res.is = {

		ok: data => {
			sendResponse(200, { status: true, ...data }, res);
		},
		updated: data => {
			sendResponse(204, { status: true, ...data }, res);
		},

		created: data => {
			sendResponse(201, { status: true, ...data }, res);
		},

		badRequest: (data, code = 400) => {
			let responseCode = code;
			if (code < 400 || code >= 500) {
				responseCode = 400;
			}
			sendResponse(responseCode, { ...data, status: false }, res);
		},

		serverError: message => {
			sendResponse(500, { status: true, ...message }, res);
		}
    };
    next();
}

function sendResponse(code, data, res) {
	return res.status(code).json(data);
}