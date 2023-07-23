import ScrollToTop from "../ScrolltoTop/ScrolltoTop3";
import "./Footer.scss";
import "../../styles/main.scss";
import "../../styles/fontsProjectFB.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="container-footer">
          <div class="footer__about">
            <div class="footer__about__items-logo items-logo">
              <div class="items-logo__logo">
                <a href="#">
                  <img src="assets/images/logo-footer.svg" alt=""></img>
                </a>
              </div>
              <div class="items-logo__text">
                <p>Рюкзаки для чемпіонів</p>
                <p>Індивідуальний дизайн для спортсменів</p>
                <p>Вибери собі крутий рюкзак тут</p>
              </div>
            </div>

<div className="footer__about__items-sm"> 
<div class=" items-info">
              <h2 class="footer__about__items__title">Quick Links</h2>
              <ul class="footer__about__items__link">
                <li>
                  <a href="#" class="footer__about__items__link__text">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__about__items__link__text">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="footer__about__items__link__text"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>


            <div class="items-contact">
              <h2 class="footer__about__items__title">Resources</h2>
              <ul class="footer__about__items__link">
                <li>
                  <Link
                    to="/supportForm"
                    class="footer__about__items__link__text"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    class="footer__about__items__link__text"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" class="footer__about__items__link__text">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

</div>

         

             {/*<!-- footer form -->*/}
            <div class="footer__about__items-form items-form">
              <h2 class="footer__about__items__title">Newsletter</h2>
              <div class="form-footer">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Enter email"
                    class="footer-input"
                  ></input>
                  <button class="footer-btn btn">Надіслати</button>
                </form>
              </div>
            </div>
          </div>
          {/*<!-- footer social -->*/}
          <div className="footer_copyright">
            <div className="footer_social ">
              <ul className="social__items">
                <li>
                  <a
                    href="https://www.facebook.com/FightBag.ua/"
                    title="Facebook"
                    target="_blank"
                    className="icon-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/uideckHQ"
                    title="Twitter"
                    target="_blank"
                    className="icon-twitter-sm"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fightbag_ua/?hl=ru"
                    title="Instagram"
                    target="_blank"
                    className="icon-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@grizzlycherkassy9294"
                    className="icon-youtube"
                    title="Youtube"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
            {/* <!-- footer copyright -->*/}
            <div className="footer_content">
              <p className="text-copyright">
                Designed and Developed by ©{" "}
                <a
                  href="https://www.linkedin.com/in/maryna-atamas-b1a886234/"
                  rel="nofollow"
                  className="text-copyright-author"
                  target="_blank"
                >
                  Atamas
                </a>{" "}
              </p>
              
            </div>
          </div>
                 </div>
                 <div className="scrollTop"><ScrollToTop /></div>
              </footer>
    </>
  );
};

export default Footer;
