import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

import DashboardHeader from '../../components/dashboardHeader';
import Layout from '../../components/account/accountLayout';
import AccountDataField from '../../components/accountDataField';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';

export default class AccountPage extends Component {

  render() {
    return (
      <Layout>
        <DashboardHeader />
        <Container>
          <AccountCard className="card">
            <Row>
              <Col>
                <h2 className="mb-md">Summary</h2>
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
                    link="Manage account/alarm info"
                    route="/account/info"
                  >
                    <div>
                      <h4>Account Info</h4>
                      <AccountDataField label="Email" content="jordan.h@covesmart.com" />
                      <AccountDataField label="Password" content="**************" />
                      <AccountDataField label="Phone" content="(801) 123-1234" />
                      <AccountDataField label="Bill Date" content="21st of each month"/>
                    </div>
                    <div>
                      <h4>Alarm Info</h4>
                      <AccountDataField
                        label="Monitored Address"
                        content={
                          <div>
                            <div>1154 N 190 E</div>
                            <div>Lehi, UT 84043</div>
                          </div>
                        }
                      />
                      <AccountDataField
                        label="Emergency Contacts"
                        content={
                          <div>
                            <div>Dallin Harmon</div>
                            <div>208-384-9384</div>
                          </div>
                        }
                      />
                      <AccountDataField
                        label="Add Equipment"
                        content={
                          <div>
                            <div>Add doors</div>
                            <div>Add motions</div>
                          </div>
                        }
                      />
                      <AccountDataField
                        label="Add Equipment"
                        content={
                          <div>
                            <div>Front Door</div>
                            <div>Back Door</div>
                          </div>
                        }
                      />
                      <AccountDataField
                        label="Alarm Permit"
                        content="Alarm Permit Info"
                      />
                    </div>
                  </AccountGroup>
                  <AccountGroup
                    title="Subscriptions/Agreements"
                    link="Manage subscriptions"
                    route="/account/subscriptions"
                  >
                    <AccountDataField
                      label="Home"
                      content={
                        <div>
                          <div>Basic Monitoring: $19.99/mo</div>
                          <div>Status: Current</div>
                        </div>
                      }
                    />
                    <AccountDataField
                      label="Finance Agreement"
                      content="Documents for Esign Agreement"
                    />
                  </AccountGroup>
                  <AccountGroup
                    title="Payment Methods"
                    link="Manage payments"
                    route="/account/payment-methods"
                  >
                    <AccountDataField
                      label="Primary"
                      content={
                        <div>
                          <div>Jordan Harmon</div>
                          <div>Visa ending in 4567</div>
                        </div>
                      }
                    />
                  </AccountGroup>
                  <AccountGroup
                    title="Shipping Addresses"                  
                    link="Manage shipping/monitored addresses"
                    route="/account/shipping-addresses"
                  >
                    <AccountDataField
                      label="Shipping Address"
                      content={
                        <div>
                          1154 N 190 E<br/>Lehi, UT 84043
                        </div>
                      }
                    />
                    <AccountDataField
                      label="Monitored Address"
                      content={
                        <div>
                          1154 N 190 E<br/>Lehi, UT 84043
                        </div>
                      }
                    />
                  </AccountGroup>
                  <AccountGroup
                    title="Order history"                  
                    link="See all order history"
                    route="/account/order-history"
                  >
                    <AccountDataField
                      label="Latest Order"
                      content={
                        <div>
                          Order number: CV3873720494<br/>
                          Status: Completed
                        </div>
                      }
                    />
                    <AccountDataField
                      label="Monthly Monitoring and Monthly Equip. Pmt."
                      content="Completed"
                    />
                  </AccountGroup>
                  <AccountGroup
                    title="Rewards"                  
                    link="Manage rewards"
                    route="/account/rewards"
                  >
                    <AccountDataField
                      label="Friends Referred"
                      content={
                        <div>
                          Dave Nilson<br/>
                          Steven Gibson
                        </div>
                      }
                    />
                    <AccountDataField
                      label="Loyalty Credit Earned"
                      content="$50"
                    />
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
        `}</style>
      </Layout>
    );
  }
}