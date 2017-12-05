import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import Header from '../components/header'
import Layout from '../components/minimalLayout'
import Input from '../components/input'
import CheckoutSidebar from '../components/checkoutSidebar'
import CustomerInfo from '../components/customerInfo'
import ShippingInfo from '../components/shippingInfo'
import PaymentInfo from '../components/paymentInfo'
import { getUrlParameter } from '../libs/utils'

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    }
  }

  componentDidMount() {
    const step =  parseInt(getUrlParameter('step'))
    console.log('step', step)
    this.state.step != step  ? this.setState({ step: step }) : '';
  }

  render () {
    const props = this.props
    const activeStage = this.state.step ? this.state.step : 1
    return (
      <Layout>
        <Container>
          <Header color="secondary"/>
          <div className="spacer"></div>

          <Row>
            <Col md={8}>
              <div className="checkoutStageRow">
                <Row>
                  <div className={`flexCol ${activeStage == 1 ? 'activeStage': ''}`}>
                    <Link href={{ pathname: '/checkout', query: { step: 1 }}}>
                      <div className={`checkoutStageOne link `}>
                        1 <span className="stageLabel">Customer Info</span>
                        <div className="stageIndicator"></div>
                      </div>
                    </Link>
                  </div>
                  <div className={`flexCol ${activeStage == 2 ? 'activeStage': ''}`}>
                    <div className={`checkoutStageTwo link `}>
                      2 <span className="stageLabel">Shipping Info</span>
                      <div className="stageIndicator"></div>
                    </div>
                  </div>
                  <div className={`flexCol ${activeStage == 3 ? 'activeStage': ''}`}>
                    <div className={`checkoutStageThree link `}>
                      3 <span className="stageLabel">Payment Information</span>
                      <div className="stageIndicator"></div>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="shoppingCartBtnContainer">
                <Row>
                  <Col xs={12}>
                    <div className="shoppingCartBtn">
                      <Row>
                        <Col xs={10}>
                          View Shopping Cart
                        </Col>
                        <Col xs={2}>
                          <img src="/static/images/arrowFullRight.png" />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`tab ${activeStage == 1 ? 'activePage' : ''}`}>
                <CustomerInfo />
              </div>
              <div className={`tab ${activeStage == 2 ? 'activePage' : ''}`}>
                <ShippingInfo />
              </div>
              <div className={`tab ${activeStage == 3 ? 'activePage' : ''}`}>
                <PaymentInfo />
              </div>
              <div className="footerControls">
                <Row>
                  <Col xs={12} sm={12} md={8}>
                    <ul className="list-inline returnToShop">
                      <li className="list-inline-item align-top">
                        <img src="/static/images/arrowFullLeft.png" />
                      </li>
                      <li className="list-inline-item returnLink">
                        Return to Shop
                      </li>
                    </ul>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <div className="actionBtn">
                      Continue to Shipping
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="justify-content-end" md={4}>
              <CheckoutSidebar />
            </Col>
          </Row>
        </Container>
        <style jsx>{`

          .flexCol {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
            .stageLabel {
              @media (max-width: 767px) {
                display: none;
              }
            }
          }

          .flexCol.activeStage {
            @media (max-width: 767px) {
              -ms-flex: 0 0 50%;
              flex: 0 0 50%;
              max-width: 50%;
            }
            .stageLabel {
              display: inline;
            }
          }

          .shoppingCartBtnContainer {
            width: 100%;
            height: 68px;
            border-radius: 16px;
            border: 1px solid #F0F4F7;
            font-size: 20px;
            font-family: GothamRoundedBold;
            margin-top: 32px;
            -webkit-box-shadow: 0px 6px 6px 0px rgba(44,50,57, 0.2);
            -moz-box-shadow:    0px 6px 6px 0px rgba(44,50,57, 0.2);
            box-shadow:         0px 6px 6px 0px rgba(44,50,57, 0.2);
          }

          .shoppingCartBtn {
            padding-top: 18px;
          }

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
          .tab {
            display: none;
          }
          .activePage.tab {
            display: block
          }

          .returnToShop {
            @media (max-width: 767px) {
              text-align: center;
            }
          }
          .actionBtn {
            @media (max-width: 767px) {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 32px;
            }
          }
        `}
        </style>
        <style jsx global>{`
          .customerInfo{
            .col, .col-sm-12 {
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
