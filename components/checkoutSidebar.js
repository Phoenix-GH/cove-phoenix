import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Row, Col, Collapse } from 'reactstrap';
import Input from '../components/input';
import Radio from '../components/radio';
import s from './checkoutSidebar.scss';

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
    const { cart, products, payment } = this.props;
    const cartList = cart.cartItemIds.map((val) => {
      return (
        <li>
          {cart.quantityById[val]} {products[val].name}
        </li>
      )
    });
    return (
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
                  7" Touchscreen Control Panel
                </li>
                {cartList}
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
              <Radio label={[<span className={s.bold}>Pay In Full</span>]} checked={!this.state.finance} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div onClick={() => this.toggleFinance(true)}>
              <Radio label={[<span className={s.bold}>Finance 0% APR</span>]} checked={this.state.finance} />
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
      </div>
    );
  }
}

const mapStateToProps = ({ cart, products, payment }) => ({ cart, products, payment });

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSidebar);
