import React from "react";
import "./SliderSamples.scss";
import Carousel3d from "./Carousel3d";
import CarouselCard from "./CarouselCard";

import slides from "./Slides";

const SliderSamples = () => {
  return (
    <div
      id="section-Slider"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div className="title-slider">Наші роботи</div>
      <div className="slider-origin" style={{ width: 1200 }}>
        <Carousel3d
          cards={slides.map((slide, index) => ({
            key: index + 1,
            content: <CarouselCard title={slide.title} image={slide.image} />,
          }))}
          offset={3}
        />
      </div>
    </div>
  );
};

export default SliderSamples;
