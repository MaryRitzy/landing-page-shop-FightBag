import About from "../../component/About/About";
import AboutSlider from "../../component/AboutSlider/AboutSlider";
import Contact from "../../component/Contact/Contact";
import Gallery from "../../component/Gallery/Gallery";
import HeaderPage from "../../component/HeaderPage/HeaderPage";

import "../../styles/fontsProjectFB.scss";

const Main = () => {
  return (
    <div>
      <HeaderPage />
      <About />
      <Gallery />
      <AboutSlider />
      <Contact />
    </div>
  );
};
export default Main;
