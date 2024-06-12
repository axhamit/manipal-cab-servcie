import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/etos.png";

const Hero: React.FC = () => {
  const [goUp, setGoUp] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const bookBtn = (): void => {
    // Use your WhatsApp number and message
    const phoneNumber = '8105803440'; // Replace with your WhatsApp number
    const message = 'Hello, I am interested in booking a Car.';

    // Create the WhatsApp API link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the link in a new tab/window
    window.open(whatsappLink, '_blank');
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape} alt="" />
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>The best prices and conditions</h4>
            <h1>
              Book your car at <span>CAB SERVICE MANIPAL</span>
            </h1>
            <p>
             We offer a diverse fleet, from economical to luxurious SUVs.
              Your journey starts here - book now and explore the world at your
              own pace.
            </p>
            <div className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="/"
              >
                Enquire Now &nbsp; <IconCircleCheck />
              </Link>
              <Link
                className="hero-content__text__btns__learn-more"
                to="/about"
              >
                Know More &nbsp; <IconChevronRight />
              </Link>
            </div>
          </div>

          {/* right side img */}
          <img
            src={HeroCar}
            alt="carro da marca fiat modelo onix cor azul"
            className="hero-content__car-img"
          />
        </div>
      </div>

      {/* page up */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        ^
      </div>
    </section>
  );
};

export default Hero;
