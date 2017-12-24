import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore, loadProducts } from '../store';
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

  render() {
    console.log('stage', this.props.stage)
    const activeStage = 'shipping';
    let nextLinkText = activeStage === 'payment' ? 'Complete Purchase' : 'Continue Shopping';
    let nextLink = '/shipping';
    if(activeStage === 'shipping') {
      nextLink = '/payment'
    }
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={s.spacer} />
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className={s.checkoutStageRow}>
                <Row>
                  <div className={`${s.flexCol} ${activeStage === 'customer' ? s.activeStage : ''}`}>
                    <Link href={{ pathname: '/checkout', query: { step: 1 } }}>
                      <div className={`${s.checkoutStageOne} ${s.link}`}>
                        1 <span className={s.stageLabel}>Customer Info</span>
                        <div className={s.stageIndicator} />
                      </div>
                    </Link>
                  </div>
                  <div className={`${s.flexCol} ${activeStage === 'shipping' ? s.activeStage : ''}`}>
                    <div className={`${s.checkoutStageTwo} ${s.link}`}>
                      2 <span className={s.stageLabel}>Shipping Info</span>
                      <div className={s.stageIndicator} />
                    </div>
                  </div>
                  <div className={`${s.flexCol} ${activeStage === 'payment' ? s.activeStage : ''}`}>
                    <div className={`${s.checkoutStageThree} ${s.link}`}>
                      3 <span className={s.stageLabel}>Payment Information</span>
                      <div className={s.stageIndicator} />
                    </div>
                  </div>
                </Row>
              </div>
              <div className={s.shoppingCartBtnContainer}>
                <Row>
                  <Col xs={12}>
                    <div className={s.shoppingCartBtn}>
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
              <div className={`${s.tab} ${activeStage === 'customer' ? s.activePage : ''}`}>
                <CustomerInfo />
              </div>
              <div className={`${s.tab} ${activeStage === 'shipping' ? s.activePage : ''}`}>
                <ShippingInfo />
              </div>
              <div className={`${s.tab} ${activeStage === 'payment' ? s.activePage : ''}`}>
                <PaymentInfo />
              </div>
              <div className={s.footerControls}>
                <Row>
                  <Col xs={12} sm={12} md={8}>
                    <Link href="/products">
                      <ul className={`list-inline ${s.returnToShop}`}>
                        <li className="list-inline-item align-top">
                          <img src="/static/images/arrowFullLeft.png" alt="arrow left" />
                        </li>
                        <li className={`list-inline-item ${s.returnLink}`}>
                          Return to Shop
                        </li>
                      </ul>
                    </Link>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <Link href={`${nextLink}`}>
                      <div className={s.actionBtn}>
                        {nextLinkText}
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="justify-content-end" md={4}>
              <div className={s.checkoutSidebar}>
                <CheckoutSidebar />
              </div>
            </Col>
          </Row>
        </Container>
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

export default withRedux({
  createStore: initStore,
  mapStateToProps,
  mapDispatchToProps,
  storeKey: 'rootRedux',
})(CheckoutPage);
