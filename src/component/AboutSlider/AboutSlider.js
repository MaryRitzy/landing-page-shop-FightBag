import "./AboutSlider.scss";
import SliderSamples from "../SliderSamples/SliderSamples";

const AboutSlider = () => {
  return (
    <>
      <div className="aboutSlider-wrapper">
        <div className="containerSlider about__containerSlider">
          <SliderSamples />
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
