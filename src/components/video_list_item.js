import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const imageHeading = video.snippet.title;

    return (
        <li className="list-group-item" onClick={ () => onVideoSelect(video) }>
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>

                <div className="media-body">
                    <div className="media-heading">{ imageHeading }</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;