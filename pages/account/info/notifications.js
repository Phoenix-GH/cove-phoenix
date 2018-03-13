import React, { Component } from 'react';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

import AccountDataField from '../../../components/accountDataField';
import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import AccountGroup from '../../../components/account/accountGroup';
import DashboardHeader from '../../../components/dashboardHeader';
import EditNotifications from '../../../components/account/editNotifications';
import CustomizeAlarmEvents from '../../../components/account/customizeAlarmEvents';

export default class Notifications extends Component {

  state = {
    type: 'edit', // edit | customize | messageNotifications | messageEvents
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
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
                <h2 className="mb-md">Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>

                  {/* EDIT */}
                  {type==='edit' ?
                  <EditNotifications
                    changeType={this.changeType}
                  />
                :''}

                {/* CUSTOMIZE */}
                {type==='customize' ?
                  <CustomizeAlarmEvents
                    changeType={this.changeType}
                  />
                :''}

                {/* MESSAGE UPDATED */}
                {type==='messageEvents' || type==='messageNotifications' ?
                  <div>
                    <div className="pb-lg text-center">
                      {type==='messageEvents'?
                        <div>
                          <h5>Alarm Events Updated</h5>
                          <div>You have successfully updated your alarm event settings.</div>
                        </div>
                      :
                        <div>
                          <h5>Notifications/Communications Updated</h5>
                          <div>You have successfully updated your alarm notifications.</div>
                        </div>
                      }
                    </div>
                    <div className="text-right">
                      <button
                        className="btn btn--primary ml-sm"
                        onClick={() => this.changeType('edit')}
                      >
                        Go Back
                      </button>
                    </div>
                  </div>
                :''}
                </AccountCard>
              </Col>
            </Row>
          </AccountCard>
        </Container>
      </Layout>
    );
  }
}