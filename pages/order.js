import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { loadProducts } from '../actions';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import CheckoutSidebar from '../components/checkoutSidebar';
import EquipmentType from '../components/equipmentType/equipmentType';
import BackButton from '../components/backButton/backButton';
import s from './order.scss';

class OrderPage extends Component {
  render() {
    const equipmentList = [
      {
        id: 1,
        title: 'Door Sensors',
        quantity: 3,
        list: [
          {
            id: 1,
            sensorName: 'Door 1',
            name: 'Door 1',
            hasInfo: true,
          },
          {
            id: 2,
            sensorName: 'Door 2',
            name: 'Door 2',
          },
          {
            id: 3,
            sensorName: 'Door 3',
            name: 'Door 3',
          },
        ],
      },
      {
        id: 2,
        title: 'Window Sensors',
        quantity: 2,
        list: [
          {
            id: 1,
            sensorName: 'Window 1',
            name: 'Window 1',
          },
          {
            id: 2,
            sensorName: 'Window 2',
            name: 'Window 2',
          },
        ],
      },
    ];
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className="spacer" />
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <div className="checkoutStageRow">
                <Row>
                  <div className="flexCol activeStage">
                    <Link href={{ pathname: '/checkout', query: { step: 1 } }}>
                      <div className="checkoutStageOne link">
                        <span className="stageLabel">Order Confirmation</span>
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
                            View Order Summary
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
              <div className="orderConfirmation">
                <Col xs={12} sm={12} md={12}>
                  <h3>Order Confirmation</h3>
                  <h4>You&apos;re almost done, please name your sensors.</h4>
                  <p>Naming your sensors now makes the set up process much quicker and easier.</p>
                  <h3 className="extendedTitle">Equipment Type</h3>
                  <Row>
                    <Col xs={12} md={8}>
                      {
                        equipmentList.map(item => (
                          <EquipmentType
                            key={item.id}
                            title={item.title}
                            quantity={item.quantity}
                            list={item.list}
                          />
                        ))
                      }
                    </Col>
                  </Row>
                </Col>
              </div>

              <div className="footerControls">
                <Col xs={12}>
                  <Row>
                    <div className="returnColumn">
                      <BackButton title="Continue Shopping" link="/checkout" />
                    </div>
                    <div className="continueColumn">
                      <Link href="#name-sensors">
                        <div className="actionBtn">
                          Name Sensors
                        </div>
                      </Link>
                    </div>
                  </Row>
                </Col>
              </div>
            </Col>
            <Col className="justify-content-end" lg={4}>
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

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = dispatch => ({
  loadProducts: bindActionCreators(loadProducts, dispatch),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(OrderPage);
