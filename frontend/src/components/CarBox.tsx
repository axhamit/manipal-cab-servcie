import { useState } from 'react';

interface Car {
  img: string;
  price: number;
  model: string;
  mark: string;
  year: number;
  doors: number;
  air: string;
  transmission: string;
  fuel: string;
}

interface CarBoxProps {
  data: any;
  carID: number;
}

const CarBox: React.FC<CarBoxProps> = ({ data, carID }) => {
  const [carLoad, setCarLoad] = useState<boolean>(true);

  return (
    <>
      {data[carID].map((car: Car, id: number) => (
        <div key={id} className='box-cars'>
          {/* car */}
          <div className='pick-car'>
            {carLoad && <span className='loader'></span>}
            <img
              style={{ display: carLoad ? 'none' : 'block' }}
              src={car.img}
              alt='car_img'
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className='pick-description'>
            <div className='pick-description__price'>
              <span>₹ {car.price}</span>/ per Km
            </div>
            <div className='pick-description__table'>
              <div className='pick-description__table__col'>
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Brand</span>
                <span>{car.mark}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Ports</span>
                <span>{car.doors}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Air</span>
                <span>{car.air}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Streaming</span>
                <span>{car.transmission}</span>
              </div>

              <div className='pick-description__table__col'>
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className='cta-btn' href='#booking-section'>
              Book Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarBox;
