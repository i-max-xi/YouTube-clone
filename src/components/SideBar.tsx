import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faHistory,
  faVideo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

type SideBarProps ={
  isSidebarOpen: boolean;
}


const SideBar = ({ isSidebarOpen }: SideBarProps) => {
  return (
    <div className='app__sidebar'>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faHome} />
        {isSidebarOpen && <span>Home</span>}
      </div>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faFire} />
        {isSidebarOpen && <span>Trending</span>}
      </div>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faHistory} />
        {isSidebarOpen && <span>History</span>}
      </div>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faVideo} />
        {isSidebarOpen && <span>Your Videos</span>}
      </div>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faClock} />
        {isSidebarOpen && <span>Watch Later</span>}
      </div>
    </div>
  );
};

export default SideBar;
