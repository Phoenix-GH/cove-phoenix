import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Nav,
  NavItem,
  NavLink,
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Collapse,
  Button
} from 'reactstrap';
import Link from 'next/link';
import s from './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logoPath = '/static/images/logoTeal.svg';
    this.stampPath = '/static/images/riskFreeTrial.png';
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar--landing">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Navbar color="faded" light expand="md" className="h-80">
                <NavbarBrand href="/">
                  <img src={this.logoPath} height="32" alt="Cove Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <Link href="/"><NavLink href="javascript:void(0)" className="ml-24 text-primary font-size-18">Alarm System</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/"><NavLink href="javascript:void(0)" className="ml-24 text-primary font-size-18">Smoke + Flood + CO Alarm</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/"><NavLink href="javascript:void(0)" className="ml-24 text-primary font-size-18">Medical</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/"><NavLink href="javascript:void(0)" className="ml-24 text-primary font-size-18">Camera</NavLink></Link>
                    </NavItem>
                  </Nav>
                  <Nav navbar>
                    <NavItem>
                      <Link href="/login"><NavLink href="javascript:void(0)" className="text-primary font-size-14 mt-3">Sign in</NavLink></Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/"><Button color="warning" className="ml-24 text-capitalize font-size-18 mt-3">Shop now</Button></Link>
                    </NavItem>
                    <NavItem>
                      <img src={this.stampPath} height="70" className="ml-24" />
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <style jsx>{s}</style>
      </div>
    );
  }
};
