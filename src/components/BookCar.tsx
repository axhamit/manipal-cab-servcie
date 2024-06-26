import React, { ChangeEvent, MouseEvent, SyntheticEvent, useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import Etos from "../images/hero/etos.png";
import ToyotaInnova from "../images/cars/innova.png";
import ToyotaCrysta from "../images/cars/Crysta-1.png";
import Swift from "../images/cars/swift.png";
import Force from "../images/cars/Traveller.png";
import FiatMobi from "../images/cars/fiat-mobi.png";
import FiatUno from "../images/cars/fiat-uno.png";
import VolkswagenGolf from "../images/cars/volkswagen-golf.png";
import VolkswagenBeetle from "../images/cars/volkswagen-new-beetle.png";

const BookCar: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [carType, setCarType] = useState<string>("");
  const [pickUp, setPickUp] = useState<string>("");
  const [dropOff, setDropOff] = useState<string>("");
  const [pickTime, setPickTime] = useState<string>("");
  const [dropTime, setDropTime] = useState<string>("");
  const [carImg, setCarImg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");

  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddress(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>): void => {
    setZipCode(e.target.value);
  };

  const openModal = (e: SyntheticEvent): void => {
    e.preventDefault();
    // Check for empty values in specific variables and display an error message if any required field is empty
    if (!pickUp || !dropOff || !pickTime || !dropTime || !carType) {
      const errorMsg = document.querySelector(".error-message") as HTMLElement | null;
      if (errorMsg) {
        errorMsg.style.display = "flex";
      }
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal") as HTMLElement | null;
      if (modalDiv) {
        modalDiv.scroll(0, 0);
      }
      // Hide the error message if present
      const errorMsg = document.querySelector(".error-message") as HTMLElement | null;
      if (errorMsg) {
        errorMsg.style.display = "none";
      }
    }
  };

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setModal(!modal);
    // Show confirmation message
    const doneMsg = document.querySelector(".booking-done") as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = "flex";
    }
  };

  const handleCar = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setCarType(value);
    setCarImg(value);
  };

  const handlePick = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: ChangeEvent<HTMLSelectElement>): void => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setDropTime(e.target.value);
  };

  let imgUrl: string;
  switch (carImg) {
    case "Toyota ETIOS":
      imgUrl = Etos;
      break;
    case "Toyota Innova":
      imgUrl = ToyotaInnova;
      break;
    case "Toyota Innova Crysta":
      imgUrl = ToyotaInnova;
      break;
    case "Maruti suzuki Swift":
      imgUrl = ToyotaCrysta;
      break;
    case "Force Traveller":
      imgUrl = Swift;
      break;
    case "Chevrolet Spin":
      imgUrl = Force;
      break;
    case "Fiat Mobi":
      imgUrl = FiatMobi;
      break;
    case "Fiat Uno":
      imgUrl = FiatUno;
      break;
    case "Volkswagen Golf":
      imgUrl = VolkswagenGolf;
      break;
    case "Volkswagen Beetle":
      imgUrl = VolkswagenBeetle;
      break;
    default:
      imgUrl = "";
  }

  const hideMessage = (): void => {
    const doneMsg = document.querySelector(".booking-done") as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = "none";
    }
  };
  return (
    <div>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        {/* booking form */}
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Rent your car</h2>

              <p className="error-message">
                Preencha todos os campos! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Quase lá! Te enviamos um link de confirmação por email.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Choose your
                    preferred model<b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Choose Your Car</option>
                    <option value="Toyota ETIOS">Toyota ETIOS</option>
                    <option value="Toyota Innova">Toyota Innova</option>
                    <option value="Toyota Innova Crysta">
                      Toyota Innova Crysta
                    </option>
                    <option value="Maruti suzuki Swift">
                      Maruti suzuki Swift
                    </option>
                    <option value="Force Traveller">Force Traveller</option>
                    {/* <option value="Chevrolet Spin">Chevrolet Spin</option>
                    <option value="Fiat Mobi">Fiat Mobi</option>
                    <option value="Fiat Uno">Fiat Uno</option>
                    <option value="Volkswagen Golf">Volkswagen Golf</option>
                    <option value="Volkswagen Beetle">Volkswagen Beetle</option> */}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp;
                   PickUp location <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Where Are you Going to get it ?</option>
                    <option>Hampi</option>
                    <option>Mysore</option>
                    <option>Madikeri</option>
                    <option>Tirupati</option>
                    <option>Belur And Halebidu</option>
                    <option>kodekinal</option>
                    <option>chikmangalore</option>
                    <option>Horanadu</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop
                    location <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Where Will You deliver ?</option>

                    <option>Hampi</option>
                    <option>Mysore</option>
                    <option>Madikeri</option>
                    <option>Tirupati</option>
                    <option>Belur And Halebidu</option>
                    <option>kodekinal</option>
                    <option>chikmangalore</option>
                    <option>Horanadu</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp;
                    PickUp Date <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; DropOut
                    date <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  To Search for
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Completar Reserva</h2>
          <IconX onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> After completing your reservation, you will receive:
          </h4>
          <p>
          A voucher to enter a drawing for gift cards and cashback of up to 15% of the total rental amount.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Collection location</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Reservation Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Delivery Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Seu primeiro nome"
                ></input>
                <p className="error-modal">Required field.</p>
              </span>

              <span>
                <label>
                  LastName <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Seu LastName"
                ></input>
                <p className="error-modal ">Required Field.</p>
              </span>

              <span>
                <label>
                  Cell Phone <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">Request Field</p>
              </span>

              <span>
                <label>
                  <i className="fas fa-angellist    "></i> <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                  min="18"
                  max="100"
                ></input>
                <p className="error-modal">Required field</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Seu Enter your Email"
                ></input>
                <p className="error-modal">Required field</p>
              </span>

              <span>
                <label>
                  Adress <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="23 Example Street"
                ></input>
                <p className="error-modal">Required field.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="City"
                ></input>
                <p className="error-modal">Required field.</p>
              </span>

              <span>
                <label>
                  ZipCode <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="00000-000"
                ></input>
                <p className="error-modal">Required field.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Send me promotions and updates via email</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
