import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

export default class AccountInfoBillDate extends Component {
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
                      <h4 className="text-center mb-lg">Change Bill Date</h4>
                      <div className="mb-lg">
                        <p>
                          Current Bill Date: 21st of each month
                        </p>
                        <div className="form-group">
                          <label>New Bill Date</label>
                          <div>
                            <select>
                              {[...Array(31).keys()].map(date => (
                                <option key={date}>{date+1}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-lg">
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
                          Update Bill Date
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="Bill Date Updated"
                      description="You have successfully updated your bill date."
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
