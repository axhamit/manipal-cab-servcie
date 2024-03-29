import { IconQuote } from "@tabler/icons-react";

import User1 from "../images/testimonials/user-1.jpg";
import User2 from "../images/testimonials/user-2.jpg";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h4>100% Satisfaction</h4>
            <h2>Customer Reviews</h2>
            <p>
              Discover the positive impact we have had on our customers by
              reading the testimonials. Our clients have experienced our
              services and results, and are eager to share their positive
              experiences with you.
            </p>
          </div>

          <div className="all-testimonials">
            <div className="all-testimonials__box">
              <span className="quotes-icon">
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "Alugamos um carro neste site e tivemos uma experiência
                incrível! A reserva foi simples e as tarifas de aluguel foram
                muito acessíveis. "
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={User1} alt="" />
                  <span>
                    <h4>João Pedro</h4>
                    <p>Recife</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="all-testimonials__box box-2">
              <span className="quotes-icon">
                <IconQuote width={60} height={60} />
              </span>
              <p>
                "O carro estava em ótimo estado e tornou nossa viagem ainda
                melhor. Altamente recomendado este site de aluguel de carros!"
              </p>
              <div className="all-testimonials__box__name">
                <div className="all-testimonials__box__name__profile">
                  <img src={User2} alt="" />
                  <span>
                    <h4>Maria Joana</h4>
                    <p>São Paulo</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
