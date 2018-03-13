import React, { Component } from 'react';
import { object } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import EditNotifications from '../../../components/account/editNotifications';
import CustomizeAlarmEvents from '../../../components/account/customizeAlarmEvents';
import AccountCardMessage from '../../../components/account/accountCardMessage';

export default class Notifications extends Component {
  static propTypes = {
    url: object,
  }

  static defaultProps = {
    url: {},
  }

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
                  {type === 'edit' ?
                    <EditNotifications
                      changeType={this.changeType}
                    />
                  : ''}

                  {/* CUSTOMIZE */}
                  { type === 'customize' ?
                    <CustomizeAlarmEvents
                      changeType={this.changeType}
                    />
                  : ''}

                  {/* EVENTS UPDATED */}
                  {type === 'messageEvents' ?
                    <AccountCardMessage
                      title="Alarm Events Updated"
                      description="You have successfully updated your alarm event settings."
                      action={() => this.changeType('edit')}
                    />
                  : ''}

                  {/* NOTIFICATIONS UPDATED */}
                  {type === 'messageNotifications' ?
                    <AccountCardMessage
                      title="Notifications/Communications Updated"
                      description="You have successfully updated your alarm notifications."
                      action={() => this.changeType('edit')}
                    />
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
