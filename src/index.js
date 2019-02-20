import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import { browserHistory } from './history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const {store, persistor} = configureStore();
syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={<div>loading...</div>}>
			<Router history={browserHistory}>
				<Switch>
					<Route exact component={App} path={'/'} />
					<Redirect from={'*'} to={'/'}/>
				</Switch>
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
