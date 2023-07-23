//import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import "./styles/main.scss";
//import { BrowserRouter as  Routes, Route } from 'react-router-dom';
//import { BrowserRouter as  Routes, Route } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
//import About from "./component/About/About";
//import AboutSlider from "./component/AboutSlider/AboutSlider";
import Footer from "./component/Footer/Footer";
//import Contact from "./component/Contact/Contact";
import SupportForm from "./pages/SupportForm/SupportForm";
import Main from "./pages/Main/Main";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";



function App() {
  return (
    <div>
     <Navbar />
    <Routes>
    
      <Route path="/" element={ <Main />}></Route>
        <Route path="about" element={ <AboutPage />}></Route>
        <Route path="contact" element={ <ContactPage />}></Route>
        <Route path="supportform" element={<SupportForm />}></Route>
        
      </Routes>
      <Footer />
          
  
    <div>
   


    </div>
    
   
     
      </div>
  );
}

export default App;
