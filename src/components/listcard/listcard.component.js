import React from 'react';
import './listcard.scss';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
	constructor(props) {
		super(props);
		this.onCardClick = this.onCardClick.bind(this);
	}

	onCardClick() {
		const { history } = this.props;
		const { item } = this.props;
		let url;

		if (history.location.pathname.includes('posts')) {
			url = `/posts/${item.id}`;
			history.push(url);
		} else if (history.location.pathname.includes('users')) {
			url = `/users/${item.id}`;
			history.push(url);
		}
	}

	render() {
		const { item } = this.props;

		return (
			<li className="card" onClick={this.onCardClick}>
				<p className="card-text card-title">{item.title || item.name}</p>
				<p className="card-text">{item.body || item.email}</p>
				{item.phone ? <p className="card-text">phone: {item.phone}</p> : null}
				{item.username ? <p className="card-text">username: {item.username}</p> : null}
				{item.website ? <p className="card-text">website: {item.website}</p> : null}
				{item.id ? <p className="card-text">id: {item.id}</p> : null}
			</li>
		);
	}
}

ListCard.propTypes = {
	item: PropTypes.object,
	history: PropTypes.object
};

export default ListCard;
