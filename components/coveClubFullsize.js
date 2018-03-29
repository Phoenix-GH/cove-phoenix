import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { toggleFinance, selectSubscriptionType } from '../actions';
import SelectableButton from '../components/selectableButton/selectableButton';
import YellowBoxesRow from '../components/yellowBoxesRow/yellowBoxesRow';
import BackButton from '../components/backButton/backButton';
import styles from './coveClubFullsize.scss';

class CoveClubFullsize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlan: '',
    };
  }

  toggleFinance = () => {
    this.props.toggleFinance();
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
    const activeSelect = (
      <Link href="/checkout">
        <div className="selectBtn mx-auto">
          Select
        </div>
      </Link>
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
            <h2>Cove members to Cove Pay</h2>
            <div className="titleSubText">
              Finacing available at 0% APR for 60 months.
            </div>
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
                      <h4>$19.99</h4>
                      <h5>or $199 per year</h5>
                    </div>
                  </Col>
                  <Col md={{ size: 5, offset: 2 }}>
                    <div className="coveClubTableHeader">
                      <h3>Premium</h3>
                      <h4>$29.99</h4>
                      <h5>or $199 per year</h5>
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
                  App Support
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
                  Remote Control
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
                  $5/month Loyalty Credit
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
              <Col className="colLeft" md={4}>
                <div className="colLeftContent">
                  Live Voice Assistance
                </div>
              </Col>
              <Col className="colMid row" md={8}>
                <Col className="compareContent" xs={5}>
                  <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className="compareContent" xs={{ size: 5, offset: 2 }}>
                  <img className="img-fluid" src="/static/images/check.png" alt="check icon" />
                </Col>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col className="colLeft colLeftLast" md={4}>
                <div className="colLeftContent">
                  Camera (something)
                </div>
              </Col>
              <Col className="colMid row colMidLast" md={8}>
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
                        <SelectableButton
                          title="$19.99 per month"
                          isSelected={selectedPlan === 'basicMonth'}
                          onClick={() => this.selectPlan('basicMonth')}
                        />
                      </Col>
                    </Row>
                    <Row className="buttonRow">
                      <Col xs={12}>
                        <SelectableButton
                          title="$199 per year"
                          isSelected={selectedPlan === 'basicYear'}
                          onClick={() => this.selectPlan('basicYear')}
                        />
                      </Col>
                    </Row>
                    <Row className="buttonRow">
                      <Col xs={12}>
                        {basicSelectBtn}
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={{ size: 5, offset: 2 }}>
                  <div className="coveClubTableFooter">
                    <Row className="buttonRow">
                      <Col xs={12}>
                        <SelectableButton
                          title="$29.9 per month"
                          isSelected={selectedPlan === 'premiumMonth'}
                          onClick={() => this.selectPlan('premiumMonth')}
                        />
                      </Col>
                    </Row>
                    <Row className="buttonRow">
                      <Col xs={12}>
                        <SelectableButton
                          title="$299 per year"
                          isSelected={selectedPlan === 'premiumYear'}
                          onClick={() => this.selectPlan('premiumYear')}
                        />
                      </Col>
                    </Row>
                    <Row className="buttonRow">
                      <Col xs={12}>
                        {premiumSelectBtn}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <YellowBoxesRow className="footerRow" />
        <style jsx global>{styles}</style>
      </Container>
    );
  }
}

CoveClubFullsize.propTypes = {
  selectSubscriptionType: PropTypes.func.isRequired,
  toggleFinance: PropTypes.func.isRequired,
};

const mapStateToProps = ({ payment }) => ({ payment });

const mapDispatchToProps = dispatch => ({
  toggleFinance: bindActionCreators(toggleFinance, dispatch),
  selectSubscriptionType: bindActionCreators(selectSubscriptionType, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoveClubFullsize);
