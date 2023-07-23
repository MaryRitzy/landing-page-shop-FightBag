import "./Scheme.scss";
import "./iconfont.scss";

const Scheme = () => {
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
              <div className="icon-Backpackfront"></div>
            </div>
            <div className="sheme__text">
              <h3>4 ємкі секції</h3>
              <p>Розмір L має 5-ту додаткову </p>
              <p>ультра ємку секцію + 30%</p>
              <p> роміру місткості </p>
            </div>
          </div>

          <div className="sheme__items icon2">
            <div className="sheme__icon">
              <div className="icon-Backside"></div>
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
              <div className="icon-WaterNo"></div>
            </div>
            <div className="sheme__text">
              <h3>Водостійкість</h3>
              <p>Щільна і надійна тканина </p>
              <p>Oxford 1200d з водостійким</p>
              <p>покриттям</p>
            </div>
          </div>

          <div className="sheme__items icon4">
            <div className="sheme__icon">
              <div className="icon-Airblow"></div>
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

          <div className="sheme__items icon5">
            <div className="sheme__icon">
              <div className="icon-HandleBg"></div>
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
              <div className="icon-Bottlewater"></div>
            </div>
            <div className="sheme__text">
              <h3 className="sheme__titleBig">
                Кишеня для
                <p>пляшки</p>
              </h3>

              <p>Потайна кишеня для</p>
              <p>ключів і капи</p>
            </div>
          </div>

          <div className="sheme__items icon7">
            <div className="sheme__icon">
              <div className="icon-PictureDis"></div>
            </div>
            <div className="sheme__text">
              <h3>Твій дизайн</h3>
              <p>Опція нанесення картинок</p>
              <p>та слоганів замовника</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scheme;
