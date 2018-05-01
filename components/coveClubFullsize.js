import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { selectMonitoringPlan } from '../redux/checkout/actions';
import SelectableButton from '../components/selectableButton/selectableButton';
import BackButton from '../components/backButton/backButton';
import styles from './coveClubFullsize.scss';

class CoveClubFullsize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlan: '',
    };
  }

  selectSubscriptionType = (subscription) => {
    this.props.selectSubscriptionType(subscription);
  }

  selectPlan = (plan) => {
    this.setState({ selectedPlan: plan });
  }

  render() {
    const { selectedPlan } = this.state;
    const coveBasic = selectedPlan === 'basicMonth' || selectedPlan === 'basicYear';
    const covePremium = selectedPlan === 'premiumMonth' || selectedPlan === 'premiumYear';
    const Select = monitoringPlan => (
      <button
        className="selectBtn mx-auto"
        onClick={() => {
          this.props.selectMonitoringPlan(monitoringPlan);
          Router.push({ pathname: '/checkout' });
          }
        }
      >
        Select
      </button>
    );
    const disabledSelect = (
      <div className="selectBtn disabled mx-auto">
        Select
      </div>
    );
    const basicSelectBtn = coveBasic ? activeSelect : disabledSelect;
    const premiumSelectBtn = covePremium ? activeSelect : disabledSelect;
    return (
      <Container className="coveClubFull">
        <Row>
          <Col className="header">
            <h2>Select the plan that fits your needs</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Row className="no-gutters">
              <Col md={4} />
              <Col md={8}>
                <Row>
                  <Col md={5}>
                    <div className="coveClubTableHeader">
                      <h3>Basic</h3>
                      <h4>$24.99/mo</h4>
                    </div>
                  </Col>
                  <Col md={{ size: 5, offset: 2 }}>
                    <div className="coveClubTableHeader">
                      <h3>Value</h3>
                      <h4>$34.99/mo</h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeftFirst" md={4}>
                <div className="colLeftContent">
                  24/7 Monitoring
                </div>
              </Col>
              <Col className="colMid firstCol row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft" md={4}>
                <div className="colLeftContent">
                  Cove Live Assist
                </div>
              </Col>
              <Col className="colMid row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft" md={4}>
                <div className="colLeftContent">
                  Cove InstaText
                </div>
              </Col>
              <Col className="colMid row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft" md={4}>
                <div className="colLeftContent">
                  iOS/Android App
                </div>
              </Col>
              <Col className="colMid row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check mark icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft" md={4}>
                <div className="colLeftContent">
                  Warranty
                </div>
              </Col>
              <Col className="colMid row" md={8}>
                <Col className="compareContent" xs={5}>
                  <div>3 years</div>
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <div className="highlight">Lifetime</div>
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft colLeftLast" md={4}>
                <div className="colLeftContent">
                  $5/month Loyalty Credit
                </div>
              </Col>
              <Col className="colMid colMidLast row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col md={4}>
                <div className="backButton">
                  <BackButton link="/products" />
                </div>
              </Col>
              <Col className="row" md={8}>
                <Col md={5}>
                  <div className="coveClubTableFooter">
                    <Row className="buttonRow">
                      <Col xs={12}>
                        {Select(1)}
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={{ size: 5, offset: 2 }}>
                  <div className="coveClubTableFooter">
                    <Row className="buttonRow">
                      <Col xs={12}>
                        {Select(2)}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <style jsx global>{styles}</style>
      </Container>
    );
  }
}

CoveClubFullsize.propTypes = {
  selectMonitoringPlan: PropTypes.func.isRequired,
};

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = dispatch => ({
  selectMonitoringPlan: bindActionCreators(selectMonitoringPlan, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoveClubFullsize);
