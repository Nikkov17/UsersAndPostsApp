import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersList from './userslist.component';
import { getUsers } from '../../actions/actions';

const mapStateToProps = (state) => { return { usersList: state.usersList }; };
const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);