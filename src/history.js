import { createBrowserHistory } from 'history';
import { parse } from 'qs';

const baseURL = document.getElementsByTagName('base')[0].getAttribute('href'),
	browserHistory = createBrowserHistory({basename: baseURL});
browserHistory.location = {
	...browserHistory.location,
	query: parse(browserHistory.location.search.substr(1)),
	state: {
		modal: false,
		scroll: false
	},
};

/**
 * this history listening if for get the query key in history as {key: value}
 */
browserHistory.listen(() => {
	browserHistory.location = {
		...browserHistory.location,
		query: parse(browserHistory.location.search.substr(1))
	};
});

export {
	browserHistory
};