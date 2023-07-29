import React, { useState, useEffect} from "react";
import { useSpring, animated } from "react-spring";
import SquareBorder1 from "../../assets/FotosSlider/SquareBorder1.png";
import './SliderSamples.scss'


function Card({ title, image, currentSlide, currentIndex }) {
  const [show, setShown] = useState(false);
  const [autorotation, setAutorotation] = useState(true);

  const styles = useSpring({
    transform: show ? "scale(1.18)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgba(0, 0, 0, 0.25)"
      : "0 2px 10px rgba(0, 0, 0, 0.08)",
  });


  useEffect(() => {
    let intervalId;

    if (autorotation) {
      intervalId = setInterval(() => {
            }, 3000); 
    }

    return () => clearInterval(intervalId);
  }, [autorotation, currentIndex]);


  const handleMouseEnter = () => {
    setShown(true);
    setAutorotation(false); 
  };

  const handleMouseLeave = () => {
    setShown(false);
    setAutorotation(true); 
  };


  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
                marginTop: 22,
                fontWeight: 500,
                fontFamily:  "Dongle , sans-serif",
                fontSize: 36,
                letterSpacing: "0.07rem", 
                lineHeight: "100%",
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
