/**
 * @type {{INCREMENT: string, RESET: string, DECREMENT: string}}
 */
export const types = {
	INCREMENT: 'counter.INCREMENT',
	DECREMENT: 'counter.DECREMENT',
	RESET: 'counter.RESET'
};

/**
 * @returns {{payload: number, type: string}}
 */
export function increment() {
	return {
		type: types.INCREMENT,
		payload: 1
	}
}

/**
 * @returns {{payload: number, type: string}}
 */
export function decrement() {
	return {
		type: types.DECREMENT,
		payload: -1
	}
}

/**
 * @returns {{payload: number, type: string}}
 */
export function reset() {
	return {
		type: types.RESET,
		payload: 0
	}
}