import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserPage from './userpage.component';
import { getPosts, getUsers } from '../../actions/actions';

const mapStateToProps = (state) => { return {
	postsList: state.postsList,
	usersList: state.usersList
};};
const mapDispatchToProps = (dispatch) => bindActionCreators({ getPosts, getUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);