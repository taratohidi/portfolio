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
        <img src={img1} alt="Unbounce Project" className="project__img" />
        <h5 className="project__name"> Unbounce</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>React, Sass, react-beautiful-dnd </p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p className="project__description--text">
              Industry hackathon project with Unbounce
            </p>
          </div>
        </div>
        <a
          href="https://github.com/nancy-sun/unbounce-project-client"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img2} alt="WePick Project" className="project__img" />
        <h5 className="project__name"> WePick</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>React, Node.js, Express, Axios, Sass</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>BrainStation Capston Project</p>
          </div>
        </div>
        <a
          href="https://github.com/taratohidi/WePick"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img3} alt="Forkify Project" className="project__img" />
        <h5 className="project__name"> Forkify </h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>HTML, Sass, JavaScript</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>A modern application for searching recipes</p>
          </div>
        </div>
        <a
          href="https://forkify-tara.netlify.app"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img4} alt="Omnifood Project" className="project__img" />
        <h5 className="project__name"> Omnifood </h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>HTML, Sass(Grid display)</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>A food subscription site</p>
          </div>
        </div>
        <a
          href="https://omnifood-tara.netlify.app/"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img5} alt="Mapty Project" className="project__img" />
        <h5 className="project__name"> Mapty </h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>HTML, CSS, JavaScript, Leaflet</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>A site for tracking activities by location</p>
          </div>
        </div>
        <a
          href="/"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
      <div className="project">
        <img src={img6} alt="Daud House" className="project__img" />
        <h5 className="project__name"> Daud House</h5>
        <div className="project__box">
          <div className="project__codes">
            <img src={codes} alt="codes" className="project__icon" />
            <p>React, Sass</p>
          </div>
          <div className="project__description">
            <img
              src={description}
              alt="description"
              className="project__icon"
            />
            <p>A site for selling a house</p>
          </div>
        </div>
        <a
          href="https://daad.s3-website.ir-thr-at1.arvanstorage.com/"
          className="btn project__link"
          target="_blank"
          rel="noreferrer"
        >
          go to project
        </a>
      </div>
    </div>
  );
}
export default Projects;
