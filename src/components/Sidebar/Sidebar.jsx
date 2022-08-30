import "./Sidebar.scss";
import React from "react";
// import list from "../../assets/icon/menu-outline.svg";
import logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <img src={list} alt="links" className="sidebar__icon" /> */}
      <img src={logo} alt="links" className="sidebar__icon" />
    </div>
  );
}

export default Sidebar;
