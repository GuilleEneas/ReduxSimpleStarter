import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';

import { API_KEY } from './../secrets/secrets';

YTSearch({ key: API_KEY, term: 'patatas' }, response => console.log(response));

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
