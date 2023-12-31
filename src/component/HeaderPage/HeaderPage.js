import "./HeaderPage.scss";
import React from "react";
import Social from "../Social/Social";
import "../../styles/main.scss";

const HeaderPage = () => {
  return (
    <div className="home section">
      <div className="containerHome home__wrapper">
        <img
          src="./image/MainFoto13.png"
          alt="backpack-main"
          class="home__wrapper__main-photo"
        ></img>
        <img
          src="./image/lines_main.png"
          alt="lines2"
          class="home__wrapper__lines-right"
        ></img>
        <div class="items-home__logo">
                <img src="./image/LogoFB_Lux.svg" alt=""></img>
  </div>
        <img
          src="./image/inscription_logo.svg"
          alt="inscription_logo"
          class="home__wrapper__inscription-logo"
        ></img>
        <div className="home__title">
          <strong>Your designer</strong>
        </div>

        <button className="home__btn btn">
          <a href="#gallery" className="home-btn__link">
            Gallery{" "}
            <img
              src="./image/arrow-blue.svg"
              alt="arrow"
              className="home-btn__icon-arrow"
            ></img>{" "}
          </a>
        </button>
        <Social />
      </div>
    </div>
  );
};

export default HeaderPage;
