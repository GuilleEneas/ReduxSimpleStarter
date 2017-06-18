import React from 'react';

import VideoItem from './video_item';

export default (props) => {
	const videos = props.videos.map(video => <VideoItem key={video.etag} video={video} />);

	return (
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	);
}