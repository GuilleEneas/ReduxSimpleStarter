import React from 'react';

import VideoItem from './video_item';

export default (props) => {
	const videos = props.videos.map((video, index) => <VideoItem key={index} video={video} />);
	return (
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	);
}