import React, { Component } from 'react';
import { object } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';
import DashboardHeader from '../../components/dashboardHeader';

export default class Addresses extends Component {
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
                <h2 className="mb-md">Addresses</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>
                  <h4 className="text-center mb-md">Shipping Addresses</h4>
                  <AccountGroup>
                    <div>
                      <div className="font-gotham-rounded">
                        Primary shipping address
                      </div>
                      <hr />
                      <div className="label">
                        Jordan Harmon
                      </div>
                      <div className="font-gotham-rounded mb-sm">
                        1154 N 190 E<br />
                        Lehi, UT 84043
                      </div>
                      <a>Delete address</a>
                    </div>
                  </AccountGroup>
                  <div className="mb-lg">
                    <a
                      className="btn btn-block btn--primary-inverse"
                      href="/account/addresses/add-shipping-address"
                    >
                      Add shipping address
                    </a>
                  </div>
                  <AccountGroup>
                    <div>
                      <div className="font-gotham-rounded">
                        Monitored address
                      </div>
                      <hr />
                      <div className="label">
                        Jordan Harmon
                      </div>
                      <div className="font-gotham-rounded mb-sm">
                        1154 N 190 E<br />
                        Lehi, UT 84043
                      </div>
                      <a href="/account/addresses/change-monitored-address">
                        Change monitored address
                      </a>
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