const middleware = store => next => action => {
	if (!action.type.includes('PROMISE')) {
		return next(action);
	}

	if(action.type.includes('GET_USERS')) {
		return action.promise.then((data) => store.dispatch({
			type: 'UPDATE_USERS',
			list: data
		}));
	} else if(action.type.includes('GET_POSTS')) {
		return action.promise.then((data) => store.dispatch({
			type: 'UPDATE_POSTS',
			list: data
		}));
	}
};

export default middleware;
