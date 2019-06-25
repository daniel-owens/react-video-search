import React from "react";
import VideoItem from "./VideoItem";

// I have destructured this function
// the videos prop has already been passed from my App.js parent component
// I access the videos prop via this destructured code
const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return(
			<VideoItem 
				key={video.id.videoId}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		)
	})
	return( 
		<div className="ui relaxed divided list">
			{renderedList}	
		</div>
	)
}

export default VideoList;