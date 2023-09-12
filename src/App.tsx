
import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoList from './components/VideoList';
import SideBar from './components/SideBar';

function App() {
  const videos = [
    {
      title: 'Video 1',
      thumbnailUrl: 'URL_TO_THUMBNAIL_1',
      channelName: 'Channel 1',
    },
    {
      title: 'Video 2',
      thumbnailUrl: 'URL_TO_THUMBNAIL_2',
      channelName: 'Channel 2',
    },
    // Add more video data as needed
  ];

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <div className="app__sidebar">
          <SideBar />
        </div>

        <div className="app__main">
          {/* Video player */}
          <div className="videoPlayer">
            {/* Add your video player component here */}
            <video controls width="100%">
              <source src="YOUR_VIDEO_URL" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video list */}
          <VideoList videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default App;
