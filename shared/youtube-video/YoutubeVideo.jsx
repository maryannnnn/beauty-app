import React from 'react';

const YouTubeVideo = () => {
    return (
        <div className="youtube-video">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PY2Lf5WWI4U?si=B94JWsgKpzcpXpl1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default YouTubeVideo;