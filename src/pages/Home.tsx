import {
  Hero,
  BookCar,
  PlanTrip,
  PickCar,
  Banner,
  ChooseUs,
  Testimonials,
  Faq,

  Footer,
  Popup,
} from '../components';

const Home: React.FC = () => {
  return (
    <main>
      <Popup/>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      {/* <Testimonials /> */}
      <Faq />
      
      <Footer />
    </main>
  );
};

export default Home;
