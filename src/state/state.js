import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from '../reducers/postsreducer';
import usersReducer from '../reducers/usersreducer';
import promisesMiddleware from '../middlewares/promises';

const reducer = combineReducers({
	postsList: postsReducer,
	usersList: usersReducer
});

let createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
	postsList: {},
	usersList: {}
});

export default store;
