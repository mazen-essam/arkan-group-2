"use client";
import { useState } from "react";
import "./img-gallary.css";

function ImgGallery({classes ="" ,imgs = []}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/background3.jpg",
    "/img1.png",
    "/img2.jpg",
    "/img3.jpg",
  ];

  function moveSlide(step) {
    setCurrentIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  }

  return (
    <div className={`  mt-12 mb-16 ${classes}`}>
    <div className="img-gallery ">
      <div className="carousel ">
        <div
          className="carousel-images "
          style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image  ${index + 1}`} className={currentIndex === index ? "active  rounded-2xl" : " rounded-2xl"} />
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>
      <div className="dots">
        {imgs.length > 0 ? imgs.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        )):
        images.map((_, index) => (
            <span
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))
        }
      </div>
    </div></div>
  );
}

export default ImgGallery;
