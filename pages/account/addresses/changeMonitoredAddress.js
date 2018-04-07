import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

const changeAddress = 'CHANGE_ADDRESS';
const changeWarning = 'CHANGE_WARNING';
const changeSuccess = 'CHANGE_SUCCESS';

export default class ChangeMonitoredAddress extends Component {
  state = {
    type: changeAddress,
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
                <h2 className="mb-md">Addresses</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav />
              </Col>
              <Col>
                <AccountCard>
                  {type === changeAddress ?
                    <div>
                      <h4 className="text-center mb-md">Change Monitored Address</h4>
                      <div className="mb-md">
                        <div className="label">
                          Current monitored address:
                        </div>
                        <div className="small">
                          1154 N 190 E<br />
                          Lehi, UT 84043
                        </div>
                      </div>
                      <div className="label mb-xs">
                        Enter new monitored address:
                      </div>
                      <Row>
                        <Col md={8}>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address" />
                          </div>
                        </Col>
                        <Col>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Apt/Suite #" />
                          </div>
                        </Col>
                      </Row>
                      <Row className="mb-md">
                        <Col>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="City" />
                          </div>
                        </Col>
                        <Col>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="State" />
                          </div>
                        </Col>
                        <Col>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Zipcode" />
                          </div>
                        </Col>
                      </Row>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                      </div>
                      <div className="mb-sm">
                        <a href="">Forgot Password</a>
                      </div>
                      <div className="text-right">
                        <a href="/account/addresses" className="btn btn--white">
                          Cancel
                        </a>
                        <button
                          className="btn btn--primary ml-xs"
                          onClick={() => this.changeType(changeWarning)}
                        >
                          Update monitoring address
                        </button>
                      </div>
                    </div>
                    : ''}

                  {type === changeWarning ?
                    <div>
                      <AccountCardMessage
                        title="Alert!!!"
                        description={
                          <div>
                            By changing your monitored address, you’re changing the location
                            to which Cove will dispatch the Emergency Services in case of an
                            emergency. Are you sure you want to continue?
                          </div>
                        }
                      />

                      <div className="ml-xl mr-xl">
                        <div className="mb-md">
                          <div className="label">
                            Current monitored address:
                          </div>
                          <div className="small">
                            1154 N 190 E<br />
                            Lehi, UT 84043
                          </div>
                        </div>
                        <div className="mb-md">
                          <div className="label">
                            Current monitored address:
                          </div>
                          <div className="small">
                            1154 N 190 E<br />
                            Lehi, UT 84043
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <a href="/account/addresses" className="btn btn--white">
                          Cancel
                        </a>
                        <button
                          className="btn btn--primary ml-xs"
                          onClick={() => this.changeType(changeSuccess)}
                        >
                          Yes, update address
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === changeSuccess ?
                    <div>
                      <AccountCardMessage
                        title="Monitored Address Updated"
                        description="You have successfully updated your monitored address."
                        action={() => Router.push('/account/addresses')}
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
