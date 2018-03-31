import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

const details = 'DETAILS';
const inactive = 'INACTIVE';

export default class subscriptionFinanceDetails extends Component {
  state = {
    type: details,
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
                                <button className="btn btn--primary-inverse">
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
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
      </Layout>
    );
  }
}
