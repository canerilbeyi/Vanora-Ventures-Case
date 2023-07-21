import React, { useState, useEffect, useRef } from "react";
import { featuredProducts } from "../utils/data";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Carousel";

const Carousel = () => {
  const [value, setValue] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const cardRef = useRef(null);

  const goToNextImage = () => {
    if (visibleImages === 3) {
      setValue(value === visibleImages - 1 ? 0 : value + 1);
    } else if (visibleImages === 2) {
      setValue(
        Math.floor(featuredProducts.length / visibleImages) === value
          ? 0
          : value + 1
      );
    } else {
      setValue(
        Math.floor(featuredProducts.length / visibleImages) - 1 === value
          ? 0
          : value + 1
      );
    }
  };

  const goToPrevImage = () => {
    if (visibleImages === 3) {
      setValue(
        value === 0 ? featuredProducts.length / visibleImages - 1 : value - 1
      );
    } else if (visibleImages === 2) {
      setValue(
        value === 0
          ? Math.ceil(featuredProducts.length / visibleImages) - 1
          : value - 1
      );
    } else {
      setValue(value === 0 ? featuredProducts.length - 1 : value - 1);
    }
  };

  const updateVisibleImages = () => {
    if (window.innerWidth >= 1280) {
      setVisibleImages(3);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setVisibleImages(2);
    } else {
      setVisibleImages(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisibleImages);
    updateVisibleImages();
    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);

  useEffect(() => {
    cardRef.current.style.left = `-${value * 100}%`;
  }, [value]);

  return (
    <Wrapper>
      <p className="featured-typography">Featured Products</p>
      <div className="featured-cards">
        <button
          className="arrow"
          style={{
            marginRight: "1rem",
          }}
          onClick={goToPrevImage}
        >
          <FaArrowLeft className="icon" />
        </button>
        <div className="carousel">
          <section
            style={{
              width: `${(featuredProducts.length / visibleImages) * 100}%`,
            }}
            className="cards"
            ref={cardRef}
          >
            {featuredProducts.map((item, index) => {
              return (
                <article
                  style={{
                    width: `${100 / visibleImages}%`,
                  }}
                  key={index}
                  className="card"
                >
                  <h4>{item.header}</h4>
                  <h6>{item.content}</h6>
                  <div className="btn-container">
                    <button className="left-btn">Learn More</button>
                    <button className="right-btn">Find a Dealer</button>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
        <button className="arrow" onClick={goToNextImage}>
          <FaArrowRight className="icon" />
        </button>
      </div>
      <div className="round-slider">
        {Array.from(
          { length: Math.ceil(featuredProducts.length / visibleImages) },
          (_, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={index}
                className={
                  index === value ? "slider-button active" : "slider-button"
                }
              ></button>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

export default Carousel;
