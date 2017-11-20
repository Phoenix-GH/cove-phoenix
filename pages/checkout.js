import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../components/header'
import Layout from '../components/minimalLayout'
import Input from '../components/input'

class CheckoutPage extends Component {

  render () {
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
                    <div className="checkoutStageOne activeStage">
                      1 Customer Info
                      <div className="stageIndicator"></div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="checkoutStageTwo">
                      2 Shipping Info
                      <div className="stageIndicator"></div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="checkoutStageThree">
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
              </div>
            </Col>
            <Col md={4}>

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
