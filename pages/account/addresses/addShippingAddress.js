import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';

const addressAdd = 'ADDRESS_ADD';
const addressAddSuccess = 'ADDRESS_ADD_SUCCESS';

export default class ChangeMonitoredAddress extends Component {
  state = {
    type: addressAdd,
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
                  {type === addressAdd ?
                    <div>
                      <h4 className="text-center mb-md">Shipping Address</h4>
                      <div className="label mb-xs">
                        Enter new shipping address:
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
                          onClick={() => this.changeType(addressAddSuccess)}
                        >
                          Add Shipping Address
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === addressAddSuccess ?
                    <div>
                      <AccountCardMessage
                        title="Shipping Address Added"
                        description="You have successfully added a shipping address to your account."
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
