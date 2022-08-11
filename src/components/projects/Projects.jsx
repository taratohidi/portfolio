import "./Projects.scss";
import React from "react";

// Import images and icons
import img1 from "../../assets/image/house-1.jpeg";
import img2 from "../../assets/image/house-2.jpeg";
import img3 from "../../assets/image/house-3.jpeg";
import img4 from "../../assets/image/house-4.jpeg";
import img5 from "../../assets/image/house-5.jpeg";
import img6 from "../../assets/image/house-6.jpeg";
import codes from "../../assets/icon/code-working-outline.svg";
import description from "../../assets/icon/chatbox-ellipses-outline.svg";

function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <img src={img1} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 1</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img2} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 2</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img3} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 3</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img4} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 4</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img5} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 5</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img6} alt="Project 1" className="project__img" />
        <h5 className="project__name"> project 6</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>Project Codes</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>Project description</p>
          </div>
        </div>
        <a href="/" className="btn project__link">
          go to project
        </a>
      </div>
    </div>
  );
}
export default Projects;
