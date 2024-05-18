// Popup.js
import React, { useState, useEffect } from "react";
import ToyotaCamry from "../../images/hero/etos.png";
import Styles from "./popup.module.css";
import { IoCloseCircle } from "react-icons/io5";




function Popup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  const closePopup = () => {
    setVisible(false);
  };

  return (
    <div className={Styles.popupHead}>
      <div  className={Styles.close}>
      <div onClick={closePopup} className={Styles.closeicon}><IoCloseCircle/></div>
      </div>

      <div className={Styles.griddiv}>
        <div className={Styles.leftside}>
          <h2>Ride with Cab Service Manipal</h2>
          <p>
            Experience the convenience of safe, reliable, and affordable
            transportation with Cab Service Manipal. Whether you need a quick
            ride across town or a long-distance trip, we've got you covered. Our
            professional drivers ensure a comfortable journey every time.
          </p>
        </div>

        <div className={Styles.rytside}>
          <img src={ToyotaCamry} alt="popup" />
        </div>
      </div>
      <div className={Styles.btn}>
        <a href="tel:+918105803440">
          <button>Book Your Ride Now</button>
        </a>

      </div>
    </div>
  );
}

export default Popup;
