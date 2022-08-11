import "./Story.scss";
import React from "react";

function Story() {
  return (
    <>
      <div className="story__picture">story picture</div>
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
          find my project
        </a>
      </div>
    </>
  );
}
export default Story;
