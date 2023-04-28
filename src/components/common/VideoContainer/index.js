import React, { useState, useEffect } from 'react';

const VideoContainer = ({ children, url, className, stop }) => {
    const [videoMode, setVideoMode] = useState(false);

    useEffect(() => {
        setVideoMode(false);
    }, [stop]);

    return (
        <div className={`video-container ${className}`} onClick={() => setVideoMode(true)}>
            <div className={`thumbnail-container ${!videoMode ? 'show' : ''}`}>
                { children }
            </div>
            { (videoMode && !stop) && (
                <iframe width="100%"
                        height="100%"
                        src={`${url}?autoplay=1&mute=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        className={`video-frame ${videoMode ? 'show' : ''}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                />
            )}
        </div>
    );
};

export default VideoContainer;
