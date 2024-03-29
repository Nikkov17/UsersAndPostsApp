import React from 'react';
import './header.scss';
import constants from '../../api/constants';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.postsLinkClick = this.postsLinkClick.bind(this);
		this.usersLinkClick = this.usersLinkClick.bind(this);
	}
	
	postsLinkClick() {
		const url = constants.postsUrl;

		this.props.history.push(url);
	}

	usersLinkClick() {
		const url = constants.usersUrl;

		this.props.history.push(url);
	}

	render() {
		return (
			<React.Fragment>
				<h1 className="title">Choose page</h1>
				<div className="page-titles">
					<p className="link" onClick={this.postsLinkClick}>Posts List</p>
					<p className="link" onClick={this.usersLinkClick}>Users List</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
