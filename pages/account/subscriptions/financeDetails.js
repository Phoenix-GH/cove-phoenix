import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

const paymentAmount = 'PAYMENT_AMOUNT';
const paymentMethod = 'PAYMENT_METHOD';
const paymentSuccess = 'PAYMENT_SUCCESS';

export default class subscriptionFinanceDetails extends Component {
  state = {
    type: paymentAmount,
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  render() {
    const { type } = this.state;
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
              <Col>
                <AccountCard>
                  {type === paymentAmount ?
                    <div>
                      <h4 className="text-center mb-md">Monthly Finance Amount</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              November 10, 2017
                            </div>
                          </div>
                          <hr />
                          <Row className="mb-md">
                            <Col md={7}>
                              <div className="label">
                                Monthly Finance Amount:
                              </div>
                              <div className="font-gotham-rounded">
                                Monthly Finance Amount: $8.45/mo
                              </div>
                              <div className="font-gotham-rounded mb-sm">
                                Status: Active
                              </div>
                              <div className="flex-col flex-align-center">
                                <div>
                                  <input type="text" className="form-control" placeholder="Payment Amount" />
                                </div>
                                <div className="ml-sm" style={{ width: 'auto' }}>
                                  <button
                                    className="btn btn--primary-inverse"
                                    onClick={() => this.changeType(paymentMethod)}
                                  >
                                    Pay
                                  </button>
                                </div>
                              </div>
                            </Col>
                            <Col md={5}>
                              <div className="mb-sm">
                                <div className="label">
                                  Monthly Payment For Equipment
                                </div>
                                <div>
                                  $8.56
                                </div>
                              </div>
                              <div className="mb-sm">
                                <div className="label">
                                  Months Remaining
                                </div>
                                <div>
                                  45 months
                                </div>
                              </div>
                              <div className="mb-sm">
                                <div className="label">
                                  Balance Remaining
                                </div>
                                <div>
                                  $385.20
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="text-right">
                            <a href="/account/subscriptions/cancel" className="btn btn--white">
                              Cancel Plan
                            </a>
                          </div>
                        </div>
                      </AccountGroup>
                    </div>
                  : ''}

                  {type === paymentMethod ?
                    <div>
                      <h4 className="text-center mb-md">Payment Method</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              November 10, 2017
                            </div>
                          </div>
                          <hr />
                          <div className="label">
                            Payment Method:
                          </div>
                          <div className="font-gotham-rounded">
                            Jordan Harmon
                          </div>
                          <div className="font-gotham-rounded mb-sm">
                            Visa ending in 3667
                          </div>
                          <div className="mb-md">
                            <div className="flex-col flex-align-center">
                              <div>
                                <input type="text" className="form-control" placeholder="Payment Amount" />
                              </div>
                              <div className="ml-sm">
                                <button
                                  className="btn btn--primary-inverse"
                                  onClick={() => this.changeType(paymentSuccess)}
                                >
                                  Pay
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex-col">
                            <div>
                              <a href="/account/payment-methods">
                                Use a different payment method
                              </a>
                            </div>
                            <div className="text-right">
                              <button
                                className="btn btn--white"
                                onClick={() => this.changeType(paymentAmount)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </AccountGroup>
                    </div>
                  : ''}

                  {type === paymentSuccess ?
                    <div>
                      <h4 className="text-center mb-md">Confirmation</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              November 10, 2017
                            </div>
                          </div>
                          <hr />
                          <div className="label">
                            Receipt:
                          </div>
                          <div className="font-gotham-rounded">
                            Jordan Harmon
                          </div>
                          <div className="font-gotham-rounded mb-sm">
                            Visa ending in 3667
                          </div>
                          <div className="font-gotham-rounded mb-sm">
                            Amount Paid: <strong>$385.20</strong>
                          </div>
                          <div className="font-gotham-rounded mb-sm">
                            Remaining balance: <strong>$0.00</strong>
                          </div>
                          <div className="text-right">
                            <a
                              className="btn btn--primary"
                              href="/account/subscriptions"
                            >
                              Awesome
                            </a>
                          </div>
                        </div>
                      </AccountGroup>
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
