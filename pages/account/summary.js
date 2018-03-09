import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

import Header from '../../components/header';
import Layout from '../../components/minimalLayout';
import AccountDataField from '../../components/accountDataField';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';

export default class AccountPage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />

          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="title">Summary</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>
                  <AccountGroup
                    title="Account/Alarm Info"
                    subTitle="Manage account/alarm info"
                  >
                    <div>
                      <h3>Account Info</h3>
                    </div>
                    <div>
                      <h3>Alarm Info</h3>
                    </div>
                  </AccountGroup>
                  <AccountGroup
                    title="Subscriptions/Agreements"
                    subTitle="Manage subscriptions"
                  >
                    <div>
                      <div>Home</div>
                      <div>Basic Monitoring: $19.99/mo</div>
                      <div>Status: Current</div>
                    </div>
                    <div>
                      <div>Finance Agreement</div>
                      <div>Documents for Esign Agreement</div>
                    </div>
                  </AccountGroup>
                  <AccountGroup
                    title="Payment Methods"
                    subTitle="Manage payments"
                  >
                    <div>
                      <div>Primary</div>
                      <div>Jordan Harmon</div>
                      <div>Visa ending in 4567</div>
                    </div>
                  </AccountGroup>
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
        <style jsx>{`
          .card {
            padding: 34px 24px;
          }
          .h3 {

          }
          .title {
            font-family: 'GothamRoundedBold';
            margin-bottom: 16px;
          }
          .account-group {
            font-family: 'GothamRoundedBook'
          }
        `}</style>
      </Layout>
    );
  }
}