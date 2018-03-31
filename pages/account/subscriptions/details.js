import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

const details = 'DETAILS';
const inactive = 'INACTIVE';

export default class subscriptionDetails extends Component {
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
                    <h4 className="text-center mb-md">24/7 Professional Monitoring</h4>
                    <AccountGroup>
                      <div>
                        <div className="flex-col">
                          <div className="font-gotham-rounded">
                            November 10, 2017
                          </div>
                        </div>
                        <hr />
                        <div className="label">
                          24/7 Professional Monitoring
                        </div>
                        <div className="label">
                          Current
                        </div>
                        <div className="font-gotham-rounded">
                          Basic Membership: $19.99/mo
                        </div>
                        <div className="font-gotham-rounded mb-md">
                          Status: Inactive
                        </div>

                        {type === details ?
                          <div className="flex-col">
                            <div>
                              <a href="/account/subscriptions/change" className="btn btn--primary">
                                Change Plan Type
                              </a>
                            </div>
                            <div className="text-right">
                              <a href="/account/subscriptions/cancel" className="btn btn--white">
                                Cancel Service
                              </a>
                            </div>
                          </div>
                        : ''}

                        {type === inactive ?
                          <a href="/account/subscriptions/activate" className="btn btn--primary">
                            Activate Service
                          </a>
                        : ''}

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
