import PropTypes from 'prop-types';
import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse } from 'reactstrap';
import Link from 'next/link';
import s from './header.scss';

const Header = (props) => {
  let logo = 'logoWhite.svg';
  let fontColor = '#FFFFFF';
  if (props.color === 'secondary') {
    logo = 'logoTeal.svg';
    fontColor = '#00B19A';
  }
  const logoPath = `/static/images/${logo}`;
  return (
    <div className={s.header} style={{ color: fontColor }}>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src={logoPath} height="32px" alt="Cove Logo" />
        </NavbarBrand>
        <Nav className={s.authLinks}>
          <Link href="/login">
            <div>
              Sign in
            </div>
          </Link>
          <Link href="/signup">
            <div className={s.signup} style={{ border: `2px solid ${fontColor}` }}>
              Sign Up
            </div>
          </Link>
        </Nav>

        <NavbarToggler className={`${s.toggler} ${props.color === 'secondary' ? s.secondary : ''}`} />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: 'primary',
};

export default Header;
