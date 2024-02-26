import { Footer, HeroPages, PlanTrip } from "../components";

import { IconPhone } from "@tabler/icons-react";

import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

const About: React.FC = () => {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About Us" />
        <div className="container">
          <div className="about-main">
            <img className="about-main__img" src={AboutMain} alt="" />
            <div className="about-main__text">
              <h3>About Our Company</h3>
              <h2>Rent Reliable Cars</h2>
              <p>
                We offer a hassle-free travel experience. With a variety of
                well-maintained vehicles and affordable rates, we're here to
                make your next adventure memorable and stress-free. Book with us
                and start your journey today!
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="" />
                  <span>
                    <h4>10</h4>
                    <p>Models</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="" />
                  <span>
                    <h4>12</h4>
                    <p>Rental companies</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="" />
                  <span>
                    <h4>25</h4>
                    <p>Workshops</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      {/* book banner */}
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Contact now!</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>+91 8105803440</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
