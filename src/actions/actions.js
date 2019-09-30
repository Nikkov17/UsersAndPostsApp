import jsonplaceholderapi from '../api/jsonplaceholderapi';

export function getUsers() {
	return {
		type: 'PROMISE_GET_USERS',
		promise: jsonplaceholderapi.getUsers()
	};
}

export function getPosts() {
	return {
		type: 'PROMISE_GET_POSTS',
		promise: jsonplaceholderapi.getPosts()
	};
}
