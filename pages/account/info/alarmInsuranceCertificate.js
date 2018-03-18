import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

export default class AccountInfoAddUser extends Component {
  state = {
    type: 'cert', // cert | send | message
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
                  {type === 'cert' ?
                    <div>
                      <h4 className="text-center mb-md">Alarm Insurance Certificate</h4>
                      <div className="mb-md">
                        <img
                          className="img-fluid"
                          src="/static/images/cove-cert.jpg"
                          alt="Alarm Insurance Certificate"
                        />
                      </div>
                      <div className="text-center mb-md">
                        <button className="btn btn--primary">Download Certificate</button>
                      </div>
                      <div className="pl-xl pr-xl mb-md">
                        <button className="btn btn--primary-inverse btn-block" onClick={() => this.changeType('send')}>
                          Send Certificate to Insurance
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'send' ?
                    <div>
                      <h4 className="text-center mb-md">
                        Send Alarm Certificate
                      </h4>

                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                      </div>

                      <div className="text-right">
                        <button
                          className="btn btn--white"
                          onClick={() => this.changeType('cert')}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn--primary ml-sm"
                          onClick={this.save}
                        >
                          Send Certificate
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="Alarm Certificate Sent"
                      description={`You have successfully sent your Alarm Monitoring Certificate to ${'email@email.com'}.`}
                      action={() => this.changeType('cert')}
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
