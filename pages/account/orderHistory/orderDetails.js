import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

export default class OrderHistoryDetails extends Component {
  render() {
    return (
      <Layout>
        <DashboardHeader />
        <Container>
          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="mb-md">Order History</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav />
              </Col>
              <Col>
                <AccountCard>
                  <div>
                    <h4 className="text-center mb-md">Order Details</h4>
                    <AccountGroup>
                      <div>
                        <div className="font-gotham-rounded">
                          November 10, 2017
                        </div>
                        <hr />
                        <Row>
                          <Col>
                            <div className="label">
                              24/7 Professional Monitoring and
                              Monthly Finance Pmt.
                            </div>
                            <div className="font-gotham-rounded">
                              Order number: CV3873720494<br />
                              Status: Completed
                            </div>
                          </Col>
                          <Col>
                            <div className="label">
                              Order Details
                            </div>
                            <div className="font-gotham-rounded">
                              24/7 Professional Monitoring: $19.99/mo<br />
                              Monthly Finance Pmt: $9.99<br />
                              Order Total: $28.98
                            </div>
                          </Col>
                        </Row>
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
