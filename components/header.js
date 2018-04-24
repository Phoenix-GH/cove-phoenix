import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavbarToggler, NavbarBrand, Collapse, Popover, PopoverBody } from 'reactstrap';
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

  safetyText = calledBy => (
    calledBy === 'products' ? 'Life Safety' : 'Smoke + Flood + CO Alarm'
  );

  medicalText = calledBy => (
    calledBy === 'products' ? 'Medical Button' : 'Medical'
  )

  buttonActionText = (calledBy) => {
    switch (calledBy) {
      default: {
        return 'Protect Me';
      }
    }
  }

  imgStampClassName = (calledBy) => {
    switch (calledBy) {
      case 'bell': {
        return 'hideWhenSmall stampImage';
      }
      default: {
        return 'hideAlways';
      }
    }
  }

  customHeaderSmallClassNameV1 = (calledBy) => {
    switch (calledBy) {
      case 'bell': {
        return 'hideWhenLarge';
      }
      default: {
        return 'hideAlways';
      }
    }
  }

  customHeaderSmallClassNameV2 = (calledBy) => {
    switch (calledBy) {
      case 'bell': {
        return 'hideAlways';
      }
      default: {
        return 'hideWhenLarge';
      }
    }
  }

  render() {
    return (
      <div className="navbarContainer paddingNone">
        <Container fluid className="paddingNone">
          <Navbar color="faded" light expand="md" className="h-80 paddingNone">
            
            <Row className="hideWhenLarge">
              <Col md={4} className="d-flex justify-content-between align-items-center">

                  <div className={this.customHeaderSmallClassNameV1(this.props.callingPage)}>
                    <button className="navbar-toggler ml-auto custom-toggler" type="button" onClick={this.toggle} >
                      <span className="navbar-toggler-icon" />
                    </button>
                  </div>
                  <div className={this.customHeaderSmallClassNameV1(this.props.callingPage)}>
                    <NavbarBrand href="/">
                      <Nav navbar>
                        <NavItem>
                          <Link href="/"><NavLink className="actionLinkMediaSmall actionLink pl-4 pr-4 pt-1 pb-1">{this.buttonActionText(this.props.callingPage)}</NavLink></Link>
                        </NavItem>
                      </Nav>
                    </NavbarBrand>
                  </div>
                  <div className={this.customHeaderSmallClassNameV1(this.props.callingPage)}>
                    <NavbarBrand href="/">
                      <img className="coveLogoCircle" src="/static/images/coveLogoCircle.png" alt="coveLogoCircle" />
                    </NavbarBrand>
                  </div>

                  <div className={this.customHeaderSmallClassNameV2(this.props.callingPage)}>
                    <NavbarBrand href="/">
                      <img className="coveLogo" src={this.logoPath} height="32" alt="Cove Logo" />
                    </NavbarBrand>
                  </div>

                  <div className={this.customHeaderSmallClassNameV2(this.props.callingPage)}>
                    <button className="navbar-toggler ml-auto custom-toggler" type="button" onClick={this.toggle} >
                      <span className="navbar-toggler-icon" />
                    </button>
                  </div>
                  <div className={this.customHeaderSmallClassNameV2(this.props.callingPage)}>
                    <NavbarBrand href="/">
                      <Nav navbar>
                        <NavItem>
                          <Link href="/"><NavLink className="actionLinkMediaSmall actionLink pl-4 pr-4 pt-1 pb-1">{this.buttonActionText(this.props.callingPage)}</NavLink></Link>
                        </NavItem>
                      </Nav>
                    </NavbarBrand>
                  </div>

              </Col>
            </Row>
        </Navbar>
        </Container>

        <Container fluid>
          <Navbar color="faded" light expand="md" className="h-80">

            <Row className="hideWhenSmall">
              <Col md={2} className="d-flex justify-content-end align-items-center">
                <NavbarBrand className="hideWhenSmall" href="/">
                  <img className="hideWhenSmall coveLogo" src={this.logoPath} height="32" alt="Cove Logo" />
                </NavbarBrand>
              </Col>
              <Col md={10}>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Row>
                    <Col md={7}>
                      <Nav className="d-flex align-items-center justify-content-between" navbar>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Alarm System</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">{this.safetyText(this.props.callingPage)}</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">{this.medicalText(this.props.callingPage)}</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Camera</NavLink></Link>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md={2} className="d-flex align-items-center justify-content-end">
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
                    <Col md={2} className="d-flex align-items-center justify-content-start">
                      <div className="hideWhenSmall">
                      <Nav navbar>
                        <NavItem>
                          <Link href="/"><NavLink className="actionLink pl-4 pr-4 pt-1 pb-1">{this.buttonActionText(this.props.callingPage)}</NavLink></Link>
                        </NavItem>
                      </Nav>
                      </div>

                    </Col>
                    <Col md={1} className="d-flex align-items-center justify-content-start">                      
                      <img className={this.imgStampClassName(this.props.callingPage)} src="/static/images/60dayStamp.png" alt="60DayStamp" />
                    </Col>
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
