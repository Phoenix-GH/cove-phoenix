import React, { Component } from 'react'
import Link from 'next/link'
import { Row, Col, Collapse } from 'reactstrap'
import Input from '../components/input'
import Radio from '../components/radio'
import s from './shoppingCartMobile.scss'

class CheckoutSidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapse: false,
      finance: false,
    }
    this.toggleCoupon = this.toggleCoupon.bind(this);
    this.toggleFinance = this.toggleFinance.bind(this);
  }

  toggleCoupon() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFinance(val) {
    this.setState({ finance: val });
  }

  render() {
    const toggleImage = this.state.collapse ? 'arrowUp.png' : 'arrowDown.png';
    return (
      <div>
        <div className={s.mobileCartHeader}>
          <Link href="/checkout">
            <ul className="list-inline">
              <li className="list-inline-item align-top">
                <img src="/static/images/arrowFullLeft.png" />
              </li>
              <li className="list-inline-item">
                Return to Customer Info
              </li>
            </ul>
          </Link>
        </div>
        <div className="sidebarContainer">
          <div className="equipmentPackage">
            <Row>
              <Col xs={12}>
                <h3>Shopping Cart</h3>
                <p className="bold">
                  Equipment Package
                </p>
                <h4>
                  $499.99 or $8.33/mo
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <img src="/static/images/placeholderThumbSquare.png" />
              </Col>
              <Col xs={8}>
                <ul className="cartProductList">
                  <li>
                    17" Touchscreen Control Panel
                  </li>
                  <li>
                    3 Doors
                  </li>
                  <li>
                    2 Motions
                  </li>
                  <li>
                    1 Smoke
                  </li>
                  <li>
                    2 Key Fobs
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="monthlyService">
            <Row>
              <Col xs={12}>
                <p className="bold">
                  Monthly Monitoring Service
                </p>
                <h4>
                  $19.99
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <img src="/static/images/placeholderThumbSquare.png" />
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12}>
              <div className="coupon">
                <Row>
                  <Col xs={10}>
                    <p className="bold">
                      Have a Coupon
                    </p>
                  </Col>
                  <Col xs={2} onClick={this.toggleCoupon}>
                    <img src={`/static/images/${toggleImage}`} />
                  </Col>
                </Row>
                <Collapse isOpen={this.state.collapse}>
                  <Row>
                    <Col xs={12}>
                      <Input label="Coupon Code" />
                    </Col>
                  </Row>
                </Collapse>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div onClick={()=> this.toggleFinance(false)}>
                <Radio label={[<span className='bold'>Pay In Full</span>]} checked={!this.state.finance}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div  onClick={() => this.toggleFinance(true)}>
                <Radio label={[<span className='bold'>Finance 0% APR</span>]} checked={this.state.finance}/>
              </div>
            </Col>
          </Row>
          <div className="cartPricing">
            <Row>
              <Col xs={9}>
                5 year Prime Subscription
              </Col>
              <Col xs={3}>
                <span className="bold">$99.99</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Monthly Monitoring
              </Col>
              <Col xs={3}>
                <span className="bold">$19.99</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Equipment Payment
              </Col>
              <Col xs={3}>
                <span className="bold">$8.33</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Subtotal
              </Col>
              <Col xs={3}>
                <span className="bold">$128.31</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Shipping
              </Col>
              <Col xs={3}>
                <span className="bold">Free</span>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={{ size:3, offset: 5 }}>
              <span className="totalLabel">Total</span>
            </Col>
            <Col xs={4}>
              <span className="totalPrice">$128.31</span>
            </Col>
          </Row>
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
              <div className="actionBtn mx-auto">
                Continue to Shipping
              </div>
            </Col>
          </Row>
          <style jsx>{`
            .sidebarContainer {
              padding: 20px 10px 20px 10px;
              min-height: 500px;
              margin-bottom: 15px;
              margin-left: auto;
              h3 {
                font-family: GothamRoundedBold;
                font-size: 24px;
                margin-bottom:30px;
              }
              h4 {
                font-family: GothamRoundedBold;
                font-size: 20px;
                color: #00B19A;
              }
            }
            .cartProductList {
              list-style: none;
              font-size: 12px;
              padding-left: 0px;
            }
            .equipmentPackage {
              margin-bottom: 30px;
            }
            .monthlyService {
              margin-bottom: 30px;
            }
            .coupon {
              border-top: 1px solid #00B19A;
              border-bottom: 1px solid #00B19A;
              padding-top: 10px;
              margin-bottom: 30px;
            }
            .cartPricing {
              margin-top: 30px;
              margin-bottom: 20px;
              font-size: 14px;
              border-bottom: 1px solid #00B19A;
              .row {
                margin-bottom: 15px;
              }
            }
            .totalLabel {
              font-family: GothamRoundedLight;
              font-size: 20px;
            }
            .totalPrice {
              font-family: GothamRoundedBold;
              font-size: 20px;
            }
            .bold {
              font-weight: bold;
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
            .returnLink {
              font-family: GothamRoundedBold;
              font-size: 16px;
              color: #8A9097;
              padding-top: 3px;
            }
            .returnToShop {
              margin-top: 32px;
              @media (max-width: 767px) {
                text-align: center;
              }
            }
        `}
        </style>
        <style jsx global>{`
          .cartPricing {
            .row {
              margin-bottom: 15px;
            }
          }
        `}
        </style>
        </div>
      </div>
    )
  }

}

export default CheckoutSidebar
