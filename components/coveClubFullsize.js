import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import { toggleFinance, selectSubscriptionType } from '../store'
import Radio from '../components/radio';
import s from './coveClubFullsize.scss';


class CoveClubFullsize extends Component {
  constructor(props) {
    super(props);
    this.toggleFinance = this.toggleFinance.bind(this);
    this.selectSubscriptionType = this.selectSubscriptionType.bind(this);
  }

  toggleFinance() {
    this.props.toggleFinance();
  }

  selectSubscriptionType(subscription) {
    this.props.selectSubscriptionType(subscription);
  }

  render() {
    const { payment } = this.props;
    const coveClub = payment.subscriptionType === 'clubBasic' || payment.subscriptionType === 'clubPremium';
    let clubSelectBtn;
    let ncSelectionBtn;
    const activeSelect = (
      <Link href="/checkout">
        <div className={`${s.selectBtn} mx-auto`}>
          Select
        </div>
      </Link>
    );
    const disabledSelect = (
      <div className={`${s.selectBtn} ${s.disabled} mx-auto`}>
        Select
      </div>
    )
    clubSelectBtn = coveClub ? activeSelect : disabledSelect;
    ncSelectionBtn = (payment.subscriptionType && !coveClub) ? activeSelect : disabledSelect;
    return (
      <Container>
        <Row>
          <Col className={s.header}>
            <h2>Cove members to Cove Pay</h2>
            <div className={s.titleSubText}>
              Save $5/mo on your monitoring and use CoveClub EasyPay to pay your
              <br />equipment off over time with 0% APR
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col md={3} />
          <Col md={4}>
            <div className={`${s.coveClubTableHeader}  row`}>
              <Col xs={12}>
                <h4>Cove Club - $99</h4>
              </Col>
              <Col xs={6}>
                <h5>$19.99</h5>
                <p>Basic</p>
              </Col>
              <Col xs={6}>
                <h5>$29.99</h5>
                <p>Premium</p>
              </Col>
            </div>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <div className={`${s.coveNonClubTableHeader}  row`}>
              <Col xs={12}>
                <h4>Non-Club</h4>
              </Col>
              <Col xs={6}>
                <h5>$24.99</h5>
                <p>Basic</p>
              </Col>
              <Col xs={6}>
                <h5>$34.99</h5>
                <p>Premium</p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeftFirst} md={3}>
            <div className={s.colLeftContent}>
              24/7 Monitoring
            </div>
          </Col>
          <Col className={`${s.colMid} ${s.firstCol} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
          <Col className={`${s.colSpacer} ${s.firstCol}`} md={1} />
          <Col className={`${`${s.colRight} row`} ${s.firstCol}`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeft} md={3}>
            <div className={s.colLeftContent}>
              App Support
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeft} md={3}>
            <div className={s.colLeftContent}>
              Remote Control
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeft} md={3}>
            <div className={s.colLeftContent}>
              $5/month Loyalty Credit
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check mark icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeft} md={3}>
            <div className={s.colLeftContent}>
              Warranty
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <div>3 years</div>
            </Col>
            <Col className={s.compareContent} xs={6}>
              <div className={s.highlight}>Lifetime</div>
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <div>3 years</div>
            </Col>
            <Col className={s.compareContent} xs={6}>
              <div className={s.highlight}>
                Lifetime
              </div>
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={s.colLeft} md={3}>
            <div className={s.colLeftContent}>
              Live Voice Assistance
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className={`${s.colLeft} ${s.colLeftLast}`} md={3}>
            <div className={s.colLeftContent}>
              Camera
            </div>
          </Col>
          <Col className={`${s.colMid} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Col>
          <Col className={s.colSpacer} md={1} />
          <Col className={`${s.colRight} row`} md={4}>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.compareContent} xs={6}>
              <img className="img-fluid" src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Col>
        </Row>
        <Row className="no-gutters">

          <Col md={{ size: 4, offset: 3 }}>
            <div className={s.coveClubTableFooter}>
              <div className={s.selectionBox}>
                <Row className="no-gutters">
                  <Col xs={{ size: 2, offset: 1 }}>
                    <div>
                      <Radio
                        clickHandler={() => this.selectSubscriptionType('clubBasic')}
                        label={[<span className="bold" />]}
                        checked={payment.subscriptionType === 'clubBasic'}
                      />
                    </div>
                  </Col>
                  <Col className={s.optionLabel} xs={8}>
                    Basic
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col xs={{ size: 10, offset: 3 }}>
                    <div className={s.highlight}>
                      $19.99/mo
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={s.selectionBox}>
                <Row className="no-gutters">
                  <Col xs={{ size: 2, offset: 1 }}>
                    <div>
                      <Radio
                        clickHandler={() => this.selectSubscriptionType('clubPremium')}
                        label={[<span className="bold" />]}
                        checked={payment.subscriptionType === 'clubPremium'}
                      />
                    </div>
                  </Col>
                  <Col className={s.optionLabel} xs={8}>
                    Premium
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col xs={{ size: 10, offset: 3 }}>
                    <div className={s.highlight}>
                      $29.99/mo
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
                  <Radio
                    clickHandler={() => this.toggleFinance()}
                    label={[<span className={!coveClub ? s.disabled : ''}>Pay equipment in full</span>]}
                    checked={!payment.finance}
                    disabled={!coveClub}
                  />
                </Col>
                <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
                  <Radio
                    clickHandler={() => this.toggleFinance()}
                    label={[<span className={!coveClub ? s.disabled : ''}>Finance equipment at<br /> 0% APR for 60 months</span>]}
                    checked={payment.finance}
                    disabled={!coveClub}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  {clubSelectBtn}
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <div className={s.nonClubTableFooter}>
              <div className={s.selectionBox}>
                <Row className="no-gutters">
                  <Col xs={{ size: 2, offset: 1 }}>
                    <div>
                      <Radio
                        clickHandler={() => this.selectSubscriptionType('ncBasic')}
                        label={[<span className="bold" />]}
                        checked={payment.subscriptionType === 'ncBasic'}
                      />
                    </div>
                  </Col>
                  <Col className={s.optionLabel} xs={8}>
                    Basic
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col xs={{ size: 10, offset: 3 }}>
                    <div className={s.alert}>
                      $19.99/mo
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={s.selectionBox}>
                <Row className="no-gutters">
                  <Col xs={{ size: 2, offset: 1 }}>
                    <div>
                      <Radio
                        clickHandler={() => this.selectSubscriptionType('ncPremium')}
                        label={[<span className="bold" />]}
                        checked={payment.subscriptionType === 'ncPremium'}
                      />
                    </div>
                  </Col>
                  <Col className={s.optionLabel} xs={8}>
                    Premium
                  </Col>
                </Row>
                <Row className="no-gutters">
                  <Col xs={{ size: 10, offset: 3 }}>
                    <div className={s.alert}>
                      $29.99/mo
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col xs={12}>
                  {ncSelectionBtn}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

CoveClubFullsize.propTypes = {
  selectSubscriptionType: PropTypes.func.isRequired,
  toggleFinance: PropTypes.func.isRequired,
};

const mapStateToProps = ({ payment }) => ({ payment });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFinance: bindActionCreators(toggleFinance, dispatch),
    selectSubscriptionType: bindActionCreators(selectSubscriptionType, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoveClubFullsize);
