import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Input from '../components/input';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import AccountDataField from '../components/accountDataField';
import gs from '../components/styles.scss';
import s from './loyaltycredits.scss';

class LoyaltyCreditsPage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Loyalty Credits</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} style={{ position: 'relative' }}>
                <div className={gs.leftHighlightShort} />
                <Row>
                  <Col>
                    <AccountDataField label="Credits Earned" content="14" />
                    <AccountDataField label="Loyalty Credit Value" content="$5" />
                    <AccountDataField label="Balance Remaining" content="$70.00 " />
                  </Col>
                </Row>
                <Row className={s.leftActionRow}>
                  <Col className={gs.primaryLink} xs={6}>
                    Buy equip. with credits
                  </Col>
                  <Col className={gs.primaryLink} xs={6}>
                    Use credits for free month
                  </Col>
                </Row>
              </Col>
              <Col className={s.rightCol}>
                <Row>
                  <Col className={gs.primaryLink}>
                    Pay off equipment balance with loyalty credit
                  </Col>
                </Row>
                <Row>
                  <Col className={s.balanceLabel}>
                    Max amount - $70
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className={s.paymentInput}>
                    <Input label="Payment Amount" />
                  </Col>
                </Row>
                <Row className={s.actionRow}>
                  <Col xs={{ offset: 5, size: 2 }} className={s.cancelLink}>
                    <Link href="/account">
                      <div className={gs.mutedLink}>Cancel</div>
                    </Link>
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
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LoyaltyCreditsPage);
