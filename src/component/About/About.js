import "./About.scss";
import FotoSamples from "../FotoSamples/FotoSamples";
import Scheme from "../Scheme/Scheme";


const About = () => {
  return (
    <>
      <section className="about__wrapper section">
              <div className="about__container containerAbout">
              <div className="sheme-about-pointer icon0a">
            <div className="sheme-pointer-title" >
            About
            </div>
            <div> 
            <img
              src="./image/cursorF.svg"
              alt="pointer"
              className="sheme-pointer-icon"
            ></img>
            </div>
          </div>
          <div className="container__halfpageLeft">
            <div className="container__halfpage__wrapperLeft">
             
              <FotoSamples />
            </div>
          </div>
          <div className="container__halfpageRight">
            <div className="container__halfpage__wrapperRight">
            <Scheme />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
