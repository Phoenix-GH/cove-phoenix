import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleFinance, selectSubscriptionType } from '../store'
import { Row, Col, Collapse } from 'reactstrap';
import Radio from '../components/radio';
import s from './coveClubMobile.scss';

class CoveClubMobile extends Component {
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
    return (
      <div className={s.mobileContainer}>
        <Row className={s.header}>
          <h2>Cove Members do CovePay</h2>
          <div className={s.headerSubText}>
            Save $5/mo on your monitoring and use CoveClub EasyPay
            to pay your equipment off over time with 0% APR
          </div>
        </Row>
        <div className={s.compareTable}>
          <Row>
            <Col className={s.colHeader} xs={6}>
              <h4 className={s.highlight} >
                Cove Club<br />$99
              </h4>
            </Col>
            <Col className={s.colHeader} xs={6}>
              <h4>Non-Club</h4>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col className={s.colLabel} xs={3}>
              <h5 className={s.highlight}>$19.99</h5>
              Basic
            </Col>
            <Col className={s.colLabel} xs={3}>
              <h5 className={s.highlight}>$29.99</h5>
              Premium
            </Col>
            <Col className={s.colLabel} xs={3}>
              <h5 className={s.alert}>$24.99</h5>
              Basic
            </Col>
            <Col className={s.colLabel} xs={3}>
              <h5 className={s.alert}>$34.99</h5>
              Premium
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              24/7 Monitoring
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              App Support
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              Remote Control
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              $5/month Loyalty Credit
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              Warranty
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  3 years
                </Col>
                <Col className={s.cell} xs={6}>
                  <span className={s.highlight}>Lifetime</span>
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  3 years
                </Col>
                <Col className={s.cell} xs={6}>
                  <span className={s.highlight}>Lifetime</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              Live Voice Assistant
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className={s.rowLabel} xs={12}>
              Camera
            </Col>
          </Row>
          <Row className={s.compareRow}>
            <Col xs={6}>
              <Row className="no-gutters">
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className={`${s.nonClubRow} no-gutters`}>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/x.svg" alt="x icon" />
                </Col>
                <Col className={s.cell} xs={6}>
                  <img src="/static/images/check.svg" alt="check icon" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
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
        <Collapse isOpen={payment.subscriptionType === 'clubBasic'}>
          <Row>
            <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
              <Radio
                clickHandler={() => this.toggleFinance()}
                label={[<span>Pay equipment in full</span>]}
                checked={!payment.finance}
              />
            </Col>
            <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
              <Radio
                clickHandler={() => this.toggleFinance()}
                label={[<span>Finance equipment at<br /> 0% APR for 60 months</span>]}
                checked={payment.finance}
              />
            </Col>
          </Row>
        </Collapse>
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
        <Collapse isOpen={payment.subscriptionType === 'clubPremium'}>
          <Row>
            <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
              <Radio
                clickHandler={() => this.toggleFinance()}
                label={[<span>Pay equipment in full</span>]}
                checked={!payment.finance}
              />
            </Col>
            <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
              <Radio
                clickHandler={() => this.toggleFinance()}
                label={[<span>Finance equipment at<br /> 0% APR for 60 months</span>]}
                checked={payment.finance}
              />
            </Col>
          </Row>
        </Collapse>
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
                $24.99/mo
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
                $34.99/mo
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
            <Link href="/checkout">
              <div className={`${s.selectBtn} mx-auto`}>
                Select
              </div>
            </Link>
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = ({ payment }) => ({ payment });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFinance: bindActionCreators(toggleFinance, dispatch),
    selectSubscriptionType: bindActionCreators(selectSubscriptionType, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoveClubMobile);
