import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { selectMonitoringPlan } from '../redux/checkout/actions';
import Radio from '../components/radio';
import s from './coveClubMobile.scss';

class CoveClubMobile extends Component {
  selectSubscriptionType = (subscription) => {
    this.props.selectSubscriptionType(subscription);
  }

  render() {
    const { monitoringPlan } = this.props.checkout.planDetails;
    return (
      <Container className="coveClubMobile">
        <Row>
          <Col className="header">
            <h2>Cove members to Cove Pay</h2>
            <div className="titleSubText">
              Save $5/mo on your monitoring and use CoveClub EasyPay
               to pay your equipment off over time with 0% APR
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Row className="no-gutters">
              <Col md={6} />
              <Col md={6}>
                <Row>
                  <Col xs={6}>
                    <div className="coveClubTableHeader first">
                      <h6>Basic</h6>
                      <h5>$19.99</h5>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="coveClubTableHeader">
                      <h6>Premium</h6>
                      <h5>$29.99</h5>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeftFirst">
                <div className="colLeftContent">
                  24/7 Monitoring
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid firstCol row" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft">
                <div className="colLeftContent">
                  App Support
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft">
                <div className="colLeftContent">
                  Remote Control
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft">
                <div className="colLeftContent">
                  $5/month Loyalty Credit
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft">
                <div className="colLeftContent">
                  Warranty
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row" md={6}>
                <Col className="compareContent" xs={6}>
                  <div>3 years</div>
                </Col>
                <Col className="compareContent" xs={6}>
                  <div className="highlight">Lifetime</div>
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft">
                <div className="colLeftContent">
                  Live Voice Assistance
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft colLeftLast">
                <div className="colLeftContent">
                  Camera (something)
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col className="colMid row colMidLast" md={6}>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={6}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check icon" />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <h3>Select your plan</h3>
        <div className="selectionBox">
          <Row className="no-gutters">
            <Col xs={{ size: 2, offset: 1 }}>
              <div>
                <Radio
                  clickHandler={() => this.selectSubscriptionType('clubBasic')}
                  label={[<span className="bold" />]}
                  checked={monitoringPlan === 'clubBasic'}
                />
              </div>
            </Col>
            <Col className="optionLabel" xs={8}>
              Basic Cove Club
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col xs={{ size: 10, offset: 3 }}>
              <div className="highlight">
                $19.99/mo
              </div>
            </Col>
          </Row>
        </div>
        <div className="selectionBox">
          <Row className="no-gutters">
            <Col xs={{ size: 2, offset: 1 }}>
              <div>
                <Radio
                  clickHandler={() => this.selectSubscriptionType('clubPremium')}
                  label={[<span className="bold" />]}
                  checked={monitoringPlan === 'clubPremium'}
                />
              </div>
            </Col>
            <Col className="optionLabel" xs={8}>
              Premium Cove Club
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col xs={{ size: 10, offset: 3 }}>
              <div className="highlight">
                $29.99/mo
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
            <Link href="/checkout">
              <div className="selectBtn mx-auto">
                Select
              </div>
            </Link>
          </Col>
        </Row>
        <style jsx global>{s}</style>
      </Container>
    );
  }
}

CoveClubMobile.propTypes = {
  payment: PropTypes.object,
  selectSubscriptionType: PropTypes.func.isRequired,
  checkout: {
    planDetails: {},
  },
};

CoveClubMobile.defaultProps = {
  payment: null,
  checkout: PropTypes.object,
};

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = dispatch => ({
  selectMonitoringPlan : bindActionCreators(selectMonitoringPlan, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoveClubMobile);
