import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

import { IconChevronRight } from "@tabler/icons-react";

const ChooseUs: React.FC = () => {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="choose-container">
          <img
            className="choose-container__img"
            src={MainImg}
            alt="três carros"
          />
          <div className="text-container">
            <div className="text-container__left">
              <h4>Why We Are Better</h4>
              <h2>The best cars at the best price you've ever seen!</h2>
              <p>
                Explore incredible opportunities with our irresistible offers.
                Our commitment is to guarantee the best cost-benefit for you,
                allowing you to enjoy high quality products and services without
                compromising your finances. Don't pass up the chance to save
                while having an exceptional rental experience.
              </p>
              <a href="#home">
                Know More &nbsp;
                <IconChevronRight />
              </a>
            </div>
            {/* advantages list */}
            <div className="text-container__right">
              <div className="text-container__right__box">
                <div className="text-container__right__box__img-container">
                  <img src={Box1} alt="" />
                </div>
                <div className="text-container__right__box__text">
                  <h4>Car Adventure through Karnataka</h4>
                  <p>
                    Take your driving journey to a new level with our quality
                    vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="text-container__right__box">
                <div className="text-container__right__box__img-container">
                  <img src={Box2} alt="" />
                </div>
                <div className="text-container__right__box__text">
                  <h4>Transparent Pricing</h4>
                  <p>
                    Get everything you need in one place, with our transparent
                    pricing policy and no surprises.
                  </p>
                </div>
              </div>
              <div className="text-container__right__box">
                <div className="text-container__right__box__img-container">
                  <img src={Box3} alt="" />
                </div>
                <div className="text-container__right__box__text">
                  <h4>No Hidden Costs</h4>
                  <p>
                    Enjoy peace of mind knowing there will be no hidden costs.
                    Here, we value transparency and honesty at every stage of
                    your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
