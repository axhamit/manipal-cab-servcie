import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu2, IconX, IconUser } from '@tabler/icons-react';
import {IconPhoneCall } from '@tabler/icons-react';
// import Logo from '../images/logo/logo.png';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const openNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1000 && nav) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nav]);

  return (
    <header>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? 'open-nav' : ''}`}>
          <div onClick={openNav} className='mobile-navbar__close'>
            <IconX />
          </div>
          <ul className='mobile-navbar__links'>
            <li>
              <IconUser />
              Book Now
            </li>
            <li>
              <Link onClick={openNav} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/about'>
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/models'>
                Cars
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/testimonials'>
              Witnesses
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/places'>
                Equipe
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className='navbar'>
          <div className='navbar__img'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
              {/* <img src={Logo} alt='logo-img' /> */}
            </Link>
          </div>
          <ul className='navbar__links'>
            <li>
              <Link className='home-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='about-link' to='/about'>
                About Us
              </Link>
            </li>
            <li>
              <Link className='models-link' to='/models'>
                cars
              </Link>
            </li>
            <li>
              <Link className='testi-link' to='/testimonials'>
              Witnesses
              </Link>
            </li>
            <li>
              <Link className='team-link' to='/places'>
                Places
              </Link>
            </li>
            <li>
              <Link className='contact-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='navbar__buttons'>
            {/* <Link className='navbar__buttons__sign-in' to='/'>
              Enter
            </Link> */}
            <a  href="tel:+918105803440" className='navbar__buttons__register' >
            <IconPhoneCall /> &nbsp;  BOOK NOW
            </a>
          </div>

          {/* burger-menu */}
          <div className='mobile-hamb' onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
