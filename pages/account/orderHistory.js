import React, { Component } from 'react';
import { object } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';
import DashboardHeader from '../../components/dashboardHeader';

export default class OrderHistory extends Component {
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
                <h2 className="mb-md">Order History</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.asPath} />
              </Col>
              <Col>
                <AccountCard>
                  <h4 className="text-center mb-md">Order History</h4>
                  <AccountGroup>
                    <div>
                      <div className="flex-col">
                        <div className="font-gotham-rounded">
                          December 10, 2017
                        </div>
                        <div className="text-right">
                          <a href="/account/order-history/order-details">
                            Order Details
                          </a>
                        </div>
                      </div>
                      <hr />
                      <div className="label">
                        Monthly Monitoring and Monthly Equip. Pmt.
                      </div>
                      <div className="label">
                        Completed
                      </div>
                      <div className="font-gotham-rounded mb-sm">
                        Order number: CV3873720494<br />
                        Status: Completed
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
