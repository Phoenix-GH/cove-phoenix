import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

export default class subscriptionProMonitorActivate  extends Component {
  state = {
    active: true,
  }

  activate = () => {
    // save stuff then change type
    this.setState(() => ({ active: true }));
  }

  render() {
    const { active } = this.state;
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
                  {active ?
                    <div>
                      <h4 className="text-center mb-md">Your service is now active</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              February 22nd, 2018
                            </div>
                          </div>
                          <hr />
                          <div className="form-group">
                            <div className="label">
                              Current Plan:
                            </div>
                            <div className="font-gotham-rounded">
                              Basic Subscription: $19.99/mo
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="label">
                              new Bill Date:
                            </div>
                            <div className="font-gotham-rounded">
                              February 22nd, 2018
                            </div>
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
