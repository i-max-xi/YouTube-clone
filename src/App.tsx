import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import FilterChips from './FilterChips';

function App() {

  const filters = [
    { name: "All", active: true },
    { name: "Live", active: false },
    { name: "React", active: false },
    { name: "Angular", active: false },
    { name: "Vue", active: false },
    { name: "Node", active: false },
    { name: "Express", active: false },
    { name: "MongoDB", active: false },
    { name: "Comedy", active: false },
    { name: "Recently uploaded", active: false },
    { name: "New to you", active: false },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} notificationCount={5}/>
      <div className="app__content">
      <SideBar isSidebarOpen={isSidebarOpen} />

        <div className="app__main">
          <FilterChips filters={filters} />
          {/* <div className="videoPlayer">
            <video controls width="100%">
              <source src="YOUR_VIDEO_URL" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default App;
