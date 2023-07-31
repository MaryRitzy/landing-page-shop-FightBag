/* eslint-disable jsx-a11y/anchor-has-content */
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
                <img src="assets/images/logo-footer.svg" alt=""></img>
              </div>
              <div class="items-logo__text">
                <p>Рюкзаки для чемпіонів</p>
                <p>Індивідуальний дизайн для спортсменів</p>
                <p>
                  Замов собі крутий рюкзак
                  <Link to="/contact" className="order-link">
                    тут
                  </Link>
                </p>
              </div>
            </div>

            <div className="footer__about__items-sm">
              <div class=" items-info">
                <h2 class="footer__about__items__title">Quick Links</h2>
                <ul class="footer__about__items__link">
                  <li>
                    <a href="/" class="footer__about__items__link__text">
                      Company
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      class="footer__about__items__link__text"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" class="footer__about__items__link__text">
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
                    <Link
                      to="/privacypolicy"
                      class="footer__about__items__link__text"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

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
          <div className="footer_copyright">
            <div className="footer_social ">
              <ul className="social__items">
                <li>
                  <a
                    href="https://www.facebook.com/FightBag.ua/"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/uideckHQ"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-twitter-sm"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fightbag_ua/?hl=ru"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@grizzlycherkassy9294"
                    className="icon-youtube"
                    title="Youtube"
                    rel="noopener noreferrer"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="footer_content">
              <p className="text-copyright">Designed and</p>
              <p className="text-copyright-part2">Developed</p>
              <a
                href="https://www.linkedin.com/in/maryna-atamas-b1a886234/"
                rel="noopener noreferrer"
                className="text-copyright-author"
                target="_blank"
              >
                ©Atamas
              </a>{" "}
              
            </div>
          </div>
        </div>
        <div className="scrollTop">
          <ScrollToTop />
        </div>
      </footer>
    </>
  );
};

export default Footer;
