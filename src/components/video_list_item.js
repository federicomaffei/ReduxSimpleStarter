import React from 'react';

const VideoListItem = props => {
  console.log(props);

  return (
    <li key={props.video.id.videoId}>
      {props.video.snippet.title}
    </li>
  )
};

export default VideoListItem;