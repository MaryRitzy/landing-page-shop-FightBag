import Navbar from "./component/Navbar/Navbar";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import SupportForm from "./pages/SupportForm/SupportForm";
import Main from "./pages/Main/Main";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="supportform" element={<SupportForm />}></Route>
        <Route path="privacypolicy" element={<PrivacyPolicy />}></Route>
      </Routes>
      <Footer />

      <div></div>
    </div>
  );
}

export default App;
