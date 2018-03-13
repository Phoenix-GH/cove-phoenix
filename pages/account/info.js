import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

import Header from '../../components/header';
import AccountDataField from '../../components/accountDataField';
import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import AccountGroup from '../../components/account/accountGroup';
import DashboardHeader from '../../components/dashboardHeader';

export default class AccountPage extends Component {

  editAccount = (type) => {
    console.log(type);
  }

  editAlarm = (type, id) => {
    console.log(type, id);
  }

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
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>
                  <AccountGroup title="Account Info">
                    <div>
                      <AccountDataField
                        label="Email:"
                        content="jordan.h@covesmart.com"
                        edit={() => this.editAccount('email')}
                      />
                      <AccountDataField
                        label="Password:"
                        content="**************"
                        edit={() => this.editAccount('password')}
                      />
                    </div>
                    <div>
                      <AccountDataField
                        label="Phone:"
                        content="385-208-2877"
                        edit={() => this.editAccount('phone')}
                      />
                      <AccountDataField
                        label="Bill Date:"
                        content="21st of each month"
                        edit={() => this.editAccount('billDate')}
                      />
                    </div>
                  </AccountGroup>
                  <AccountGroup title="Alarm Info">
                    <div>
                      <AccountDataField
                        label="Monitored Address:"
                        content={
                          <div>
                            <div>1154 N 190 E</div>
                            <div>Lehi, UT 84043</div>
                          </div>
                        }
                        edit={() => this.editAlarm('monitoredAddress')}
                      />
                      <label>Emergency Contacts:</label>
                      <AccountDataField
                        edit={() => this.editAlarm('contact', 'id')}
                        content={
                          <div>
                            Emergency Contact 1:<br/>
                            Dallin Harmon<br/>
                            208-384-9384
                          </div>
                        }
                      />
                      <AccountDataField
                        edit={() => this.editAlarm('contact', 'id')}
                        content={
                          <div>
                            Emergency Contact 2:<br/>
                            Dallin Harmon<br/>
                            208-384-9384
                          </div>
                        }
                      />
                      <AccountDataField
                        label="Alarm Permit Number:"
                        content="#3857484"
                        edit={() => this.editAlarm('permitNumber')}
                      />
                      <AccountDataField
                        label="Alarm Insurance Certificate:"
                        content="#3857484"
                        edit={() => this.editAlarm('insuranceCert')}
                      />
                    </div>
                    <div>
                      <AccountDataField
                        label="Primary Phone:"
                        content="385-208-2877"
                        edit={() => this.editAlarm('primaryPhone')}
                      />
                      <AccountDataField
                        label="Secondary Phone:"
                        content="385-208-2877"
                        edit={() => this.editAlarm('secondaryPhone')}
                      />
                      <AccountDataField
                        label="Mastercode:"
                        content="****"
                        edit={() => this.editAlarm('masterCode')}
                      />
                      <AccountDataField
                        label="User 1:"
                        content="****"
                        edit={() => this.editAlarm('userCode', 1)}
                      />
                      <AccountDataField
                        label="User 2:"
                        content="****"
                        edit={() => this.editAlarm('userCode', 2)}
                      />
                      <div className="text-center mb-md">
                        <a>Add user</a>
                      </div>
                      <div className="text-center">
                        <a>
                          <div>Manage Cove Notifications and Communications</div>
                        </a>
                      </div>
                    </div>
                  </AccountGroup>
                  <AccountGroup title="Add/Remove Equipment">
                    <Row>
                      <Col>
                        <div>
                          <a>Add Equipment</a>
                        </div>
                      </Col>
                      <Col>
                        <div className="text-center">
                          <a>Return Equipment</a>
                        </div>
                      </Col>
                      <Col>
                        <div className="text-right">
                          <a>Exchange Equipment</a>
                        </div>
                      </Col>
                    </Row>
                  </AccountGroup>
                  <div className="text-center">
                    <button className="btn btn-primary btn-block">Add Equipment</button>
                  </div>
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
        <style jsx>{`
          .card {
            padding: 34px 24px;
          }
          a {
            font-size: 12px;
          }
        `}</style>
      </Layout>
    );
  }
}