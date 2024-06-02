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
import WhatsAppIcon from '../components/whatsup/WhatsAppIcon';

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
      <WhatsAppIcon/>
      {/* <Testimonials /> */}
      <Faq />
      
      <Footer />
    </main>
  );
};

export default Home;
