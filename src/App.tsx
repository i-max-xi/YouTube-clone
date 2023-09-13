import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} notificationCount={5}/>
      <div className="app__content">
          { isSidebarOpen && <SideBar />}

        <div className="app__main">
          <div className="videoPlayer">
            <video controls width="100%">
              <source src="YOUR_VIDEO_URL" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
