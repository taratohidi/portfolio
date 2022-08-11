import "./Features.scss";
import React from "react";

// Import Icons
import code from "../../assets/icon/code-slash-outline.svg";
import art from "../../assets/icon/color-palette-outline.svg";
import data from "../../assets/icon/server-outline.svg";
import study from "../../assets/icon/rocket-outline.svg";
import book from "../../assets/icon/book-outline.svg";
import nature from "../../assets/icon/leaf-outline.svg";

function Features() {
  return (
    <div className="features">
      <div className="feature">
        <img src={code} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          Full Stack Developer
        </h4>
        <p className="feature__text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          odit temporibus accusantium voluptatum.
        </p>
      </div>
      <div className="feature">
        <img src={art} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          UI/UX Design
        </h4>
        <p className="feature__text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          odit temporibus accusantium voluptatum.
        </p>
      </div>
      <div className="feature">
        <img src={data} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          Data Seeker
        </h4>
        <p className="feature__text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          odit temporibus accusantium voluptatum.
        </p>
      </div>
      <div className="feature">
        <img src={study} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          Fast and Self-learner
        </h4>
        <p className="feature__text">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aspernatur nulla accusantium veniam quo et qui mollitia.
        </p>
      </div>
      <div className="feature">
        <img src={nature} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          Nature Lover
        </h4>
        <p className="feature__text">
          {" "}
          Obcaecati itaque molestiae optio deleniti amet repellendus quae
          tenetur atque ullam. At sed reiciendis modi repellat consequuntur.
        </p>
      </div>
      <div className="feature">
        <img src={book} alt="feeture" className="feature__icon" />
        <h4 className="feature__heading heading-4 heading-4--dark">
          Book worm
        </h4>
        <p className="feature__text">
          {" "}
          Porro repudiandae laboriosam officiis. Explicabo, ipsam voluptatum!
          Mollitia cupiditate repellendus ex cumque ad aperiam reiciendis enim
          hic minus!
        </p>
      </div>
    </div>
  );
}

export default Features;
