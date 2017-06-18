import React from 'react';

export default (props) => {
	const videos = props.videos;
	return (
		<ul className="col-md-4 list-group">
			{videos.length}
		</ul>
	);
}