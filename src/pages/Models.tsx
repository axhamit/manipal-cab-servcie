import {IconPhoneCall } from '@tabler/icons-react';
import { Footer, HeroPages } from "../components";

import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";

import ToyotaCamry from "../images/hero/etos.png";
import ToyotaHilux from "../images/cars/toyota-hilux.png";
import BmwX4 from "../images/cars/bmw-x4.png";
import BmwX5 from "../images/cars/bmw-x5.png";
import ChevroletOnix from "../images/cars/chevrolet-onix.png";
import CheroletSpin from "../images/cars/chevrolet-spin.png";
import FiatMobi from "../images/cars/fiat-mobi.png";
import FiatUno from "../images/cars/fiat-uno.png";
import VolkswagenGolf from "../images/cars/volkswagen-golf.png";
import VolkswagenBeetle from "../images/cars/volkswagen-new-beetle.png";

const Models: React.FC = () => {
  return (
    <section className="models-section">
      <HeroPages name="Car Models" />
      <div className="container">
        <div className="models-div">
          {/* toyota camry */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={ToyotaCamry} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>ETIOS</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>₹ 13</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Toyota
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Auto
                  </span>
                  <span style={{ textAlign: "right" }}>
                    &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp;  BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* toyota hilux */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={ToyotaHilux} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Toyota Innova</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>₹ 17</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Toyota
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp;  BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bmw x4 */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={BmwX4} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>X4 M40i</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$220</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; BMW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Auto
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Flex &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bmw x5 */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={BmwX5} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>X5 Conversivel</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$250</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; BMW
                  </span>
                  <span style={{ textAlign: "right" }}>
                    2/3 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Auto
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Flex &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* chevrolet onix */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={ChevroletOnix} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Onix</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$140</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Chevrolet
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Auto
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Flex &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp;   BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* chevrolet spin */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={CheroletSpin} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Spin</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$140</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Chevrolet
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp;  BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* fiat mobi */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={FiatMobi} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Mobi</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$110</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; CC
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* fiat uno */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={FiatUno} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Uno</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$100</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Fiat
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* volkswagen golf */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={VolkswagenGolf} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Golf</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$150</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Volkswagen
                  </span>
                  <span style={{ textAlign: "right" }}>
                    4/5 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Manual
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Gasolina &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* volkswagen beetle */}
          <div className="models-div__box">
            <div className="models-div__box__img">
              <img src={VolkswagenBeetle} alt="" />
              <div className="models-div__box__descr">
                <div className="models-div__box__descr__name-price">
                  <div className="models-div__box__descr__name-price__name">
                    <p>Beetle</p>
                    <span>
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                      <IconStar width={15} height={15} />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__price">
                    <h4>R$160</h4>
                    <p>per Km</p>
                  </div>
                </div>
                <div className="models-div__box__descr__name-price__details">
                  <span>
                    <IconCar /> &nbsp; Volkswagen
                  </span>
                  <span style={{ textAlign: "right" }}>
                    2/3 &nbsp; <IconCar />
                  </span>
                  <span>
                    <IconCar /> &nbsp; Auto
                  </span>
                  <span style={{ textAlign: "right" }}>
                    Flex &nbsp; <IconCar />
                  </span>
                </div>
                <div className="models-div__box__descr__name-price__btn">
                <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* book banner */}
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Entre em Contact agora mesmo!</h2>
            <span>
              
              <IconPhone width={40} height={40} />
              <h3>+918105803440</h3>
          
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Models;
