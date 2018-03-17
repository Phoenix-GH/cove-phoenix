import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

export default class AccountInfoAddEmergencyContact extends Component {
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
                <h2 className="mb-md">Info</h2>
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
                      <h4 className="text-center mb-lg">Edit Emergency Contact</h4>
                      <div className="mb-lg">
                        <div className="label">Current Emergency Contact</div>
                        <p>
                          Dallin Harmon<br />
                          659-555-5555
                        </p>
                        <div className="mb-xs">
                          <label>Enter New Emergency Contact:</label>
                        </div>
                        <div className="form-group mb-lg">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" />
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
                          Update Emergency Contact
                        </button>
                      </div>
                    </div>
                    : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="Emergency Contact 2 Updated"
                      description="You have successfully updated Emergency Contact 2."
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
