import React from 'react';
import PropTypes from 'prop-types';
import './userpage.scss';

class UserPage extends React.Component {
	componentDidMount() {
		const { getPosts } = this.props;
		const { getUsers } = this.props;
		const { postsList } = this.props;
		const { usersList } = this.props;

		if(!usersList.list || !usersList.list.length) {
			getUsers();
		}
		if(!postsList.list || !postsList.list.length) {
			getPosts();
		}
	}

	render() {
		const { history } = this.props;
		const { postsList } = this.props;
		const { usersList } = this.props;
		let userId = history.location.pathname.split('/');
		let users;
		let posts;
		let userCard;
		let postsCardsList;

		userId = userId[userId.length - 1];

		if (usersList.list) {
			users = usersList.list.filter((item) => item.id == userId);
		}
		if (postsList.list) {
			posts = postsList.list.filter((item) => item.userId == userId);
		}

		if (users && users.length) {
			userCard = <div className="User-page-card Post-page-card">
				<div className="card-text card-title">
				Name:
				{users[0].name}
				</div>
				<div className="card-text">
				Email:
				{users[0].email}
				</div>
				<div className="card-text">
				Phone:
				{users[0].phone}
				</div>
				<div className="card-text">
				Username:
				{users[0].username}
				</div>
				<div className="card-text">
				Website:
				{users[0].website}
				</div>
				<div className="card-text">
				Address:
				{users[0].address.city} + {users[0].address.street} + {users[0].address.suite}
				Zipcode:
				{users[0].address.zipcode}
				</div>
				<div className="card-text">
				Company:
				{users[0].company.name}
				</div>
				<div className="card-text card-title">
				User id:
				{users[0].id}
				</div>
			</div>;
		}
		if (posts && posts.length) {
			postsCardsList = <ul className="posts-cards-list">
				{posts.map(post => <li key={post.id} className="User-page-card Post-page-card">
					<div className="card-text card-title">
					{post.title}
					</div>
					<div className="card-text">
					{post.body}
					</div>
					<div className="card-text card-title">
					User id:
					{post.userId}
					</div>
				</li>
			)}</ul>
		}

		return (
			<div className="User-page">
				{userCard}
				<p className="card-text card-title user-posts-title">User posts:</p>
				{postsCardsList}
			</div>
		);
	}
}

UserPage.propTypes = {
	history: PropTypes.object,
	getPosts: PropTypes.func,
	getUsers: PropTypes.func,
	postsList: PropTypes.object,
	usersList: PropTypes.object
};

export default UserPage;
