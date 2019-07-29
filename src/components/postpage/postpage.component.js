import React from 'react';
import PropTypes from 'prop-types';
import './postpage.scss';

class PostPage extends React.Component {
	componentDidMount() {
		const { getPosts } = this.props;
		const { postsList } = this.props;

		if(!postsList.list || !postsList.list.length) {
			getPosts();
		}
	}

	render() {
		const { history } = this.props;
		const { postsList } = this.props;
		let postId = history.location.pathname.split('/');
		let post;
		let card;

		postId = postId[postId.length - 1];

		if (postsList.list) {
			post = postsList.list.filter((item) => item.id == postId);
		}

		if (post && post[0]) {
			card = <div className="Post-page-card">
				<div className="card-text card-title">
				{post[0].title}
				</div>
				<div className="card-text">
				{post[0].body}
				</div>
				<div className="card-text card-title">
				User id:
				{post[0].userId}
				</div>
			</div>;
		}

		return (
			<div className="Post-page">
				{card}
			</div>
		);
	}
}

PostPage.propTypes = {
	history: PropTypes.object,
	getPosts: PropTypes.func,
	postsList: PropTypes.object
};

export default PostPage;
