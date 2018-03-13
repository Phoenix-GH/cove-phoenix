import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

import AccountDataField from '../../../components/accountDataField';
import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import AccountGroup from '../../../components/account/accountGroup';
import DashboardHeader from '../../../components/dashboardHeader';

export default class PermitNumber extends Component {

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
                <h2 className="mb-md">Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.pathname} />
              </Col>
              <Col>
                <AccountCard>
                  <h4 className="text-center mb-lg">Change Permit Number</h4>
                  <div className="mb-lg text-center">
                    <input type="text" className="form-control"/>
                  </div>
                  <div className="text-right">
                    <button className="btn btn--white">Cancel</button>
                    <button className="btn btn--primary ml-sm">Update Notifications</button>
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