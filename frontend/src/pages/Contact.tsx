import { HeroPages, Footer } from "../components";

import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from "@tabler/icons-react";

const Contact: React.FC = () => {
  return (
    <section className="contact-page">
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Contact Us</h2>
            <p>
              We are here to make your car rental easy and convenient. Contact
              us for reservations, assistance, or any questions you may have.
              Our dedicated team is ready to help!
            </p>
            <a href="/">
              <IconPhone /> &nbsp;   +918105803440
            </a>
            <a href="/">
              <IconMail /> &nbsp; email@exemplo.com
            </a>
            <a href="/">
              <IconLocation />
              &nbsp; Manipal, udupi
            </a>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder="Full Name"></input>

              <label>
                Enter your Email <b>*</b>
              </label>
              <input type="email" placeholder="seuemail@exemplo.com"></input>

              <label>
                Send Message <b>*</b>
              </label>
              <textarea placeholder="Write your question here..."></textarea>

              <button type="submit">
                <IconMailOpened />
                &nbsp; Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
