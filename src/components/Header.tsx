
import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">YouTube Clone</div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="header__links">
        <a href="#Home">Home</a>
        <a href="#Trending">Trending</a>
        <a href="#Subscritions">Subscriptions</a>
      </div>
    </div>
  );
}

export default Header;
