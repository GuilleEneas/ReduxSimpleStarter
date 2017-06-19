import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import Video from './video';

import { API_KEY } from './../secrets/secrets';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.queryVideos('surfboards');
	}

	render() {
		const searchVideo = _.debounce((term => this.queryVideos(term)), 300);
		return (
			<div>
				<SearchBar onNewTerm={searchVideo}/>
				<Video video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos} />
			</div>
		);
	}

	queryVideos(term) {
		YTSearch({ key: API_KEY, term }, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}
}
