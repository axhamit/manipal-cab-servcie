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
} from '../components';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      
      <Footer />
    </main>
  );
};

export default Home;
