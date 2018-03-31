import React, { Component } from 'react';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';
import ShippingLabel from '../../../components/account/shippingLabel';

const cancel = 'CANCEL';
const cancelConfirm = 'CANCEL_CONFIRM';
const cancelPassword = 'CANCEL_PASSWORD';
const cancelSuccess = 'CANCEL_SUCCESS';
const discountClaim = 'DISCOUNT_CLAIM';
const discountSuccess = 'DISCOUNT_SUCCESS';

export default class subscriptionProMonitorActivate extends Component {
  state = {
    type: cancel,
    returnEquipment: true,
    payOffBalance: false,
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  cancelMembership = () => {
    // save stuff then change type
    this.changeType(cancelSuccess);
  }

  render() {
    const {
      type,
      returnEquipment,
      payOffBalance,
    } = this.state;
    return (
      <Layout>
        <DashboardHeader />
        <Container>
          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="mb-md">Account/Alarm Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav />
              </Col>
              <Col className="font-gotham-rounded">
                <AccountCard>
                  {type === cancel ?
                    <div>
                      <h4 className="text-center mb-md">Cancel Membership</h4>
                      <Row>
                        <Col>
                          <div className="mb-sm">
                            <div className="label">
                              Membership: Basic
                            </div>
                            <div className="label">
                              Account Finance balance: $23.99
                            </div>
                          </div>
                          <div>
                            <a className="text-sm" onClick={() => this.changeType(cancelConfirm)}>
                              No Thanks, cancel service
                            </a>
                            {returnEquipment ?
                              <div className="text-sm">
                                {"You'll need to return the equipment"}
                              </div>
                            : ''}
                            {payOffBalance ?
                              <div className="text-sm">
                                We will process the remaining of your finance agreement.
                              </div>
                              : ''}
                          </div>
                        </Col>
                        <Col className="border-left">
                          <div className="mb-md">
                            <div>{"Don't leave us yet!"}</div>
                            <div className="font-weight-bold">Get two months free on us.</div>
                          </div>
                          <div className="text-right">
                            <button className="btn btn--primary" onClick={() => this.changeType(discountClaim)}>
                              Love to!
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  : ''}

                  {type === cancelConfirm ?
                    <div>
                      <h4 className="text-center mb-md">Cancel Membership</h4>
                      <Row>
                        <Col>
                          {returnEquipment ?
                            <div>
                              <div className="text-sm">
                                By canceling your service, you are required to ship all equipment
                                within 30 days of cancellation or your monthly service will
                                continue to occur.
                              </div>
                              <div>
                                <a className="text-sm" onClick={() => this.changeType(cancelPassword)}>
                                  Yes, cancel service and return equipment
                                </a>
                              </div>
                            </div>
                            : ''}
                          {payOffBalance ?
                            <div>
                              <div className="text-sm">
                                By canceling your service, you understand that the remaining balance
                                of $385.20 on your finance agreement will be process on the primary
                                card on file?
                              </div>
                              <div>
                                <a className="text-sm" onClick={() => this.changeType(cancelPassword)}>
                                  Yes, cancel service and pay off balance
                                </a>
                              </div>
                            </div>
                            : ''}
                        </Col>
                        <Col className="border-left">
                          <div className="mb-md">
                            <div>Would you like to proceed?</div>
                          </div>
                          <div className="text-right">
                            <a href="/account/subscriptions" className="btn btn--primary">
                              No, Continue Service
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  : ''}

                  {type === cancelPassword ?
                    <div>
                      <h4 className="text-center mb-md">Cancel Membership</h4>
                      <div className="form-group">
                        Hate to see you go!
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                      </div>
                      <div className="text-left">
                        <a>Forgot Password</a>
                      </div>
                      <div className="text-right">
                        <button className="btn btn--primary" onClick={this.cancelMembership}>
                          Confirm Cancellation
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === cancelSuccess ?
                    <div>
                      <AccountCardMessage
                        title="Membership Cancelled"
                        description={
                          <div>
                            Your subscription has been cancelled. You still have access to your
                            online portal and can reactivate service at anytime for free.
                          </div>
                        }
                      />
                      {payOffBalance ?
                        <div>
                          <div className="mb-sm">Your card has been charged $385.20.</div>
                          <div className="mb-sm">Balance Remaining: $0.00</div>
                        </div>
                        : ''}
                      <div className="text-right mb-md">
                        <button className="btn btn--primary">
                          Reactivate Membership
                        </button>
                      </div>

                      {returnEquipment ?
                        <div>
                          <h4>Return Equipment</h4>
                          <div className="mb-md">
                            We will credit the card you paid with once we have received and scanned the
                            system into our warehouse.
                          </div>
                          <div className="mb-md">
                            <button className="btn btn--primary">
                              Print Label
                            </button>
                          </div>
                          <ShippingLabel />
                        </div>
                        : ''}

                    </div>
                  : ''}

                  {type === discountClaim ?
                    <div>
                      <AccountCardMessage
                        title="Get Your Free Months"
                        description={
                          <div>
                            <div className="font-weight-bold">
                              Get two months free on us.
                            </div>
                            <div>
                              Great choice. Always better to be safe than sorry.
                            </div>
                          </div>
                        }
                        action={() => this.changeType(discountSuccess)}
                        actionTitle="Claim Two Free Months"
                      />
                    </div>
                  : ''}

                  {type === discountSuccess ?
                    <div>
                      <AccountCardMessage
                        title="Congrats!"
                        description={
                          <div>
                            <div className="font-weight-bold">
                              Your account has been credited two free months
                            </div>
                            <div>
                              Great choice. Always better to be safe than sorry.
                            </div>
                          </div>
                        }
                        action={() => Router.push('/account/subscriptions')}
                      />
                    </div>
                  : ''}
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
      </Layout>
    );
  }
}
