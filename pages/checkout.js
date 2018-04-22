import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';
import withRedux from 'next-redux-wrapper';
import { change } from 'redux-form';
import initStore from '../store';
import { createAccountR, createOrderR, completeOrderR } from '../redux/checkout/routine';
import { tokenR } from '../redux/user/routine';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import Loader from '../components/elements/loader';
import CheckoutSidebar from '../components/checkoutSidebar/checkoutSidebar';
import CustomerInfo from '../components/reduxForms/customerInfo';
import ShippingInfo from '../components/reduxForms/shippingInfo';
import PaymentInfo from '../components/reduxForms/paymentInfo';
import s from './checkout/checkout.scss';

class CheckoutPage extends Component {
  static async getInitialProps({ store, query }) {
    store.dispatch(tokenR.trigger());
    return { stage: query.stage };
  }

  constructor(props) {
    super(props);
    this.state = {
      customer1: {},
      monitorAddress: {},
      ec1: {},
      shipAddress: {},
      createOrderInfo: {
        warrantyId: 0,
        shippingMethodId: 0,
      },
      orderValue: {},
      token: '',
      guid: '',
      verifyContact: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const activeStage = this.props.stage ? this.props.stage : 'customer';
  }

  onChangeHandler = (section, changeValue) => {
    this.setState({ [section]: { ...this.state[section], ...changeValue } });
    if (section === 'ec1' || section === 'monitorAddress') {
      //this.verifyContact();
    }
  }

  handleNextClick = () => {
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    console.log('activestage', activeStage)
    if (activeStage === 'customer') {
      this.props.createAccountR();
    } else if (activeStage === 'shipping') {
      this.props.createOrderR();
    } else if (activeStage === 'payment') {
      this.props.completeOrderR();
    }
  }

  createOrder = () => {
    const { guid, createOrderInfo, shippingAddress } = this.state;
    const orderRequest = {
      accountGuid: guid,
      shippingMethodId: createOrderInfo.shippingMethodId,
      subscriptionId: createOrderInfo.subscriptionId,
      warrantyId: createOrderInfo.warrantyId,
      shippingAddress,
      items: [
        {
          itemId: 'string',
          qty: 1,
          name: 'Motion Sensor',
          typeId: 2,
        },
      ],
    };
    this.props.createOrder({
      data: orderRequest,
      success: (res) => {
        if (res.successful) {
          this.props.url.push('/checkout?stage=payment');
        }
      },
      fail: () => {
      },
    });
  }

  completeOrder = () => {
    const { orderValue, guid } = this.state;
    const { ...expiry } = orderValue.expiry.split('/')[0];
    const order = {
      creditCard: {
        number: orderValue.number,
        expMonth: expiry[0],
        expYear: expiry[1],
      },
      total: '355.00',
      accountGuid: guid,
    };
    this.props.completeOrder({
      data: order,
      success: (res) => {
        if (res.successful) {
          this.props.url.push('/order');
        }
      },
      fail: () => {
      },
    });
  }

  render() {
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    let nextLinkText = 'Continue to Shipping Method';
    let previousLinkText = 'Return to Plan Type';
    if (activeStage === 'shipping') {
      nextLinkText = 'Continue to Payment Info';
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
    console.log('loading', this.props.checkout.checkout.loading)
    const loaderClass = cx({'d-none': !this.props.checkout.checkout.loading })
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
                    createAccountR={this.props.createAccountR}
                    formData={this.props.form.checkout_customer}
                  />
                </div>
                <div className={shippingPageClassName}>
                  <ShippingInfo
                    onChangeHandler={this.onChangeHandler}
                    formData={this.props.form}
                  />
                </div>
                <div className={paymentPageClassName}>
                  <PaymentInfo
                    onChangeHandler={this.onChangeHandler}
                  />
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
                          (
                            <button onClick={() => this.handleNextClick()}>
                              <div className="actionBtn">
                                {nextLinkText}
                              </div>
                            </button>
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
        <Loader className={loaderClass} />
        <style jsx>{s}</style>
      </Layout>
    );
  }
}

CheckoutPage.propTypes = {
  stage: PropTypes.string,
  createAccount: PropTypes.func.isRequired,
  authSession: PropTypes.func.isRequired,
  verifyContact: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  completeOrder: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  form: PropTypes.object,
};

CheckoutPage.defaultProps = {
  stage: 'customer',
  form: {
    customer_checkout: {
      values: {},
    },
  },
};

const mapStateToProps = ({
  cart,
  products,
  payment,
  customer,
  checkout,
  session,
  auth,
  form,
}) => ({
  cart,
  products,
  payment,
  customer,
  checkout,
  session,
  auth,
  form,
});

const mapDispatchToProps = {
  createAccountR,
  createOrderR,
  completeOrderR,
  change,
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CheckoutPage);
