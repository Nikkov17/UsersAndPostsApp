import jsonplaceholderapi from '../api/jsonplaceholderapi';

export function getUsers() {
	return {
		type: 'PROMISE_getUsers',
		promise: jsonplaceholderapi.getUsers()
	};
}

export function getPosts() {
	return {
		type: 'PROMISE_getPosts',
		promise: jsonplaceholderapi.getPosts()
	};
}
