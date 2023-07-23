import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SquareBorder1 from "../../assets/FotosSlider/SquareBorder1.png";
import './SliderSamples.scss'


function Card({ title, image, currentSlide, currentIndex }) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgba(0, 0, 0, 0.25)"
      : "0 2px 10px rgba(0, 0, 0, 0.08)",
  });


  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(22px)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <img
            src={SquareBorder1}
            alt="SquareBorder1"
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="centerFotoSlider"
            style={{
                 width: 360,
                height: 420,
                overflow: "hidden",
                position: "relative",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          {title && (
            <div
              style={{
                marginTop: 24,
                fontWeight: 600,
                fontSize: 28,
                lineHeight: "150%",
                color: "#FDFDFD",
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
