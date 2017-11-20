import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import Header from '../components/header'
import Layout from '../components/minimalLayout'
import Input from '../components/input'
import CheckoutSidebar from '../components/checkoutSidebar'
import { getUrlParameter } from '../libs/utils'

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.step = 1;
  }

  componentDidMount() {
    this.step = getUrlParameter('step')
  }

  render () {
    const props = this.props
    const activeStage = this.step ? this.step : 1
    return (
      <Layout>
        <Container>
          <Header color="secondary"/>
          <div className="spacer"></div>
          <Row>
            <Col md={8}>
              <div className="checkoutStageRow">
                <Row>
                  <Col xs={3}>
                    <Link href={{ pathname: '/checkout', query: { step: 1 }}}>
                      <div className={`checkoutStageOne link ${activeStage == 1 ? 'activeStage': ''}`}>
                        1 Customer Info
                        <div className="stageIndicator"></div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={3}>
                    <div className={`checkoutStageTwo link ${activeStage == 2 ? 'activeStage': ''}`}>
                      2 Shipping Info
                      <div className="stageIndicator"></div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className={`checkoutStageThree link ${activeStage == 3 ? 'activeStage': ''}`}>
                      3 Payment Information
                      <div className="stageIndicator"></div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="customerInfo">
                <h3>Customer Information</h3>
                <Row>
                  <Col md={6}>
                    <Input label="First Name" />
                  </Col>
                  <Col md={6}>
                    <Input label="Last Name" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Input label="Email Address" />
                  </Col>
                  <Col md={6}>
                    <Input label="Phone" />
                  </Col>
                </Row>
              </div>
              <div className="customerInfo">
                <h3>Monitoring Information</h3>
                <Row>
                  <Col md={8}>
                    <Input label="Monitoring Address" />
                  </Col>
                  <Col md={4}>
                    <Input label="Apt # or Unit #" />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Input label="Postal Code" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Input label="Emergency Contact" />
                  </Col>
                  <Col md={6}>
                    <Input label="Phone" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Input label="Verbal Password" />
                  </Col>
                  <Col md={6}>
                    <Input label="Mastercode" />
                  </Col>
                </Row>
                <div className="footerControls">
                  <Row>
                    <Col xs={8}>
                      <ul className="list-inline">
                        <li className="list-inline-item align-top">
                          <img src="/static/images/arrowFullLeft.png" />
                        </li>
                        <li className="list-inline-item returnLink">
                          Return to Shop
                        </li>
                      </ul>
                    </Col>
                    <Col xs={4}>
                      <div className="actionBtn">
                        Continue to Shipping
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col className="justify-content-end" md={4}>
              <CheckoutSidebar />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .spacer {
            margin-top: 60px;
          }
          .checkoutStageRow {
            font-family: GothamRoundedBold;
            font-size: 14px;
            color: #8A9097;
          }
          .stageIndicator {
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background: #BEC1C5;
            opacity: 0.5;
            margin-top: 6px;
          }
          .activeStage {
            color: #191E2B;
          }
          .activeStage .stageIndicator {
            background: #5BC4B8;
            opacity: 1;
          }
          .customerInfo {
            h3 {
              margin-top: 60px;
              margin-bottom: 30px;
              font-size: 24px;
              font-family: GothamRoundedBold;
              color: #191E2B;
            }
          }
          .footerControls {
            margin-top: 100px;
          }
          .returnLink {
            font-family: GothamRoundedBold;
            font-size: 16px;
            color: #8A9097;
            padding-top: 3px;
          }
          .actionBtn {
            color: #FFFFFF;
            height: 40px;
            width: 236px;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            background: #F17927;
            font-size: 16px;
            text-align: center;
            font-family: GothamRoundedBook;
            font-weight: bold;
            padding-top: 8px;
            cursor: pointer;
          }
        `}
        </style>
        <style jsx global>{`
          .customerInfo{
            .row {
              margin-top: 40px;
            }
          }
        `}
      </style>
      </Layout>
    )
  }
}

export default CheckoutPage
