import React, { Component } from 'react';
import Link from 'next/link';
import { Row, Col, Collapse } from 'reactstrap';
import Input from '../components/input';
import Radio from '../components/radio';
import s from './shoppingCartMobile.scss';

class CheckoutSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      finance: false,
    };
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
        <div className={s.sidebarContainer}>
          <div className={s.equipmentPackage}>
            <Row>
              <Col xs={12}>
                <h3>Shopping Cart</h3>
                <p className={s.bold}>
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
                <ul className={s.cartProductList}>
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
          <div className={s.monthlyService}>
            <Row>
              <Col xs={12}>
                <p className={s.bold}>
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
              <div className={s.coupon}>
                <Row>
                  <Col xs={10}>
                    <p className={s.bold}>
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
              <div onClick={() => this.toggleFinance(false)}>
                <Radio label={[<span className="bold">Pay In Full</span>]} checked={!this.state.finance} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div onClick={() => this.toggleFinance(true)}>
                <Radio label={[<span className="bold">Finance 0% APR</span>]} checked={this.state.finance} />
              </div>
            </Col>
          </Row>
          <div className={s.cartPricing}>
            <Row>
              <Col xs={9}>
                5 year Prime Subscription
              </Col>
              <Col xs={3}>
                <span className={s.bold}>$99.99</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Monthly Monitoring
              </Col>
              <Col xs={3}>
                <span className={s.bold}>$19.99</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Equipment Payment
              </Col>
              <Col xs={3}>
                <span className={s.bold}>$8.33</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Subtotal
              </Col>
              <Col xs={3}>
                <span className={s.bold}>$128.31</span>
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                Shipping
              </Col>
              <Col xs={3}>
                <span className={s.bold}>Free</span>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={{ size: 3, offset: 5 }}>
              <span className={s.totalLabel}>Total</span>
            </Col>
            <Col xs={4}>
              <span className={s.totalPrice}>$128.31</span>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <ul className={`list-inline ${s.returnToShop}`}>
                <li className="list-inline-item align-top">
                  <img src="/static/images/arrowFullLeft.png" />
                </li>
                <li className={`list-inline-item ${s.returnLink}`}>
                  Return to Shop
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className={`${s.actionBtn} mx-auto`}>
                Continue to Shipping
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CheckoutSidebar;
