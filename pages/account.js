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
import s from './account.scss';

class AccountPage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={s.accountContainer}>
            <Row>
              <Col>
                <h1 className={s.pageHeader}>Account</h1>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <h3>Membership and Billing</h3>
                <div className={`${s.actionBtn} ${s.firstBtn}`}>
                  Change Membership
                </div>
                <Link href="/account/cancel">
                  <div className={s.actionBtn}>
                    Cancel Membership
                  </div>
                </Link>
              </Col>
              <Col md={8} xs={12} sm={12}>
                <Row>
                  <Col>
                    <AccountDataField label="Email" content="jordan.h@covesmart.com" />
                  </Col>
                  <Col>
                    <Link href="/account/email/">
                      <div className={s.accountLink}>Change email</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Password" content="**************" />
                  </Col>
                  <Col>
                    <Link href="/account/password">
                      <div className={s.accountLink}>Change password</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Phone" content="(801) 123-1234" />
                  </Col>
                  <Col>
                    <Link href="/account/phone">
                      <div className={s.accountLink}>Change phone number</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Bill Date" content="21st of each month"/>
                  </Col>
                  <Col>
                    <div className={s.accountLink}>Change bill date</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Billing History"/>
                  </Col>
                  <Col>
                    <div className={s.accountLink}>View bill history</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={s.sectionDivider} />
            <Row>
              <Col md={4}>
                <h3>Financing Info</h3>
              </Col>
              <Col md={8} xs={12} sm={12}>
                <Row>
                  <Col>
                    <AccountDataField label="Monthly Payment For Equipment" content="$8.93" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Months Remaining" content="45 Months" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Balance Remaining" content="$342.21" />
                  </Col>
                  <Col>
                    <Link href="/account/payoffbalance">
                      <div className={s.accountLink}>Pay off balance</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField content="Make a Payment" />
                  </Col>
                  <Col>
                    <Row>
                      <Col xs={8}>
                        <Input label="Payment Amount" />
                      </Col>
                      <Col xs={4}>
                        <div className={s.actionBtn}>
                          Pay
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={s.sectionDivider} />
            <Row>
              <Col md={4}>
                <h3>Settings</h3>
              </Col>
              <Col md={8} xs={12} sm={12}>
                <Row>
                  <Col>
                    <AccountDataField label="Authorized User(s)" content="Jordan Harmon" />
                  </Col>
                  <Col>
                    <div className={s.accountLink}>Manage users</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Mastercode" content="*****" />
                  </Col>
                  <Col>
                    <div className={s.accountLink}>Change mastercode</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AccountDataField label="Emergency Contacts" />
                  </Col>
                  <Col>
                    <div className={s.accountLink}>Change/Edit Emergency Contacts</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={s.sectionDivider} />
            <Row>
              <Col md={4}>
                <h3>Equipment Info</h3>
              </Col>
              <Col md={8} xs={12} sm={12}>
                <Row>
                  <Col className={s.linkCol}>
                    <Link href="/account/equipment">
                      <div className={s.accountLink}>My Equipment</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col className={s.linkCol}>
                    <div className={s.accountLink}>Equipment Support</div>
                  </Col>
                </Row>
                <Row>
                  <Col className={s.linkCol}>
                    <Link href="/account/addequipment">
                      <div className={s.accountLink}>Add Equipment</div>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={s.sectionDivider} />
            <Row>
              <Col md={4}>
                <h3>Rewards</h3>
              </Col>
              <Col md={8} xs={12} sm={12}>
                <Row>
                  <Col className={s.linkCol}>
                    <Link href="/account/refer">
                      <div className={s.accountLink}>Refer a friend</div>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col className={s.linkCol}>
                    <Link href="/account/loyalty">
                      <div className={s.accountLink}>Loyalty Credits</div>
                    </Link>
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


const mapStateToProps = ({ cart, products }) => ({ cart, products });

export default withRedux(initStore, mapStateToProps, null)(AccountPage);
