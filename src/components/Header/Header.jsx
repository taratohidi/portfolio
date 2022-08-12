import "./Header.scss";

import React from "react";

function Header() {
  return (
    <header className="header">
      <h2 className="header__logo">TARA TOHIDI</h2>
      <nav className="header__nav">
        <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            link 1
          </a>
        </li>
        <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            link 2
          </a>
        </li>
        <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            link 3
          </a>
        </li>
        <li className="header__nav--list">
          <a href="/" className="header__nav--link">
            link 4
          </a>
        </li>
      </nav>

      <h3>This is Tara!</h3>
      <h1>full stack developer</h1>
      <a href="/" className="btn">
        view my projects
      </a>

      <div className="header__seenon-text">Other Skills</div>
    </header>
  );
}

export default Header;
