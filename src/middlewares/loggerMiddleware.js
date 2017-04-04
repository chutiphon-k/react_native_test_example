const loggerMiddleware = store => next => action => {
	console.log('in logger', action)

	next(action)
}

export default loggerMiddleware