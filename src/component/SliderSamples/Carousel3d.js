import React, { useState, useEffect } from "react";
import { config } from "react-spring";
import { Carousel } from "react-carousel-card-3d";
import "./SliderSamples.scss";
import "../../styles/fontsProjectFB.scss";

export default function Carousel3d({
  cards,
  offset,
  autorotation = true,
  rotationInterval = 6000,
}) {
  const table = cards.map((element, index) => {
    return { ...element, index, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides] = useState(table);

  useEffect(() => {
    setOffsetRadius(offset);
  }, [offset]);

  useEffect(() => {
    let interval = null;
    if (autorotation) {
      interval = setInterval(() => {
        setGoToSlide((prevState) =>
          prevState + 1 >= cards.length ? 0 : prevState + 1
        );
      }, rotationInterval);
    }

    return () => {
      if (autorotation && interval) {
        clearInterval(interval);
      }
    };
  }, [cards, autorotation, rotationInterval]);

  const handlePrevSlide = () => {
    setGoToSlide((prevState) =>
      prevState - 1 < 0 ? cards.length - 1 : prevState - 1
    );
  };

  const handleNextSlide = () => {
    setGoToSlide((prevState) =>
      prevState + 1 >= cards.length ? 0 : prevState + 1
    );
  };

  return (
    <>
      <div className="carousel-size">
        <div
          className="carousel-button carousel-prev-button icon-Arrow-Left"
          onClick={handlePrevSlide}
        ></div>
        <div className="carousel-wrapper">
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            animationConfig={config.gentle}
          />{" "}
        </div>
        <div
          className="carousel-button carousel-next-button icon-Arrow-Right"
          onClick={handleNextSlide}
        ></div>
      </div>
    </>
  );
}
