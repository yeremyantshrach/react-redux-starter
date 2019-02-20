import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { browserHistory } from '../history';

import * as reducers from './reducers';

const middleware = [thunk, routerMiddleware(browserHistory)],
	persistConfig = {
		key: 'root',
		storage,
		blacklist: ['routing']
	},
	rootReducer = combineReducers(reducers),
	persistedReducer = persistReducer(persistConfig, rootReducer);

if (process.env.NODE_ENV === 'development') {
	const {createLogger} = require('redux-logger');
	middleware.push(createLogger({collapsed: true}));
}

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
	let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware))),
		persistor = persistStore(store);
	return {store, persistor};
};

export default configureStore;
