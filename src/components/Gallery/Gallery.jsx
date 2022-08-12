import "./Gallery.scss";
import React from "react";

// Import images and icons
import img1 from "../../assets/image/gal-1.jpeg";
import img2 from "../../assets/image/gal-2.jpeg";
import img3 from "../../assets/image/gal-3.jpeg";
import img4 from "../../assets/image/gal-4.jpeg";
import img5 from "../../assets/image/gal-5.jpeg";
import img6 from "../../assets/image/gal-6.jpeg";
import img7 from "../../assets/image/gal-7.jpeg";
import img8 from "../../assets/image/gal-8.jpeg";
import img9 from "../../assets/image/gal-9.jpeg";
import img10 from "../../assets/image/gal-10.jpeg";
import img11 from "../../assets/image/gal-11.jpeg";
import img12 from "../../assets/image/gal-12.jpeg";
import img13 from "../../assets/image/gal-13.jpeg";
import img14 from "../../assets/image/gal-14.jpeg";

function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={img1} alt="gallery 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={img2} alt="gallery 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={img3} alt="gallery 3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={img4} alt="gallery 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={img5} alt="gallery 5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={img6} alt="gallery 6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={img7} alt="gallery 7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={img8} alt="gallery 8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={img9} alt="gallery 9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={img10} alt="gallery 10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={img11} alt="gallery 11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={img12} alt="gallery 12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={img13} alt="gallery 13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={img14} alt="gallery 14" className="gallery__img" />
      </figure>
    </div>
  );
}

export default Gallery;
