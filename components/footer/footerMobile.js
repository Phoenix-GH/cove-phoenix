import React, { Component } from 'react';
import { Row, Col, Collapse, CardBody, Card } from 'reactstrap';
import s from './footerMobile.scss';

class FooterMobile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="footerMobileDiv">
        <div className="footerMobileHeaderDiv">
          <Row>
            <Col sm={2} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Store</div>
            </Col>
            <Col sm={8} className="d-flex justify-content-middle align-items-end">
              &nbsp;
            </Col>
            <Col sm={2} className="d-flex justify-content-middle align-items-left">
              <div className="divImgPlusTeal">
                <btn href="#" onClick={this.toggle}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </div>
        <div className="footerMobileHeaderDiv">
          <Row>
            <Col sm={2} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Company</div>
            </Col>
            <Col sm={8} className="d-flex justify-content-middle align-items-end">
              &nbsp;
            </Col>
            <Col sm={2} className="d-flex justify-content-middle align-items-right">
              <div className="divImgPlusTeal" >
                <btn onClick={this.toggle}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </div>
        <div className="footerMobileHeaderDiv">
          <Row>
            <Col sm={2} className="d-flex justify-content-middle align-items-left">
              <div className="footerTitle">Programs</div>
            </Col>
            <Col sm={8} className="d-flex justify-content-middle align-items-end">
              &nbsp;
            </Col>
            <Col sm={2} className="d-flex justify-content-middle align-items-right">
              <div className="divImgPlusTeal" >
                <btn onClick={this.toggle}><img src="/static/images/plusTeal.png" alt="plusTeal" /></btn>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="d-flex justify-content-middle align-items-left">
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <li>
                      <a href="/">Insurance Partners</a>
                    </li>
                    <li>
                      <a href="/">Rebates and Rewards</a>
                    </li>
                    <li>
                      <a href="/">Cove for Business</a>
                    </li>
                  </CardBody>
                </Card>
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
