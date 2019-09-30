import constants from './constants';

const getUsers = function () {
	return fetch(constants.getUsersUrl)
		.then(response => response.json())
		.then(json => {
			return json;
		});
};

const getPosts = function () {
	return fetch(constants.getPostsUrl)
		.then(response => response.json())
		.then(json => {
			return json;
		});
};

export default { getUsers, getPosts };
