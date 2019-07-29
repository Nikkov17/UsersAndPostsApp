import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import InvalidPage from '../404page/404page.component';
import UsersList from '../userslist/userslist.container';
import UserPage from '../userpage/userpage.container';
import PostsList from '../postslist/postslist.container';
import PostPage from '../postpage/postpage.container';

class Main extends React.Component {
	render() {
		const { history } = this.props;

		return (
			<Switch>
				<Route exact={true} path={'/users'} render={() => <UsersList history={history} />} />
				<Route exact={true} path={'/users/:id'} render={() => <UserPage history={history}/>} />
				<Route exact={true} path={'/posts'} render={() => <PostsList history={history}/>} />
				<Route exact={true} path={'/posts/:id'} render={() => <PostPage history={history}/>} />
				<Route exact={true} path={'/'} />
				<Route component={InvalidPage} />
			</Switch>
		);
	}
}

Main.propTypes = {
	history: PropTypes.object
};

export default Main;
