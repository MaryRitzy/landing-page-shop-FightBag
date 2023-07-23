import About from "../../component/About/About";
import AboutSlider from "../../component/AboutSlider/AboutSlider";
import Contact from "../../component/Contact/Contact";
//import Footer from "../../component/Footer/Footer"
import HeaderPage from "../../component/HeaderPage/HeaderPage";

import "../../styles/fontsProjectFB.scss";

const Main = () => {
  return (
    <div>
      <HeaderPage />
      <About />
      <AboutSlider />
      <Contact />
    </div>
  );
};
export default Main;
