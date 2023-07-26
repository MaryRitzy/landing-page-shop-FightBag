/* eslint-disable jsx-a11y/anchor-has-content */
import "./Scheme.scss";
import "./iconfont.scss";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const Scheme = () => {
  const [toggler, setToggler] = useState(false);
  const [togglerback, setTogglerback] = useState(false);
  const [togglernet, setTogglernet] = useState(false);
  const [togglerpocket, setTogglerpocket] = useState(false);
  const [togglerhandlebg, setTogglerhandlebg] = useState(false);
  const [togglerwaterno, setTogglerwaterno] = useState(false);

  const lightboxWidth = "98%";
  const lightboxHeight = "92%";
  const lightboxTop = "10%";
  const lightboxLeft = "0.5%";

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
                onClick={() => setToggler(!toggler)}
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
                onClick={() => setTogglerback(!togglerback)}
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
                onClick={() => setTogglernet(!togglernet)}
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
                onClick={() => setTogglerpocket(!togglerpocket)}
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
                onClick={() => setTogglerhandlebg(!togglerhandlebg)}
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
                onClick={() => setTogglerwaterno(!togglerwaterno)}
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
        <div>
          <FsLightbox
            toggler={toggler}
            sources={[
              "./image/FotoGallery/frontMain.jpg",
              "./image/FotoGallery/section1.jpg",
              "./image/FotoGallery/section2.jpg",
              "./image/FotoGallery/section3.jpg",
              "./image/FotoGallery/section4.jpg",
              "./image/FotoGallery/section5.jpg",
              "./image/FotoGallery/net2.jpg",
            ]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
        <div>
          <FsLightbox
            toggler={togglerback}
            sources={[
              "./image/FotoGallery/straps0.jpg",
              "./image/FotoGallery/straps.jpg",
              "./image/FotoGallery/back.jpg",
              "./image/FotoGallery/back2.jpg",
            ]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
        <div>
          <FsLightbox
            toggler={togglernet}
            sources={[
              "./image/FotoGallery/net3.jpg",
              "./image/FotoGallery/net2.jpg",
              "./image/FotoGallery/net1.jpg",
              "./image/FotoGallery/frontMain.jpg",
            ]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
        <div>
          <FsLightbox
            toggler={togglerpocket}
            sources={[
              "./image/FotoGallery/pocket1.jpg",
              "./image/FotoGallery/pocket2.jpg",
              "./image/FotoGallery/pocket3.jpg",
              "./image/FotoGallery/pocket4.jpg",
              "./image/FotoGallery/pocketSide.jpg",
            ]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
        <div>
          <FsLightbox
            toggler={togglerhandlebg}
            sources={[
              "./image/FotoGallery/gallery1.jpg",
              "./image/FotoGallery/sideTop.jpg",
              "./image/FotoGallery/accessories3.jpg",
            ]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
        <div>
          <FsLightbox
            toggler={togglerwaterno}
            sources={["./image/FotoGallery/waterno.jpg"]}
          />
          <style>{`
        .fslightbox-container {
          width: ${lightboxWidth};
          height: ${lightboxHeight};
          top: ${lightboxTop};
          left: ${lightboxLeft}
        }
                }
      `}</style>
        </div>
      </div>
    </>
  );
};

export default Scheme;
