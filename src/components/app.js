import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

import { API_KEY } from './../secrets/secrets';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		YTSearch({ key: API_KEY, term: 'patatas' }, videos => {
			this.setState({ videos });
		});
	} 
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}
