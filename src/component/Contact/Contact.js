import { Link } from "react-router-dom";
import "./Contact.scss";
import "../../styles/fontsProjectFB.scss";

const Contact = () => {
  return (
    <div>
      <section className="section сontact">
        <div className="containerContact contact__wrapper">
          <img
            src="./image/lines_main.png"
            alt="lines2"
            class="header__lines-right"
          ></img>
          <div className="contact__title">Контакти</div>
          <div className="contact__items">
            <div className="contact__items__station">
              <div className="station__contact-icon icon-mobile"></div>
              <div className="station__contact-title">телефони</div>
              <div className="station__contact-text">+380 93 799 2349</div>
            </div>
            <div className="contact__items__station">
              <div className="station__contact-icon icon-sms"></div>
              <div className="station__contact-title">месенджери</div>
              <div className="station__contact-text">
                <div className="contact-viber">
                  <div className="icon-viber-color"></div>
                  <div className="station__contact-text">+380 93 799 2349</div>
                </div>
                <div className="contact-telegram">
                  <div className="icon-telegram"></div>
                  <div className="station__contact-text">@zilinskiy_a</div>
                </div>
              </div>
            </div>
            <div className="contact__items__station">
              <div className="station__contact-icon icon-location-map"></div>
              <div className="station__contact-title">адреса</div>
              <div className="station__contact-text">
                вулиця Благовісна, 170, Черкаси, Черкаська область, Україна,
                18000
              </div>
            </div>
            <div className="contact__items__station">
              <div className="station__contact-icon icon-mail2"></div>
              <div className="station__contact-title">email</div>
              <div className="station__contact-text">fightbag.ua@gmail.com</div>
            </div>
          </div>

          <div className="contact__social">
            <div>
              <Link
                to="https://twitter.com/"
                title="Twitter"
                className="icon-twitter-sm social__icon-border"
                target="_blank"
              ></Link>
            </div>
            <div>
              <Link
                to="https://www.facebook.com/FightBag.ua/"
                title="Facebook"
                target="_blank"
                className="icon-facebook social__icon-border"
              ></Link>
            </div>
            <div>
              <Link
                to="https://www.instagram.com/fightbag_ua/?hl=ru"
                title="Instagram"
                target="_blank"
                className="icon-instagram social__icon-border"
              ></Link>
            </div>
            <div>
              <Link
                to="https://www.youtube.com/@grizzlycherkassy9294"
                title="Youtube"
                target="_blank"
                className="icon-youtube social__icon-border"
              ></Link>
            </div>
            <div>
              <Link
                to="https://www.instagram.com/fightbag_ua/?hl=ru"
                title="Viber"
                target="_blank"
                className="icon-viber-color social__icon-border"
              ></Link>
            </div>
            <div>
              <Link
                to="https://www.instagram.com/fightbag_ua/?hl=ru"
                title="Telegram"
                target="_blank"
                className="icon-telegram social__icon-border"
              ></Link>
            </div>
          </div>
          <div class="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.420936538961!2d32.0565758!3d49.438760699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7f9c1c71bb%3A0x961166ea401838fc!2z0YPQuy4g0JHQu9Cw0LPQvtCy0LXRgdGC0L3QsNGPLCAxNzAsINCn0LXRgNC60LDRgdGB0YssINCn0LXRgNC60LDRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgMTgwMDA!5e0!3m2!1sru!2ssk!4v1688803760015!5m2!1sru!2ssk"
              style={{
                width: "90%",
                height: "250px",
                border: "0",
                borderRadius: "20px",
              }}
              title="Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
