import { useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";

const Faq: React.FC = () => {
  const [activeQ, setActiveQ] = useState<string>("q1");

  const openQ = (id: string): void => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id: string): string => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id: string): string => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h5>Doubts?</h5>
            <h2>Most Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Reservation
              Process on Our Site: Answers to Common Questions and Questions.
            </p>
          </div>

          <div className="all-questions">
            <div className="faq-box">
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__question  ${getClassQuestion("q1")}`}
              >
                <p>
                  1. How do I know if I'm getting the best car rental price?
                </p>
                <IconChevronDown />
              </div>
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__answer ${getClassAnswer("q1")}`}
              >
                On our website, we guarantee price transparency and offer an
                easy comparison between different vehicle options and rates.
                Additionally, we frequently have special promotions and
                exclusive discounts for our customers.
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__question ${getClassQuestion("q2")}`}
              >
                <p>
                  2. How can I trust the quality of the cars available for rent
                  at cab Service Manipal?
                </p>
                <IconChevronDown />{" "}
              </div>
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__answer ${getClassAnswer("q2")}`}
              >
                We only work with reputable and trustworthy car rental
                companies, ensuring that all vehicles available for rent on our
                website are in great condition and regularly maintained.
                Additionally, we offer a variety of vehicle categories to meet
                the different needs and preferences of our customers.
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__question ${getClassQuestion("q3")}`}
              >
                <p>3. What payment options are available when booking a car?</p>
                <IconChevronDown />
              </div>
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__answer ${getClassAnswer("q3")}`}
              >
                We accept a variety of payment methods including major
                credit/debit cards and in some cases cash payment upon vehicle
                pickup. We guarantee security and convenience in all financial
                transactions carried out.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
