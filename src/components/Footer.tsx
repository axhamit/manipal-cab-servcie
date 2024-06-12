import { IconMail, IconPhoneCall } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-content'>
          <ul className='footer-content__1'>
            <li>
              <span>CAB SERVICE MANIPAL</span>
            </li>
            <li>
            We have a wide variety of vehicles to meet all your needs.
            </li>
            <li>
              <a href='tel:+918105803440'>
                <IconPhoneCall /> &nbsp; +918105803440
              </a>
            </li>

            <li>
              <a
                href='mailto: 
                email@exemplo.com'>
                <IconMail />
                &nbsp; email@exemplo.com
              </a>
            </li>
          </ul>

          <ul className='footer-content__2'>
            <li>COMPANY</li>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='#home'>Work with us</a>
            </li>
            <li>
              <a href='#home'>Accessibility</a>
            </li>
            <li>
              <a href='#home'>Places</a>
            </li>
          </ul>

          <ul className='footer-content__2'>
            <li>OPENING HOURS</li>
            <li>24 Hours</li>
           
          </ul>

          <ul className='footer-content__2'>
            <li>RECEIVE NEWS</li>
            <li>
              <p>Enter your Email to Receive Updates and Promotions.</p>
            </li>
            <li>
              <input type='email' placeholder='Enter Email'></input>
            </li>
            <li>
              <button className='submit-email'>Register</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
