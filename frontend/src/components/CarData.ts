import ToyotaCamry from '../images/hero/etos.png';
import ToyotaHilux from '../images/cars/innova.png';
import BmwX4 from '../images/cars/Crysta-1.png';
import BmwX5 from '../images/cars/swift.png';
import ChevroletOnix from '../images/cars/Traveller.png';
import CheroletSpin from '../images/cars/chevrolet-spin.png';
import FiatMobi from '../images/cars/fiat-mobi.png';
import FiatUno from '../images/cars/fiat-uno.png';
import VolkswagenGolf from '../images/cars/volkswagen-golf.png';
import VolkswagenBeetle from '../images/cars/volkswagen-new-beetle.png';

interface Car {
  name: string;
  price: string;
  img: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

export const CAR_DATA: Car[][] = [
  [
    {
      name: 'Toyota ETIOS',
      price: '13',
      img: ToyotaCamry,
      model: ' ETIOS',
      mark: 'Toyota',
      year: '2020',
      doors: '4',
      air: 'Yes',
      transmission: 'Manual',
      fuel: 'Híbrido',
    },
  ],
  [
    {
      name: 'Toyota Innova',
      price: '17',
      img: ToyotaHilux,
      model: 'Innova',
      mark: 'Toyota',
      year: '2021',
      doors: '4',
      air: 'Yes',
      transmission: 'Manual',
      fuel: '',
    },
  ],
  [
    {
      name: 'Toyota Innova Crysta',
      price: '18',
      img: BmwX4,
      model: 'Crysta',
      mark: 'Innova',
      year: '2018',
      doors: '4',
      air: 'Yes',
      transmission: 'Manual',
      fuel: 'Flex',
    },
  ],
  [
    {
      name: 'Maruti Suzuki Swift',
      price: '13',
      img: BmwX5,
      model: 'Swift',
      mark: 'Maruti Suzuki ',
      year: '2020',
      doors: '4',
      air: 'Yes',
      transmission: 'Manual',
      fuel: 'Flex',
    },
  ],
  [
    {
      name: 'Tempo Trveller',
      price: '24',
      img: ChevroletOnix,
      model: 'Onix',
      mark: 'FORCE',
      year: '2019',
      doors: '2',
      air: 'Sim',
      transmission: 'Manul',
      fuel: 'Flex',
    },
  ],
  [
    {
      name: 'Chevrolet Spin',
      price: '140',
      img: CheroletSpin,
      model: 'Spin',
      mark: 'Chevrolet',
      year: '2019',
      doors: '4',
      air: 'Sim',
      transmission: 'Manual',
      fuel: 'Gasolina',
    },
  ],
  [
    {
      name: 'Fiat Mobi',
      price: '110',
      img: FiatMobi,
      model: 'Mobi',
      mark: 'Fiat',
      year: '2022',
      doors: '4',
      air: 'Sim',
      transmission: 'Manual',
      fuel: 'Gasolina',
    },
  ],
  [
    {
      name: 'Fiat Uno',
      price: '100',
      img: FiatUno,
      model: 'Uno',
      mark: 'Fiat',
      year: '2022',
      doors: '4',
      air: 'Sim',
      transmission: 'Manual',
      fuel: 'Gasolina',
    },
  ],
  [
    {
      name: 'Volkswagen Golf',
      price: '150',
      img: VolkswagenGolf,
      model: 'Golf',
      mark: 'Volkswagen',
      year: '2020',
      doors: '4',
      air: 'Sim',
      transmission: 'Manual',
      fuel: 'Gasolina',
    },
  ],
  [
    {
      name: 'Volkswagen New Beetle',
      price: '160',
      img: VolkswagenBeetle,
      model: 'New Beetle',
      mark: 'Volkswagen',
      year: '2021',
      doors: '2',
      air: 'Sim',
      transmission: 'Automático',
      fuel: 'Flex',
    },
  ],
];
