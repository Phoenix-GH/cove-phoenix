import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import cx from 'classnames';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { loadProducts } from '../actions';
import { createAccount, createOrder, completeOrder, session } from '../action';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import CheckoutSidebar from '../components/checkoutSidebar/checkoutSidebar';
import CustomerInfo from './checkout/customerInfo';
import ShippingInfo from './checkout/shippingInfo';
import PaymentInfo from './checkout/paymentInfo';
import s from './checkout/checkout.scss';

class CheckoutPage extends Component {
  static async getInitialProps({ store, query }) {
    store.dispatch({ type: 'SESSION' });
    return { stage: query.stage };
  }

  constructor(props) {
    super(props);
    this.state = {
      customer1: {},
      monitorAddress: {},
      ec1: {},
      shipAddress: {},
      createOrder: {},
      orderValue: {},
      session: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    const { checkout } = this.props;
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    if (activeStage === 'shipping') {
      if (nextProps.session.data !== this.props.session.data) {
        this.setState({ session: this.props.session.data });
        localStorage.setItem('token', this.props.session.data.message);
        this.createAccount();
      }
      if (nextProps.checkout.createAccount.data !== checkout.createAccount.data) {
        this.createOrder();
      }
      if (nextProps.checkout.createOrder.data !== checkout.createOrder.data) {
        this.props.url.push('/checkout?stage=payment');
      }
    } else if (activeStage === 'payment') {
      if (nextProps.checkout.completeOrder.data !== checkout.completeOrder.data) {
        this.props.url.push('/order');
      }
    }
  }

  onChangeHandler = (section, changeValue) => {
    this.setState({ [section]: { ...this.state[section], ...changeValue } });
  }

  handleNextClick = () => {
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    if (activeStage === 'shipping') {
      this.props.session();
    }
    if (activeStage === 'payment') {
      this.props.completeOrder(this.state);
    }
  }

  createAccount = () => {
    const {
      customer1,
      monitorAddress,
      shipAddress,
      ec1,
    } = this.state;
    const request = {
      customer1,
      monitorAddress,
      shipAddress,
      ec1,
    };
    this.props.createAccount(request);
  }

  createOrder = () => {
    this.props.createOrder(this.state.createOrder);
  }

  completeOrder = () => {
    const { orderValue } = this.state;
    const { ...expiry } = orderValue.expiry.split('/')[0];
    const order = {
      creditCard: {
        number: orderValue.number,
        expMonth: expiry[0],
        expYear: expiry[1],
      },
      total: '355.00',
      accountGuid: 'd4d8df04-746e-498e-bbf3-1e45f83f4d6a',
    };
    this.props.completeOrder(order);
  }

  render() {
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    let nextLinkText = 'Continue to Shipping Method';
    let previousLinkText = 'Return to Plan Type';
    let nextLink = 'shipping';
    if (activeStage === 'shipping') {
      nextLinkText = 'Continue to Payment Info';
      nextLink = 'payment';
      previousLinkText = 'Return to Customer Info';
    } else if (activeStage === 'payment') {
      nextLinkText = 'Complete Purchase';
      previousLinkText = 'Return to Shipping Info';
    }

    const customerStageClassName = cx('flexCol', {
      activeStage: activeStage === 'customer',
    });
    const shippingStageClassName = cx('flexCol', {
      activeStage: activeStage === 'shipping',
    });
    const paymentStageClassName = cx('flexCol', {
      activeStage: activeStage === 'payment',
    });
    const customerPageClassName = cx('tab', {
      activePage: activeStage === 'customer',
    });
    const shippingPageClassName = cx('tab', {
      activePage: activeStage === 'shipping',
    });
    const paymentPageClassName = cx('tab', {
      activePage: activeStage === 'payment',
    });

    return (
      <Layout>
        <Container className="checkoutContainer">
          <Header color="secondary" />
          <div className="spacer" />
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <div className="checkoutLeft">
                <div className="checkoutStageRow">
                  <Row>
                    <div className={customerStageClassName}>
                      <Link href={{ pathname: '/checkout', query: { stage: 'customer' } }}>
                        <div className="checkoutStageOne link">
                          1 <span className="stageLabel">Customer Info</span>
                          <div className="stageIndicator" />
                        </div>
                      </Link>
                    </div>
                    <div className={shippingStageClassName}>
                      <Link href={{ pathname: '/checkout', query: { stage: 'shipping' } }}>
                        <div className={`${s.checkoutStageTwo} ${s.link}`}>
                          2 <span className="stageLabel">Shipping Info</span>
                          <div className="stageIndicator" />
                        </div>
                      </Link>
                    </div>
                    <div className={paymentStageClassName}>
                      <Link href={{ pathname: '/checkout', query: { stage: 'payment' } }}>
                        <div className={`${s.checkoutStageThree} ${s.link}`}>
                          3 <span className="stageLabel">Payment Information</span>
                          <div className="stageIndicator" />
                        </div>
                      </Link>
                    </div>
                  </Row>
                </div>
                <div className="shoppingCartBtnContainer">
                  <Row>
                    <Col xs={12}>
                      <div className="shoppingCartBtn">
                        <Link href="/cart">
                          <Row>
                            <Col xs={10}>
                              View Shopping Cart
                            </Col>
                            <Col xs={2}>
                              <img src="/static/images/arrowFullRight.png" alt="arrow" />
                            </Col>
                          </Row>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={customerPageClassName}>
                  <CustomerInfo
                    onChangeHandler={this.onChangeHandler}
                    fields={this.state.customerInfo}
                  />
                </div>
                <div className={shippingPageClassName}>
                  <ShippingInfo />
                </div>
                <div className={paymentPageClassName}>
                  <PaymentInfo />
                </div>
                <div className="footerControls">
                  <Col xs={12}>
                    <Row>
                      <div className="returnColumn">
                        <Link href="/products">
                          <ul className="list-inline returnToShop">
                            <li className="list-inline-item align-top">
                              <img src="/static/images/arrowFullLeft.png" alt="arrow left" />
                            </li>
                            <li className="list-inline-item returnLink">
                              {previousLinkText}
                            </li>
                          </ul>
                        </Link>
                      </div>
                      <div className="continueColumn">
                        {
                          (activeStage === 'payment' || activeStage === 'shipping') && (
                            <button onClick={() => this.handleNextClick()}>
                              <div className="actionBtn">
                                {nextLinkText}
                              </div>
                            </button>
                          )
                        }
                        {
                          !(activeStage === 'payment' || activeStage === 'shipping') && (
                            <Link href={{ pathname: '/checkout', query: { stage: nextLink } }}>
                              <div className="actionBtn">
                                {nextLinkText}
                              </div>
                            </Link>
                          )
                        }
                      </div>
                    </Row>
                  </Col>
                </div>
              </div>
            </Col>
            <Col className="justify-content-end" lg={{ size: 4, offset: 1 }}>
              <div className="checkoutSidebar">
                <CheckoutSidebar />
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{s}</style>
      </Layout>
    );
  }
}

CheckoutPage.propTypes = {
  stage: PropTypes.string,
  createAccount: PropTypes.func.isRequired,
  session: PropTypes.func.isRequired,
  checkout: PropTypes.object.isRequired,
  createOrder: PropTypes.func.isRequired,
  completeOrder: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
};

CheckoutPage.defaultProps = {
  stage: 'customer',
};

const mapStateToProps = ({
  cart,
  products,
  payment,
  customer,
  checkout,
}) => ({
  cart,
  products,
  payment,
  customer,
  checkout,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: bindActionCreators(loadProducts, dispatch),
  session: () => dispatch(session()),
  createAccount: data => dispatch(createAccount(data)),
  createOrder: data => dispatch(createOrder(data)),
  completeOrder: data => dispatch(completeOrder(data)),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CheckoutPage);
