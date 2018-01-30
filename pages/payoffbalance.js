import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore, loadProducts } from '../store';
import Input from '../components/input';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import AccountDataField from '../components/accountDataField';
import gs from '../components/styles.scss';
import s from './payoffbalance.scss';

class PayoffBalancePage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Pay off Balance</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} style={{ position: 'relative' }}>
                <div className={gs.leftHighlightShort} />
                <Row>
                  <Col>
                    <AccountDataField label="Monthly Payment For Equipment" content="$8.56" />
                    <AccountDataField label="Months Remaining" content="45 Months" />
                    <AccountDataField label="Balance Remaining" content="$385.82" />
                  </Col>
                </Row>
                <Row>
                  <Col className={gs.text}>
                    Make a Payment
                  </Col>
                </Row>
              </Col>
              <Col className={s.rightCol}>
                <Row>
                  <Col className={gs.primaryLink}>
                    Pay off balance
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Input label="Payment Amount" />
                  </Col>
                </Row>
                <Row className={s.actionRow}>
                  <Col xs={{ offset: 5, size: 2 }} className={s.cancelLink}>
                    <div className={gs.mutedLink}>Cancel</div>
                  </Col>
                  <Col xs={5}>
                    <div className={gs.actionBtnInverse} style={{ maxWidth: '350px' }}>
                      Pay
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}


const mapStateToProps = ({ cart, products }) => ({ cart, products});

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
})(PayoffBalancePage);
