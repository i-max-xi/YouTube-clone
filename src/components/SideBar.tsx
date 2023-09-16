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
  setIsSidebarOpen: (isopen: boolean) => void;
};

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }: SideBarProps) => {
  const allSidebarItems = [
    { id: "home", icon: faHome, label: "Home" },
    { id: "shorts", icon: faFire, label: "Shorts" },
    { id: "subscriptions", icon: faCreditCard, label: "Subscriptions" },
    { id: "divider1", isDivider: true },
    { id: "library", icon: faNewspaper, label: "Library" },
    { id: "history", icon: faHistorySolid, label: "History" },
    { id: "your-videos", icon: faArchive, label: "Your Videos" },
    { id: "watch-later", icon: faClock, label: "Watch Later" },
    { id: "your-clips", icon: faScissors, label: "Your Clips" },
    { id: "show-more", icon: faChevronDown, isShowMore: true, label: "Show more" },
    { id: "divider2", isDivider: true },
    { id: "subscriptions-heading", label: "Subscriptions" },
    { id: "subscription-1", icon: faUsers, label: "Tech Tips" },
    { id: "subscription-2", icon: faUser, label: "Danny Jones" },
    { id: "subscription-3", icon: faUser, label: "CS50" },
    { id: "subscription-4", icon: faUser, label: "John Doe" },
    { id: "subscription-5", icon: faUser, label: "Jane Smith" },
  ];

  const closedSidebarItems = [
    { id: "home", icon: faHome, label: "Home" },
    { id: "shorts", icon: faFire, label: "Shorts" },
    { id: "subscriptions", icon: faCreditCard, label: "Subscriptions" },
    { id: "library", icon: faNewspaper, label: "Library" },
    { id: "divider1", isDivider: false },
    { id: "show-more", isShowMore: false },
  ];

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsSidebarOpen(true);
  };

  const displayedItems = isSidebarOpen ? allSidebarItems : closedSidebarItems;

  return (
    <div className="app__sidebar">
      {displayedItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${activeItem === item.id && isSidebarOpen ? "active" : ""} ${
            item.isDivider ? "divider" : ""
          } ${item.isShowMore ? "show-more" : ""} ${
            isSidebarOpen ? "open-padding" : "sidebar-closed"
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          {item.icon && (
            <FontAwesomeIcon
              icon={item.icon}
              title={isSidebarOpen ? "" : item.label}
              className={activeItem === item.id ? "icon-active" : "sidebar-icon"}
            />
          )}
          {isSidebarOpen && <span>{item.label}</span>}
          {!isSidebarOpen && (
            <span className="closed-label">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
