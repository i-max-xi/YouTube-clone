import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faClock,
  faNewspaper,
  faHistory as faHistorySolid,
  faChevronDown,
  faUser,
  faScissors,
  faArchive,
  faUsers,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type SideBarProps = {
  isSidebarOpen: boolean;
};

const SideBar = ({ isSidebarOpen }: SideBarProps) => {
  const sidebarItems = [
    { id: "home", icon: faHome, label: "Home" },
    { id: "shorts", icon: faFire, label: "Shorts" },
    { id: "subscriptions", icon: faCreditCard, label: "Subscriptions" },
    { id: "divider1", isDivider: true },
    { id: "library", icon: faNewspaper, label: "Library" },
    { id: "history", icon: faHistorySolid, label: "History" },
    { id: "your-videos", icon: faArchive, label: "Your Videos" },
    { id: "watch-later", icon: faClock, label: "Watch Later" },
    { id: "your-clips", icon: faScissors, label: "Your Clips" },
    { id: "show-more", isShowMore: true, label: "Show more" },
    { id: "divider2", isDivider: true },
    { id: "subscriptions-heading", label: "Subscriptions" },
    { id: "subscription-1", icon: faUsers, label: "Tech Tips" },
    { id: "subscription-2", icon: faUser, label: "Danny Jones" },
    { id: "subscription-3", icon: faUser, label: "CS50" },
  ];

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="app__sidebar">
      {sidebarItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${activeItem === item.id ? "active" : ""} ${
            item.isDivider ? "divider" : ""
          } ${item.isShowMore ? "show-more" : ""}`}
          onClick={() => handleItemClick(item.id)}
        >
          {item.icon && <FontAwesomeIcon icon={item.icon} />}
          {isSidebarOpen && <span>{item.label}</span>}
          {item.isShowMore && (
            <div className="show-more-icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
