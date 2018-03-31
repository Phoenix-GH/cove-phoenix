import React, { Component } from 'react';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';
import ShippingLabel from '../../../components/account/shippingLabel';

const payOffAmount = 'PAY_OFF_AMOUNT';
const balancePaid = 'BALANCE_PAID';

export default class subscriptionPayBalance extends Component {
  state = {
    type: payOffAmount,
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  save = () => {
    // save stuff then change type
    this.changeType(balancePaid);
  }

  render() {
    const {
      type,
    } = this.state;
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
              <Col className="font-gotham-rounded">
                <AccountCard>
                  {type === payOffAmount ?
                    <div>
                      <h4 className="text-center mb-md">Pay off balance</h4>
                      <div className="mb-sm">
                        How much of your financing balance would you like to pay off?
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Amount" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                      </div>
                      <div className="text-left">
                        <a>Forgot Password</a>
                      </div>
                      <div className="text-right">
                        <button className="btn btn--primary" onClick={this.save}>
                          Confirm and Pay $385.20
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === balancePaid ?
                    <div>
                      <AccountCardMessage
                        title="Balance Paid Off"
                        description={
                          <div>
                            <div className="mb-xs">
                              You have paid x of $39,385.20.
                            </div>
                            <div className="mb-xs">
                              Your card has been charged $385.20.
                            </div>
                            <div>
                              Balance Remaining: $0.00
                            </div>
                          </div>
                        }
                        action={() => Router.push('/account/subscriptions')}
                      />
                    </div>
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
