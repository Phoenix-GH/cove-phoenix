import React, { Component } from 'react'
import { Row, Col, Collapse } from 'reactstrap'
import Input from '../components/input'
import Radio from '../components/radio'

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
        <style jsx>{`
          .sidebarContainer {
            padding: 20px 10px 20px 10px;
            -webkit-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            -moz-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            min-height: 500px;
            width: 368px;
            margin-bottom: 15px;
            border-radius: 16px;
            border: 1px solid #F0F4F7;
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
    )
  }

}

export default CheckoutSidebar
