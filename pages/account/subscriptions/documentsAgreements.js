import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountGroup from '../../../components/account/accountGroup';

export default class subscriptionDocumentsAgreements extends Component {
  render() {
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
                    <h4 className="text-center mb-md">Documents/Agreements</h4>
                    <AccountGroup>
                      <div>
                        <div className="flex-col">
                          <div className="font-gotham-rounded">
                            Start Date: November 10, 2017
                          </div>
                        </div>
                        <hr />
                        <div className="label">
                          Equipment Finance Agreement
                        </div>
                        <a href="#/">
                          Download Finance Agreement
                        </a>
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
