import { types } from './actions';

/**
 * @type {{count: number}}
 */
const initialState = {
	count: 0
};

/**
 *
 * @param state
 * @param payload
 * @returns {*}
 */
function incrementDecrement(state, payload) {
	return {
		...state,
		count: state.count + payload
	}
}

/**
 *
 * @param state
 * @param payload
 * @returns {*}
 */
function reset(state, payload) {
	return {
		...state,
		count: payload
	}
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = initialState, action = {}) => {
	switch (action.type) {
		case types.INCREMENT:
		case types.DECREMENT:
			return incrementDecrement(state, action.payload);
		case types.RESET:
			return reset(state, action.payload);
		default:
			return state;
	}
}