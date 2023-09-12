// VideoCard.tsx

import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  channelName: string;
}

function VideoCard({ title, thumbnailUrl, channelName }: VideoCardProps) {
  return (
    <div className="videoCard">
      <img src={thumbnailUrl} alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <h2>{title}</h2>
        <p>{channelName}</p>
      </div>
    </div>
  );
}

export default VideoCard;
