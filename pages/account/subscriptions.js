import React, { Component } from 'react';
import { object } from 'prop-types';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

import AccountDataField from '../../components/accountDataField';
import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';
import DashboardHeader from '../../components/dashboardHeader';

export default class Info extends Component {
  static propTypes = {
    url: object,
  }

  static defaultProps = {
    url: {},
  }

  render() {
    return (
      <Layout>
        <DashboardHeader />
        <Container>
          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="mb-md">Subscriptions</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>
                  <h4 className="text-center mb-md">Subscriptions/Agreements</h4>
                  <AccountGroup>
                    <div>
                      <div className="flex-col">
                        <div className="font-gotham-rounded">
                          November 10, 2017
                        </div>
                        <div className="text-right">
                          <a href="subscriptions/details">Subscription Details</a>
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
                      <div className="font-gotham-rounded">
                        Status: Active
                      </div>
                      <a>Cancel Subscription</a>
                    </div>
                  </AccountGroup>

                  <AccountGroup>
                    <div>
                      <div className="flex-col">
                        <div className="font-gotham-rounded">
                          November 10, 2017
                        </div>
                        <div className="text-right">
                          <a href="/account/subscriptions/finance-details">Finance Details</a>
                        </div>
                      </div>
                      <hr />
                      <div className="label">
                        Monthly Finance Amount
                      </div>
                      <div className="label">
                        Current
                      </div>
                      <div className="font-gotham-rounded">
                        Monthly Finance Amount: $8.45/mo
                      </div>
                      <div className="font-gotham-rounded">
                        Status: Active
                      </div>
                      <a href="/account/subscriptions/pay-balance">Pay balance</a>
                    </div>
                  </AccountGroup>

                  <h4 className="text-center mb-md">Subscriptions/Agreements</h4>
                  <AccountGroup>
                    <div>
                      <div className="label">
                        Finance Agreement: <a>View Documents</a>
                      </div>
                      <div className="font-gotham-rounded">
                        60 month Equipment Finance Agreement
                      </div>
                    </div>
                  </AccountGroup>

                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
      </Layout>
    );
  }
}