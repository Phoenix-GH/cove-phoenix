import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

const change = 'CHANGE';
const message = 'MESSAGE';

export default class subscriptionProMonitorActivate extends Component {
  state = {
    type: change,
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  save = () => {
    // save stuff then change type
    this.changeType(message);
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
                  {type === change ?
                    <div>
                      <h4 className="text-center mb-md">Change Membership Type</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              November 10, 2017
                            </div>
                          </div>
                          <hr />
                          <div className="label">
                            Current Plan
                          </div>
                          <div className="font-gotham-rounded mb-md">
                            Basic Membership: $19.99/mo
                          </div>

                          <div className="label">
                            New Plan
                          </div>
                          <div className="mb-md">
                            <select className="form-control" name="" id="">
                              <option value="basic">Basic</option>
                            </select>
                          </div>

                          <div className="text-right">
                            <a href="/account/subscriptions/details" className="btn btn--white">
                              Cancel
                            </a>
                            <button className="btn btn--primary ml-sm" onClick={this.save}>
                              Change Plan Type
                            </button>
                          </div>
                        </div>
                      </AccountGroup>
                    </div>
                  : ''}

                  {type === message ?
                    <div>
                      <h4 className="text-center mb-md">Plan Has Been Changed</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              November 10, 2017
                            </div>
                          </div>
                          <hr />
                          <div className="label">
                            Current Plan
                          </div>
                          <div className="font-gotham-rounded mb-md">
                            Basic Membership: $29.99/mo
                          </div>
                          <div className="form-group">
                            <p>
                              This change will reflect on your next billing cycle.
                            </p>
                            <div className="font-gotham-rounded">
                              February 22nd, 2018
                            </div>
                          </div>
                          <div className="text-right">
                            <a className="btn btn--primary" href="/account/subscriptions/details">
                              Done
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
