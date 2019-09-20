const getUsers = function () {
	return fetch(`https://jsonplaceholder.typicode.com/users`)
		.then(response => response.json())
		.then(json => {
			return json;
		});

};

const getPosts = function () {
	return fetch(`https://jsonplaceholder.typicode.com/posts`)
		.then(response => response.json())
		.then(json => {
			return json;
		});
};

export default { getUsers, getPosts };
