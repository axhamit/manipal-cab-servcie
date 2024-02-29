import { Footer, HeroPages } from '../components';

import { IconPhone } from '@tabler/icons-react';

import Hampi from '../images/team/hampi_1.jpg';
import Mysore from '../images/team/mysore_2.jpg';
import chikmaglur from '../images/team/chikmaglur.jpg';
import Person4 from '../images/team/4.jpg';
import Person5 from '../images/team/5.jpg';
import Person6 from '../images/team/6.jpg';
import Person7 from '../images/team/6.jpg';
import Person8 from '../images/team/6.jpg';
import Person9 from '../images/team/6.jpg';
import Person10 from '../images/team/6.jpg';


const Places: React.FC = () => {
  interface TeamMember {
    img: string;
    name: string;
    job: string;
  }

  const teamMember: TeamMember[] = [
    { img: Hampi, name: 'Hampi', job: 'One Of the best and oldest city in Karnataka' },
    { img: Mysore, name: 'Mysore', job: 'City Of aramane' },
    { img: chikmaglur, name: 'Chikmagalur', job: 'Gerente de Operações' },
    { img: Person4, name: 'Lucas Silva', job: 'Agente de Atendimento' },
    { img: Person5, name: 'Mariana Santos', job: 'Analista Financeiro' },
    { img: Person6, name: 'Ana Oliveira', job: 'Analista de Dados' },
    { img: Person7, name: 'Ana Oliveira', job: 'Analista de Dados' },
    { img: Person8, name: 'Ana Oliveira', job: 'Analista de Dados' },
    { img: Person9, name: 'Ana Oliveira', job: 'Analista de Dados' },
    { img: Person10, name: 'Ana Oliveira', job: 'Analista de Dados' },

  

  ];

  return (
    <section className='team-page'>
      <HeroPages name='Places' />
      <div className='container'>
        <div className='team-container'>
          {teamMember.map((member, id) => (
            <div key={id} className='team-container__box'>
              <div className='team-container__box__img-div'>
                <img src={member.img} alt='' />
              </div>
              <div className='team-container__box__descr'>
                <h3>{member.name}</h3>
                <p>{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* book banner */}
      <div className='book-banner'>
        <div className='book-banner__overlay'></div>
        <div className='container'>
          <div className='text-content'>
            <h2>Contact now!</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Places;
