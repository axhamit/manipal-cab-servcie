import SelectCar from '../images/plan/select-car.png';
import Contact from '../images/plan/contact.png';
import Drive from '../images/plan/drive.png';

const PlanTrip: React.FC = () => {
  return (
    <section className='plan-section'>
      <div className='container'>
        <div className='plan-container'>
          <div className='plan-container__title'>
            <h3>Rent quickly and without bureaucracy</h3>
            <h2>How does it work?</h2>
          </div>

          <div className='plan-container__boxes'>
            <div className='plan-container__boxes__box'>
              <img src={SelectCar} alt='' />
              <h3>Choose a car</h3>
              <p>
              We offer a wide variety of vehicles for all your driving needs. We have the perfect car to meet your needs.


              </p>
            </div>

            <div className='plan-container__boxes__box'>
              <img src={Contact} alt='' />
              <h3>Call The Driver</h3>
              <p>Our team will contact you to confirm your order.</p>
            </div>

            <div className='plan-container__boxes__box'>
              <img src={Drive} alt='' />
              <h3>Enjoy Your Trip</h3>
              <p>
              Now you can leave and enjoy the comfort of your trip. We've got you covered with our wide range of cars.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
