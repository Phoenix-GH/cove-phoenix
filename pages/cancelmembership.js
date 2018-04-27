import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Input from '../components/input';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import gs from '../components/styles.scss';
import s from './cancelmembership.scss';

class CancelmembershipPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    }
  }
  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Cancel Membership</h1>
              </Col>
            </Row>
            <div className={`step1 ${s.stepContent} ${this.state.activeStep === 1 ? s.active : ''}`}>
              <Row>
                <Col md={6}>
                  <div style={{ position: 'relative' }}>
                    <Row className={s.leftHighlight}>
                      <Col xs="auto">
                        <p>Membership:</p>
                        <div className={s.bottomLeftRow}>Account Balance:</div>
                      </Col>
                      <Col>
                        <p className={s.bold}>Cove Club</p>
                        <div className={`${s.bold} ${s.bottomLeftRow}`}>$385.35</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className={s.rightCol}>
                  <Row>
                    <Col>
                      <span>Don't leave us yet!</span>
                      <h4 className={s.bold}>Get two months free on us</h4>
                    </Col>
                  </Row>
                  <Row className={s.actionRow}>
                    <Col xs="8" >
                      <span className={`${gs.primaryLink} ${s.cancelLink}`} onClick={() => { this.setState( {activeStep: 2 })}}>No thanks, cancel service <br /></span>
                      <div className={s.smallPrint}>Pay off $385.32 balance</div>
                    </Col>
                    <Col xs="4">
                      <div className={gs.actionBtn}>
                        Love To!
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className={`step2 ${s.stepContent} } ${this.state.activeStep === 2 ?  s.active : ''}`}>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col className={s.disclaimer}>
                      By canceling your monthly service, you will be required to
                      pay off the remaining balance of your finance agreement with Cove.
                      We immediately process that payment with the payment information we have on file.
                    </Col>
                  </Row>
                  <div style={{ position: 'relative' }}>
                    <div className={s.leftHighlight}>
                      <Row className="justify-content-between">
                        <Col xs="auto">
                          Monthly Payment:
                        </Col>
                        <Col xs="auto" className={s.bold}>
                          $8.54
                        </Col>
                      </Row>
                      <Row className={`justify-content-between ${s.summaryRow}`}>
                        <Col xs="auto">
                          Months Remain for Equipment Payments:
                        </Col>
                        <Col xs="auto" className={s.bold}>
                          45 months
                        </Col>
                      </Row>
                      <Row className={`justify-content-between ${s.summaryRow}`}>
                        <Col xs="auto">
                          Balance Remaining:
                        </Col>
                        <Col xs="auto" className={s.bold}>
                          $385.43
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col md={6} className={s.rightCol}>
                  <Row className={s.bottomSpacer}>
                    <Col>
                      Would you like to proceed?
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <div className={`${gs.primaryLink} ${s.cancelLink}`} onClick={() => {this.setState({ activeStep: 3 })}}>
                        Yes, cancel service and pay remaining balance.
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className={gs.actionBtn} style={{ maxWidth: '300px' }}>
                        No, Continue Service
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className={`step2 ${s.stepContent} ${this.state.activeStep === 3 ? s.active : ''}`}>
              <Row>
                <Col md={4}>
                  <p>Hate to see you go!</p>
                  <Input label="Password" type="password" />
                </Col>
                <Col md={{ offset: 5, size: 3 }}>
                  <div className={`${gs.actionBtn} ${gs.centerBlock} `}>
                    Confirm Cancelation
                  </div>
                  <div className={s.actionBtnDisclaimer}>
                    You'll process a $385.32 payment
                  </div>
                </Col>
              </Row>
            </div>
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

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(CancelmembershipPage);
