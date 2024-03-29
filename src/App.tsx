import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {
  Models,
  TestimonialsPage,
  Places,
  Contact,
  Home,
  About,
} from "./pages";
import { Navbar } from "./components";

import "../src/dist/styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="places" element={<Places />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
