export default function postsReducer(state = {}, action) {
	const list = action.list || [];

	switch (action.type) {
		case 'UPDATE_POSTS':
			return { ...state, list };
		default:
			return state;
	}
}
