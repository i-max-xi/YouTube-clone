import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faHistory,
  faVideo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type SideBarProps ={
  isSidebarOpen: boolean;
}

const SideBar = ({ isSidebarOpen }: SideBarProps) => {

  const sidebarItems = [
    { id: 'home', icon: faHome, label: 'Home' },
    { id: 'trending', icon: faFire, label: 'Trending' },
    { id: 'history', icon: faHistory, label: 'History' },
    { id: 'your-videos', icon: faVideo, label: 'Your Videos' },
    { id: 'watch-later', icon: faClock, label: 'Watch Later' },
  ];
  
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="app__sidebar">
      {sidebarItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-icons ${activeItem === item.id ? 'active' : ''}`}
          onClick={() => handleItemClick(item.id)}
        >
          <FontAwesomeIcon icon={item.icon} />
          {isSidebarOpen && <span>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
