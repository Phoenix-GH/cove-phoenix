import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Row, Col, Collapse } from 'reactstrap';
import Input from '../../components/input';
import Radio from '../../components/radio';
import s from './checkoutSidebar.scss';

class CheckoutSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  toggleCoupon = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { mobile } = this.props;
    const {
      productById,
      cartItemIds,
      planDetails,
      monitoringPlans,
    } = this.props.checkout;
    console.log('zz', monitoringPlans, planDetails, monitoringPlans[planDetails.monitoringPlan]);
    let equipmentTotal = 249.00;
    const cartList = cartItemIds.map((val) => {
      equipmentTotal += parseFloat(productById[val].price);
      return (
        <li key={productById[val].id}>
          {productById[val].quantity} {productById[val].display_name}
        </li>
      );
    });
    const planPrice = parseFloat(monitoringPlans[planDetails.monitoringPlan].price);
    const tax = planDetails.tax ? parseFloat(planDetails.tax) : 0.00;
    const containerClass = cx({
      mobileContainer: mobile,
      sidebarContainer: !mobile,
    });
    return (
      <div className={containerClass}>
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
                  7&Prime; Touchscreen Control Panel
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
        <div className="cartPricing">
          <Row>
            <Col xs={9}>
              Monthly Monitoring
            </Col>
            <Col xs={3}>
              <span className="bold">${planPrice}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              Equipment
            </Col>
            <Col xs={3}>
              <span className="bold">${equipmentTotal}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              Subtotal
            </Col>
            <Col xs={3}>
              <span className="bold">${equipmentTotal + planPrice}</span>
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
          <Row>
            <Col xs={9}>
              Tax
            </Col>
            <Col xs={3}>
              <span className="bold">{planDetails.tax || '-'}</span>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={{ size: 3, offset: 5 }}>
            <span className="totalLabel">Total</span>
          </Col>
          <Col xs={4}>
            <span className="totalPrice">${equipmentTotal + planPrice + tax}</span>
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
  mobile: PropTypes.bool,
  checkout: PropTypes.object,
};

CheckoutSidebar.defaultProps = {
  cart: [],
  products: [],
  mobile: false,
  checkout: {
    cartItemIds: [],
    productsById: {},
    monitoringPlans: {},
    planDetails: { monitoringPlan: 1 },
  },
};

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSidebar);
