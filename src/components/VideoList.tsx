// VideoList.tsx

import React from 'react';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: Array<{ title: string; thumbnailUrl: string; channelName: string }>;
}

function VideoList({ videos }: VideoListProps) {
  return (
    <div className="videoList">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          channelName={video.channelName}
        />
      ))}
    </div>
  );
}

export default VideoList;
