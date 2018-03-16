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
                      <h4 className="text-center mb-lg">Add Emergency Contact</h4>
                      <div className="mb-lg">
                        <label>Current monitored address</label>
                        <p>
                          1154 N 190 E<br />
                          Lehi, UT 84043
                        </p>
                        <div className="mb-xs">
                          <label>Enter new monitored address:</label>
                        </div>
                        <div className="form-group mb-lg">
                          <Row className="mb-sm">
                            <Col xs="8">
                              <input type="text" className="form-control" placeholder="Address" />
                            </Col>
                            <Col xs="4">
                              <input type="text" className="form-control" placeholder="Apt/Suite #" />
                            </Col>
                          </Row>
                          <Row className="mb-sm">
                            <Col>
                              <input type="text" className="form-control" placeholder="City" />
                            </Col>
                            <Col>
                              <input type="text" className="form-control" placeholder="State" />
                            </Col>
                            <Col>
                              <input type="text" className="form-control" placeholder="Zipcode" />
                            </Col>
                          </Row>
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
                          Update Monitored Address
                        </button>
                      </div>
                    </div>
                    : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="Monitored Address Updated"
                      description="You have successfully updated your monitored address."
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
