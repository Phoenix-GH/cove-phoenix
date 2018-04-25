import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import s from './footerMobile.scss';

class FooterMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: [] };
  }

  toggle = (index) => {
    const { collapse } = this.state;
    collapse[index] = !collapse[index];
    this.setState({ collapse });
  }

  render() {
    return (
      <div className="footerMobileDiv">
        <div className="footerMobileHeaderDiv">
          <Row className="menuRow">
            <Col xs={10} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Store</div>
            </Col>
            <Col xs={2} className="d-flex justify-content-middle align-items-left">
              <div className="divImgPlusTeal">
                <btn href="#" onClick={() => this.toggle(0)}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse[0]}>
                <ul>
                  <li>
                    <a href="/">Cove Protect</a>
                  </li>
                  <li>
                    <a href="/">Cove Touch</a>
                  </li>
                  <li>
                    <a href="/">Cove Smoke Detector</a>
                  </li>
                  <li>
                    <a href="/">Cove Food Detector</a>
                  </li>
                  <li>
                    <a href="/">Cove Carbon Monoxide</a>
                  </li>
                  <li>
                    <a href="/">Cove Camera</a>
                  </li>
                </ul>
              </Collapse>
            </Col>
          </Row>
        </div>
        <div className="footerMobileHeaderDiv">
          <Row className="menuRow">
            <Col xs={10} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Company</div>
            </Col>
            <Col xs={2} className="d-flex justify-content-middle align-items-right">
              <div className="divImgPlusTeal" >
                <btn onClick={() => this.toggle(1)}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse[1]}>
                <ul>
                  <li>
                    <a href="/">Support</a>
                  </li>
                  <li>
                    <a href="/">Community</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Responsibility</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Press</a>
                  </li>
                  <li>
                    <a href="/">Video</a>
                  </li>
                </ul>
              </Collapse>
            </Col>
          </Row>
        </div>
        <div className="footerMobileHeaderDiv">
          <Row className="menuRow">
            <Col xs={10} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Programs</div>
            </Col>
            <Col xs={2} className="d-flex justify-content-middle align-items-right">
              <div className="divImgPlusTeal" >
                <btn onClick={() => this.toggle(2)}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse[2]}>
                <ul>
                  <li>
                    <a href="/">Insurance Partners</a>
                  </li>
                  <li>
                    <a href="/">Rebates and Rewards</a>
                  </li>
                  <li>
                    <a href="/">Cove for Business</a>
                  </li>
                </ul>
              </Collapse>
            </Col>
          </Row>
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}

export default FooterMobile;
