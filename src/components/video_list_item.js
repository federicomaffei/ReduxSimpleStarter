import React from 'react';

const VideoListItem = props => {
  console.log(props);

  return (
    <li>
      {props.video.snippet.title}
    </li>
  )
};

export default VideoListItem;