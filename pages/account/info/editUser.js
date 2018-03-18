import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

export default class AccountInfoEditUser extends Component {
  state = {
    type: 'edit', // edit | message
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  save = () => {
    // save stuff then change type
    this.changeType('message');
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
                <h2 className="mb-md">Account/Alarm Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav />
              </Col>
              <Col>
                <AccountCard>
                  {type === 'edit' ?
                    <div>
                      <h4 className="text-center mb-lg">Edit User 1</h4>
                      <div className="mb-lg">
                        <div className="form-group">
                          <div className="label">User 1:</div>
                          <div>****</div>
                        </div>
                        <div className="label">Edit User:</div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div style={{ width: 140 }}>
                          <input type="text" className="form-control" placeholder="Pin" />
                        </div>
                      </div>
                      <div className="mb-lg">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <div className="text-left">
                          <a>Forgot Password</a>
                        </div>
                      </div>
                      <div className="text-right">
                        <button
                          className="btn btn--white"
                          onClick={() => Router.push('/account/info')}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn--primary ml-sm"
                          onClick={this.save}
                        >
                          Edit User 1
                        </button>
                      </div>
                    </div>
                    : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="User 1 Updated"
                      description={
                        <div>
                          Awesome job, you have updated User {1}.<br />
                          You should be able to use User 1 within 5-10 minutes.
                        </div>
                      }
                      action={() => Router.push('/account/info')}
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
