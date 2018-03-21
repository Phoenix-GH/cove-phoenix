import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { loadProducts } from '../actions';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import Input from '../components/input';
import CheckoutSidebar from '../components/checkoutSidebar';
import CustomerInfo from '../components/customerInfo';
import ShippingInfo from '../components/shippingInfo';
import PaymentInfo from '../components/paymentInfo';
import s from './checkout.scss';

class CheckoutPage extends Component {
  static async getInitialProps({ query }) {
    return { stage: query.stage };
  }

  constructor(props) {
    super(props);
    this.state = {
      customerInfo: {},
      shippingInfo: {},
      paymentInfo: {},
      account: {},
    }
  }
  
  onChangeHandler = (section, changeValue) => {
    console.log('onchange', section, changeValue)
    this.setState({ [section]: { ...this.state[section], ...changeValue } });
  }

  render() {
    console.log('stage', this.state)
    const activeStage = this.props.stage ? this.props.stage : 'customer';
    let nextLinkText = activeStage === 'payment' ? 'Complete Purchase' : 'Continue Shopping';
    let nextLink = '/shipping';
    if(activeStage === 'shipping') {
      nextLink = '/payment'
    }
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className="spacer" />
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className="checkoutStageRow">
                <Row>
                  <div className={`flexCol ${activeStage === 'customer' ? 'activeStage' : ''}`}>
                    <Link href={{ pathname: '/checkout', query: { step: 1 } }}>
                      <div className="checkoutStageOne link">
                        1 <span className="stageLabel">Customer Info</span>
                        <div className="stageIndicator" />
                      </div>
                    </Link>
                  </div>
                  <div className={`flexCol ${activeStage === 'shipping' ? 'activeStage' : ''}`}>
                    <div className={`${s.checkoutStageTwo} ${s.link}`}>
                      2 <span className="stageLabel">Shipping Info</span>
                      <div className="stageIndicator" />
                    </div>
                  </div>
                  <div className={`flexCol ${activeStage === 'payment' ? 'activeStage' : ''}`}>
                    <div className={`${s.checkoutStageThree} ${s.link}`}>
                      3 <span className="stageLabel">Payment Information</span>
                      <div className="stageIndicator" />
                    </div>
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
                            <img src="/static/images/arrowFullRight.png" />
                          </Col>
                        </Row>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`tab ${activeStage === 'customer' ? 'activePage' : ''}`}>
                <CustomerInfo  onChangeHandler={this.onChangeHandler} fields={this.state.customerInfo} />
              </div>
              <div className={`tab ${activeStage === 'shipping' ? 'activePage' : ''}`}>
                <ShippingInfo />
              </div>
              <div className={`tab ${activeStage === 'payment' ? 'activePage' : ''}`}>
                <PaymentInfo />
              </div>
              <div className="footerControls">
                <Row>
                  <Col xs={12} sm={12} md={8}>
                    <Link href="/products">
                      <ul className={`list-inline returnToShop`}>
                        <li className="list-inline-item align-top">
                          <img src="/static/images/arrowFullLeft.png" alt="arrow left" />
                        </li>
                        <li className={`list-inline-item returnLink`}>
                          Return to Shop
                        </li>
                      </ul>
                    </Link>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <Link href={`/checkout${nextLink}`}>
                      <div className="actionBtn">
                        {nextLinkText}
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="justify-content-end" md={4}>
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

const mapStateToProps = ({ cart, products }) => ({ cart, products})

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: bindActionCreators(loadProducts, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CheckoutPage);
