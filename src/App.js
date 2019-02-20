import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActions from './store/counter/actions';
import * as counterSelectors from './store/counter/selectors';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.onIncrementHandler = this.onIncrementHandler.bind(this);
		this.onDecrementHandler = this.onDecrementHandler.bind(this);
		this.onResetHandler = this.onResetHandler.bind(this);
	}

	onIncrementHandler(e) {
		e.preventDefault();
		this.props.onIncrement();
	}

	onDecrementHandler(e) {
		e.preventDefault();
		this.props.onDecrement();
	}

	onResetHandler(e) {
		e.preventDefault();
		this.props.onReset();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						React-redux starter
					</p>
					<p>
						<code>{this.props.counter}</code>
					</p>
					<div>
						<button type={'button'} onClick={this.onIncrementHandler}>Increment</button>
					</div>
					<div>
						<button type={'button'} onClick={this.onDecrementHandler}>Decrement</button>
					</div>
					<div>
						<button type={'button'} onClick={this.onResetHandler}>Reset</button>
					</div>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: counterSelectors.getCount(state)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => dispatch(counterActions.increment()),
		onDecrement: () => dispatch(counterActions.decrement()),
		onReset: () => dispatch(counterActions.reset())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
