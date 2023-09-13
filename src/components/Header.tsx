import ytLogo from "../assets/YTlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faBell,
  faUser,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  toggleSidebar: () => void;
  notificationCount: number; // Add a notification count prop
};

function Header(props: HeaderProps) {
  return (
    <div className="header">
      <div className="header__left">
        <button className="hamburger-icon" onClick={props.toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img alt="Youtube logo" src={ytLogo} className="header__logo" />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
      <div className="header__infos">
        <span>
          <FontAwesomeIcon icon={faUpload} />
        </span>
        <span>
          <FontAwesomeIcon icon={faBell} className="notification-icon"/>
          {props.notificationCount > 0 && (
            <span className="notification-count">{props.notificationCount}</span>
          )}
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </div>
  );
}

export default Header;
