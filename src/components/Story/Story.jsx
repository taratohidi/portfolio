import "./Story.scss";
import React from "react";

import story1 from "../../assets/image/story-1.jpg";
import story2 from "../../assets/image/story-2.jpg";

function Story() {
  return (
    <>
      <div className="story__picture" id="story">
        <img src={story1} alt="" className="story__picture--1" />
        <img src={story2} alt="" className="story__picture--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Developer</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;Best decision of my life&ldquo;
        </h2>
        <p className="story__text mb-lg">
          I’ve always been so passionate about combining creativity,
          functionality, design skills, problem solving and personal interest in
          social sciences. For a personal side project I wanted to create a
          website. I had some experience in website mock-up design and always be
          interested to gave functionality to them so I took some web
          development online courses. After learning some aspects of web
          development, I saw the intersections of all my passion again but this
          time beside those passion I could use my human centred design ability,
          logical and detail-oriented thinking skills, engineering and project
          management experience as well to build problem solving structures to
          ensure accessibility and meaningful interaction. I applied for
          BrainStaion Web Development bootcamp. And in my capstone project
          WePick, I tried to mix all these previous experiences and new tools
          and skills that I gained such as React, Sass, axios, Node.js, Express,
          mySQL and I felt quite confident about them. Now I’m so happy and
          excited about this transition.
        </p>
        <a href="#projects" className="btn">
          {" "}
          find my projects
        </a>
      </div>
    </>
  );
}
export default Story;
