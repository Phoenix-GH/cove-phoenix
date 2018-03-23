import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  }

  toggleCoupon = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFinance = (val) => {
    this.setState({ finance: val });
  }

  render() {
    const toggleImage = this.state.collapse ? 'arrowUp.png' : 'arrowDown.png';
    const { cart, products } = this.props;
    const cartList = cart.cartItemIds.map(val => (
      <li>
        {cart.quantityById[val]} {products[val].name}
      </li>
    ));
    return (
      <div className="sidebarContainer">
        <Row>
          <Col xs={12}>
            <h3>Shopping Cart</h3>
          </Col>
        </Row>
        <div className="equipmentPackage">
          <Row>
            <Col xs={12}>
              <p className="bold">
                Equipment Package
              </p>
              <h4>
                $499.99 or
                <br />
                $6.66/mo with $99 down
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <img src="/static/images/placeholderThumbSquare.png" alt="placeholder" />
            </Col>
            <Col xs={8}>
              <ul className="cartProductList">
                <li>
                  17&Prime; Touchscreen Control Panel
                </li>
                {cartList}
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
              <img src="/static/images/placeholderThumbSquare.png" alt="placeholder" />
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
                  <img src={`/static/images/${toggleImage}`} alt="toggle" />
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
            <Radio
              label={[<span className="bold">Pay In Full</span>]}
              checked={!this.state.finance}
              onClick={() => this.toggleFinance(false)}
              defaultChecked
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Radio
              label={[<span className="bold">Finance 0% APR</span>]}
              checked={this.state.finance}
              onClick={() => this.toggleFinance(true)}
            />
          </Col>
        </Row>
        <div className="cartPricing">
          <Row>
            <Col xs={9}>
              5 Year Prime Membership
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
          <Col xs={{ size: 3, offset: 5 }}>
            <span className="totalLabel">Total</span>
          </Col>
          <Col xs={4}>
            <span className="totalPrice">$128.31</span>
          </Col>
        </Row>
        <style jsx>{s}</style>
      </div>
    );
  }
}

CheckoutSidebar.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.object,
};

CheckoutSidebar.defaultProps = {
  cart: [],
  products: [],
};

const mapStateToProps = ({ cart, products, payment }) => ({ cart, products, payment });

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSidebar);
