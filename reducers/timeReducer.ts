import { TIME_CHANGE } from '../constants';

const initialState = { time: '' };

const timeReducer = (state = initialState, action) => {
	switch(action.type) {
		case TIME_CHANGE:
			return {
				time: action.result
			};
		default: 
			return state;
	}
}
export default timeReducer;
