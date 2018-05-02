import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse, Popover, PopoverBody } from 'reactstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import HeaderPopoverItem from './headerPopoverItem';
import s from './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logoPath = '/static/images/logoTeal.svg';
    this.state = {
      isOpen: false,
      isSignupOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleSignupMenu = () => {
    this.setState({
      isSignupOpen: !this.state.isSignupOpen,
    });
  }

  toggleDropdown = (e) => {
    let dropdown = e.target.children[0];
    let classes = dropdown.classList;

    if (classes.contains('visible')) {
      dropdown.classList.remove('visible');
      dropdown.classList.add('invisible');
    } else {
      document.querySelectorAll('.dropdown').forEach((item) => {
        if (item.classList.contains('visible')) {
          item.classList.remove('visible');
          item.classList.add('invisible');
        }
      })
      dropdown.classList.remove('invisible');
      dropdown.classList.add('visible');
    }
  }

  handleMenuClick = (e) => {
    if (!e.target.classList.contains('mobile-menu__item')) {
      e.target.classList.toggle('open');
    }
  }

  handleMobileMenuItemClick = (id) => {
    document.querySelector(`#${id}`).classList.toggle('open');
  }

  render() {
    return (
      <div>
        <div className="navbarSpacer" />
        <div className="navbarContainer paddingNone">
          <Container fluid>
            <Navbar color="faded" light expand="md" className="h-80">
              <Row className="hideWhenSmall">
                <div className="d-flex justify-content-end align-items-center">
                  <NavbarBrand className="hideWhenSmall" href="/">
                    <img className="hideWhenSmall coveLogo" src={this.logoPath} height="32" alt="Cove Logo" />
                  </NavbarBrand>
                </div>
                <Col>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Row>
                      <div>
                        <Nav className="d-flex align-items-center justify-content-start" navbar>
                          <NavItem>
                            <Link href="/products/cove-touch"><NavLink href="" className="navLink">Alarm System</NavLink></Link>
                          </NavItem>
                          <NavItem>
                            <NavLink className="navLink dropdown-parent" onClick={this.toggleDropdown}>Smoke + Flood + CO Alarm
                              <div className="dropdown invisible">
                                <div className="d-flex">
                                  <Col xs={4}>
                                    <Link href="/products/smoke-detector">
                                      <div className="dropdown__item">
                                        <img className="dropdown__image" src="/static/images/product/smoke-detector/smoke-detector-front.jpg" />
                                        <span className="dropdown__text">Smoke/Heat/Freeze</span>
                                      </div>
                                    </Link>
                                  </Col>
                                  <Col xs={4}>
                                    <Link href="/products/flood-detection-sensor">
                                      <div className="dropdown__item">
                                        <img className="dropdown__image" src="/static/images/product/flood-detection-sensor/flood-detection-sensor-front.jpg" />
                                        <span className="dropdown__text">Flood/Freeze</span>
                                      </div>
                                    </Link>
                                  </Col>
                                  <Col xs={4}>
                                    <Link href="/products/carbon-monoxide-detector">
                                      <div className="dropdown__item">
                                        <img className="dropdown__image" src="/static/images/product/carbon-monoxide-detector/carbon-monoxide-front.jpg" />
                                        <span className="dropdown__text">Carbon Monoxide</span>
                                      </div>
                                    </Link>
                                  </Col>
                                </div>
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <Link href="/products/medical-alert-device"><NavLink href="" className="navLink">Medical</NavLink></Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/products/home-security-camera"><NavLink href="" className="navLink">Camera</NavLink></Link>
                          </NavItem>
                        </Nav>
                      </div>
                      <Col className="d-flex align-items-center justify-content-end ml-auto">
                        <Nav navbar>
                          <NavItem>
                            <NavLink className="signinLink" id="Popover1" onClick={this.toggleSignupMenu}>Sign in</NavLink>
                            <Popover placement="bottom" isOpen={this.state.isSignupOpen} target="Popover1" toggle={this.toggleSignupMenu}>
                              <div className="popover-header">
                                <div>
                                  Manage Accounts
                                </div>
                              </div>
                              <PopoverBody>
                                <HeaderPopoverItem text="1154 N 190 E Lehi, UT 84048" />
                                <HeaderPopoverItem text="678 W 1280 S Lehi, UT 84043" />
                              </PopoverBody>
                            </Popover>
                          </NavItem>
                        </Nav>
                      </Col>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="hideWhenSmall">
                          <Nav navbar>
                            <NavItem>
                              <Link href="/">
                                <NavLink className="actionLink pl-4 pr-4 pt-1 pb-1">Shop Now</NavLink>
                              </Link>
                            </NavItem>
                          </Nav>
                        </div>
                      </div>
                    </Row>
                  </Collapse>
                </Col>
              </Row>
            </Navbar>
          </Container>
          <div className="mobile-nav" onClick={this.handleMenuClick}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="menu-button">
                <span className="menu-button__bar"></span>
                <span className="menu-button__bar"></span>
                <span className="menu-button__bar"></span>
              </div>
              <div className="mobile-menu">
                <div className="mobile-menu__column">
                  <Link href="/products/cove-touch">
                    <a className="mobile-menu__item">
                      <img className="mobile-menu__icon" src="/static/images/icons/alarmIcon.png" />
                      <span className="mobile-menu__text">Alarm System</span>
                    </a>
                  </Link>
                  <span id="smokeFlood" className="mobile-menu__item mobile-menu__item--submenu" onClick={() => this.handleMobileMenuItemClick('smokeFlood')}>
                    <img className="mobile-menu__icon" src="/static/images/icons/fireIcon.png" />
                    <span className="mobile-menu__text">Smoke + Flood + CO Alarm</span>
                    <div className="mobile-menu__submenu">
                      <Link href="/products/smoke-detector">
                        <span className="mobile-menu__submenu-text">Smoke/Heat/Freeze</span>
                      </Link>
                      <Link href="/products/flood-detection-sensor">
                        <span className="mobile-menu__submenu-text">Flood/Freeze</span>
                      </Link>
                      <Link href="/products/carbon-monoxide-detector">
                        <span className="mobile-menu__submenu-text">Carbon Monoxide</span>
                      </Link>
                    </div>
                  </span>
                  <Link href="/products/medical-alert-device">
                    <a className="mobile-menu__item">
                      <img className="mobile-menu__icon" src="/static/images/icons/medicalIcon.png" />
                      <span className="mobile-menu__text">Medical</span>
                    </a>
                  </Link>
                  <span id="cameraItem" className="mobile-menu__item mobile-menu__item--submenu" onClick={() => this.handleMobileMenuItemClick('cameraItem')}>
                    <img className="mobile-menu__icon" src="/static/images/icons/cameraIcon.png" />
                    <span className="mobile-menu__text">Camera</span>
                    <div className="mobile-menu__submenu">
                      <Link href="/products/doorbell-camera">
                        <span className="mobile-menu__submenu-text">Cove Doorbell</span>
                      </Link>
                      <Link href="/products/home-security-camera">
                        <span className="mobile-menu__submenu-text">Cove Cam</span>
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
              <img className="coveLogo mobile-nav__logo" src={this.logoPath} height="32" alt="Cove Logo" />
            </div>
          </div>
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}

Header.propTypes = {
  callingPage: PropTypes.string,
};

Header.defaultProps = {
  callingPage: '',
};
