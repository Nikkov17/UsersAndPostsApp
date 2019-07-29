import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsList from './postslist.component';
import { getPosts } from '../../actions/actions';

const mapStateToProps = (state) => { return { postsList: state.postsList }; };
const mapDispatchToProps = (dispatch) => bindActionCreators({ getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);