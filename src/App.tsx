import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import FilterChips from './FilterChips';

function App() {

  const filters = [
    "All",
    "Live",
    "React",
    "Angular",
    "Vue",
    "Node",
    "Express",
    "MongoDB",
    "Comedy",
    "Recently uploaded",
    "New to you",
  ];
  
  const [activeFilter, setActiveFilter] = useState('All');


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} notificationCount={5}/>
      <div className="app__content">
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

        <div className="app__main">
        <FilterChips filters={filters} setActiveFilter={setActiveFilter} activeFilter={activeFilter}/>
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
