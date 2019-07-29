import React from 'react';
import './usersList.scss';
import PropTypes from 'prop-types';
import ListCard from '../listcard/listcard.component';

class UsersList extends React.Component {
	componentDidMount() {
		const { getUsers } = this.props;
		const { usersList } = this.props;

		if (!usersList.list || !usersList.list.length) {
			getUsers();
		}
	}

	render() {
		const { usersList } = this.props;
		const { history } = this.props;
		const Ul = <ul className="users-list">
			{usersList && usersList.list
				? usersList.list.map((item) => <ListCard key={item.id} item={item} history={history} />)
				: null}
			</ul>;

		return (
			<div className="users-page">
				<h1>Users list:</h1>
				{Ul}
			</div>
		);
	}
}

UsersList.propTypes = {
	history: PropTypes.object,
	getUsers: PropTypes.func,
	usersList: PropTypes.object
};

export default UsersList;
