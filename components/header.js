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

  render() {
    return (
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
                          <Link href="/"><NavLink href="" className="navLink">Alarm System</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <NavLink className="navLink" onClick={this.toggleDropdown}>Smoke + Flood + CO Alarm
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
                          <Link href="/"><NavLink href="" className="navLink">Medical</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <NavLink onClick={this.toggleDropdown} className="navLink">Camera
                            <div className="dropdown invisible">
                              <div className="d-flex">
                                <Col xs={6}>
                                  <Link href="/products/smoke-detector">
                                    <div className="dropdown__item">
                                      <img className="dropdown__image" src="/static/images/product/doorbell-camera/doorbell-camera-front.jpg" />
                                      <span className="dropdown__text">Cove Bell</span>
                                    </div>
                                  </Link>
                                </Col>
                                <Col xs={6}>
                                  <Link href="/products/flood-detection-sensor">
                                    <div className="dropdown__item">
                                      <img className="dropdown__image" src="/static/images/product/home-security-camera/home-security-camera-front.jpg" />
                                      <span className="dropdown__text">Flood/Freeze</span>
                                    </div>
                                  </Link>
                                </Col>
                              </div>
                            </div>
                          </NavLink>
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
