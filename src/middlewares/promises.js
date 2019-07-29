const middleware = store => next => action => {
	if (!action.type.includes('PROMISE')) {
		return next(action);
	}

	if(action.type.includes('getUsers')) {
		return action.promise.then((data) => store.dispatch({
			type: 'UPDATE_Users',
			list: data
		}));
	} else if(action.type.includes('getPosts')) {
		return action.promise.then((data) => store.dispatch({
			type: 'UPDATE_Posts',
			list: data
		}));
	}
};

export default middleware;
