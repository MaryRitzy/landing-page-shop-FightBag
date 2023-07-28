/* eslint-disable jsx-a11y/anchor-has-content */
import "./Scheme.scss";
import "./iconfont.scss";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Scheme = () => {
  const [toggler, setToggler] = React.useState(false);
  const [togglerback, setTogglerback] = React.useState(false);
  const [togglernet, setTogglernet] = React.useState(false);
  const [togglerpocket, setTogglerpocket] = React.useState(false);
  const [togglerhandlebg, setTogglerhandlebg] = React.useState(false);
  const [togglerwaterno, setTogglerwaterno] = React.useState(false);

  return (
    <>
      <div className="diagram">
        <div className="wrapper-block-scheme">
          <img
            src="./image/Block-diagram2.png"
            alt="icon"
            className="block-scheme-img"
          ></img>
        </div>
        <div class="diagram__scheme-container">
          <div className="sheme__Backpack-mainIcon icon0">
            <div className="Backpack-mainIcon">
              <img
                src="./image/iconsSheme/BackpackMainSize.svg"
                alt="icon"
                className="mainIconSize"
              ></img>
            </div>
            <div className="sheme__text__Backpack-mainIcon">
              <h3>59 х 26 х 25 см</h3>
            </div>
          </div>

          <div className="sheme__items icon1">
            <div className="sheme__icon">
              <div
                className="icon-Backpackfront"
                onClick={() => setToggler(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3>4 об'ємні секції</h3>
              <p>Розмір L має 5-ту додаткову </p>
              <p>ультра ємку секцію + 30%</p>
              <p> роміру місткості </p>
            </div>
          </div>

          <div className="sheme__items icon2">
            <div className="sheme__icon">
              <div
                className="icon-Backside"
                onClick={() => setTogglerback(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3>Ущільнена спинка</h3>
              <p>Ущільнені ергомічні лямки </p>
              <p>Фіксатори регулювання</p>
              <p>довжини лямок</p>
            </div>
          </div>

          <div className="sheme__items icon3">
            <div className="sheme__icon">
              <div
                className="icon-Airblow"
                onClick={() => setTogglernet(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3 className="sheme__titleBig">
                Вентиляційна
                <p>секція</p>
              </h3>
              <p>Ємкий відділ із міцної сітки</p>
              <p>для взуття і амуніції</p>
            </div>
          </div>

          <div className="sheme__items icon4">
            <div className="sheme__icon">
              <div
                className="icon-Bottlewater"
                onClick={() => setTogglerpocket(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3 className="sheme__titleBig">
                Кишеня для
                <p>пляшки</p>
              </h3>
              <p>Потайна кишеня для</p>
              <p>телефону, ключів, капи</p>
            </div>
          </div>

          <div className="sheme__items icon5">
            <div className="sheme__icon">
              <div
                className="icon-HandleBg"
                onClick={() => setTogglerhandlebg(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3 className="sheme__titleBig">
                Зносостійка
                <p>ручка</p>
              </h3>
              <p>Надійна фурнітура</p>
              <p>Брендові підвіски</p>
            </div>
          </div>

          <div className="sheme__items icon6">
            <div className="sheme__icon">
              <div
                className="icon-WaterNo"
                onClick={() => setTogglerwaterno(true)}
              ></div>
            </div>
            <div className="sheme__text">
              <h3>Водостійкість</h3>
              <p>Щільна і надійна тканина </p>
              <p>Oxford 1200d з водостійким</p>
              <p>покриттям</p>
            </div>
          </div>

          <div className="sheme__items icon7">
            <div className="sheme__icon">
              <div>
                <a href="#section-Slider" className="icon-PictureDis"></a>
              </div>
            </div>
            <div className="sheme__text">
              <h3>Твій дизайн</h3>
              <p>Опція нанесення картинок</p>
              <p>та слоганів замовника</p>
            </div>
          </div>
        </div>
        <div className="gallery-lightbox">
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={toggler}
            close={() => setToggler(false)}
            slides={[
              { src: "./image/FotoGallery/frontMain.jpg" },
              { src: "./image/FotoGallery/section1.jpg" },
              { src: "./image/FotoGallery/section2.jpg" },
              { src: "./image/FotoGallery/section4.jpg" },
              { src: "./image/FotoGallery/section5.jpg" },
              { src: "./image/FotoGallery/net2.jpg" },
            ]}
          />
        </div>

        <div>
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={togglerback}
            close={() => setTogglerback(false)}
            slides={[
              { src: "./image/FotoGallery/straps0.jpg" },
              { src: "./image/FotoGallery/straps.jpg" },
              { src: "./image/FotoGallery/back.jpg" },
              { src: "./image/FotoGallery/back2.jpg" },
            ]}
          />
        </div>
        <div>
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={togglernet}
            close={() => setTogglernet(false)}
            slides={[
              { src: "./image/FotoGallery/net3.jpg" },
              { src: "./image/FotoGallery/net2.jpg" },
              { src: "./image/FotoGallery/net1.jpg" },
              { src: "./image/FotoGallery/frontMain.jpg" },
            ]}
          />
        </div>
        <div>
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={togglerpocket}
            close={() => setTogglerpocket(false)}
            slides={[
              { src: "./image/FotoGallery/pocket1.jpg" },
              { src: "./image/FotoGallery/pocket2.jpg" },
              { src: "./image/FotoGallery/pocket3.jpg" },
              { src: "./image/FotoGallery/pocket4.jpg" },
              { src: "./image/FotoGallery/pocketSide.jpg" },
            ]}
          />
        </div>
        <div>
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={togglerhandlebg}
            close={() => setTogglerhandlebg(false)}
            slides={[
              { src: "./image/FotoGallery/gallery6.jpg" },
              { src: "./image/FotoGallery/accessories2.jpg" },
              { src: "./image/FotoGallery/sideTop.jpg" },
              { src: "./image/FotoGallery/accessories3.jpg" },
              { src: "./image/FotoGallery/accessories1.jpg" },
            ]}
          />
        </div>
        <div>
          <Lightbox
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
            plugins={[Fullscreen, Thumbnails, Zoom]}
            open={togglerwaterno}
            close={() => setTogglerwaterno(false)}
            slides={[{ src: "./image/FotoGallery/waterno.jpg" }]}
          />
        </div>
      </div>
    </>
  );
};

export default Scheme;
