import "./Skills.scss";
import React from "react";

// Import Icons
import react from "../../assets/icon/logo-react.svg";
import nodejs from "../../assets/icon/logo-nodejs.svg";
import mysql from "../../assets/icon/mysql-icon.svg";

function Skills() {
  return (
    <div className="skills">
      <h3 className="heading-3 skills__heading">Top 3 skills</h3>
      <div className="skills__list">
        <img src={react} alt="react" className="skills__icon" />
        <div className="skills__detail">
          <h4 className="heading-4 heading-4--light">React</h4>
        </div>

        <img src={nodejs} alt="nodejs" className="skills__icon" />
        <div className="skills__detail">
          <h4 className="heading-4 heading-4--light">Node.js</h4>
        </div>
        <img src={mysql} alt="mysql" className="skills__icon" />
        <div className="skills__detail">
          <h4 className="heading-4 heading-4--light">mySQL</h4>
        </div>
      </div>
    </div>
  );
}
export default Skills;
