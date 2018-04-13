import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import Link from 'next/link';
import s from './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logoPath = '/static/images/logoTeal.svg';
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="navbarContainer">
        <Container fluid>
          <Navbar color="faded" light expand="md" className="h-80">
            <Row>
              <Col md={2} className="d-flex justify-content-end align-items-center">
                <NavbarBrand href="/">
                  <img src={this.logoPath} height="32" alt="Cove Logo" />
                </NavbarBrand>
              </Col>
              <Col md={10}>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Row>
                    <Col md={8}>
                      <Nav className="d-flex justify-content-between align-items-center" navbar>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Alarm System</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Smoke + Flood + CO Alarm</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Medical</NavLink></Link>
                        </NavItem>
                        <NavItem>
                          <Link href="/"><NavLink href="" className="navLink">Camera</NavLink></Link>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md={2} className="d-flex align-items-center justify-content-end">
                      <Nav navbar>
                        <NavItem>
                          <Link href="/login"><NavLink href="" className="signinLink">Sign in</NavLink></Link>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md={2} className="d-flex align-items-center justify-content-start">
                      <Nav navbar>
                        <NavItem>
                          <Link href="/"><NavLink className="shopNowLink pl-4 pr-4 pt-1 pb-1">Shop now</NavLink></Link>
                        </NavItem>
                      </Nav>
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
