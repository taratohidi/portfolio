import "./Story.scss";
import React from "react";

import story1 from "../../assets/image/story-1.jpg";
import story2 from "../../assets/image/story-2.jpg";

function Story() {
  return (
    <>
      <div className="story__picture">
        <img src={story1} alt="" className="story__picture--1" />
        <img src={story2} alt="" className="story__picture--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;Best decision of my life&ldquo;
        </h2>
        <p className="story__text mb-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          molestiae voluptas, adipisci dolores nesciunt quibusdam quisquam
          aperiam maiores odit, deserunt debitis consectetur sunt quidem rerum,
          quae facilis? Earum, architecto tempore!
        </p>
        <a href="/" className="btn">
          {" "}
          find my projects
        </a>
      </div>
    </>
  );
}
export default Story;
