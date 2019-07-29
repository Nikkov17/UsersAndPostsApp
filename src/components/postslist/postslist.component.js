import React from 'react';
import './postslist.scss';
import PropTypes from 'prop-types';
import ListCard from '../listcard/listcard.component';

class PostsList extends React.Component {
	componentDidMount() {
		const { getPosts } = this.props;
		const { postsList } = this.props;

		if (!postsList.list || !postsList.list.length) {
			getPosts();
		}
	}

	render() {
		const { history } = this.props;
		const { postsList } = this.props;
		const Ul = <ul className="posts-list">
			{postsList && postsList.list
				? postsList.list.map((item) => <ListCard key={item.id} item={item} history={history} />)
				: null}
			</ul>;

		return (
			<div className="posts-page">
				<h1>Posts list:</h1>
				{Ul}
			</div>
		);
	}
}

PostsList.propTypes = {
	history: PropTypes.object,
	getPosts: PropTypes.func,
	postsList: PropTypes.object
};

export default PostsList;