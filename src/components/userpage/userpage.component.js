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
			const {name, email, phone, username, website, address, company, id} = users[0];
			userCard = <div className="User-page-card Post-page-card">
				<div className="card-text card-title">
				Name:
				{name}
				</div>
				<div className="card-text">
				Email:
				{email}
				</div>
				<div className="card-text">
				Phone:
				{phone}
				</div>
				<div className="card-text">
				Username:
				{username}
				</div>
				<div className="card-text">
				Website:
				{website}
				</div>
				<div className="card-text">
				Address:
				{address.city} + {address.street} + {address.suite}
				Zipcode:
				{address.zipcode}
				</div>
				<div className="card-text">
				Company:
				{company.name}
				</div>
				<div className="card-text card-title">
				User id:
				{id}
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
