import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';
import EquipmentListItem from '../../../components/equipmentListItem';
import EquipmentListHeader from '../../../components/equipmentListHeader';
import ShippingLabel from '../../../components/account/shippingLabel';

export default class AccountInfoAddUser extends Component {
  state = {
    type: 'select', // select | review | message
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  changeQuantity = (next) => {
    console.log(next);
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
                  {type === 'select' ?
                    <div>
                      <div className="text-center mb-md">
                        <h4 className="text-center mb-none">Return Equipment</h4>
                        <a className="text-sm">Have Questions or Comments?</a>
                      </div>
                      <div className="text-center">
                      </div>
                      <div className="mb-lg">
                        <EquipmentListHeader
                          listLabel="My Equipment"
                          actionLabel="Return"
                        />
                        <EquipmentListItem
                          onChange={this.changeQuantity}
                          quantity={0}
                          product={{ name: 'Door Sensors', quantity: 1 }}
                        />
                        <EquipmentListItem
                          onChange={this.changeQuantity}
                          quantity={0}
                          product={{ name: 'Window Sensors', quantity: 1 }}
                        />
                        <EquipmentListItem
                          onChange={this.changeQuantity}
                          quantity={1}
                          product={{ name: 'Motion Sensors', quantity: 12 }}
                        />
                        <EquipmentListItem
                          onChange={this.changeQuantity}
                          quantity={2}
                          product={{ name: 'Key Fobs', quantity: 1 }}
                        />
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
                          onClick={() => this.changeType('review')}
                        >
                          Return Sensors
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'review' ?
                    <div>
                      <AccountCardMessage
                        title="Are you sure?"
                        description={
                          <div>
                            You are about to send the following sensors back:<br />
                            Front Door<br />
                            Back Door<br />
                            Are you sure you want to return these sensors?
                          </div>
                        }
                      />

                      <div className="pl-xl pr-xl mb-md">
                        <select name="" id="" className="form-control mb-md">
                          <option value="">Select Reason for Return</option>
                          <option value="">Do not want it.</option>
                          <option value="">The equipment is defective.</option>
                          <option value="">I didn't order the equipment.</option>
                          <option value="">Wrong item was sent.</option>
                          <option value="">Received extra equipment.</option>
                        </select>

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
                          onClick={() => this.changeType('select')}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn--primary ml-sm"
                          onClick={() => this.changeType('message')}
                        >
                          Yes, Return Sensors
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'message' ?
                    <div>
                      <AccountCardMessage
                        title="Membership Cancelled"
                        description={
                          <div>
                            Your sensors are ready and waiting to be shipped.<br />
                            Please print the shipping label below and follow instructions.
                          </div>
                        }
                      />
                      <h4>Return Equipment</h4>
                      <p>
                        We will credit the card you paid with once we have received and scanned
                        the equipment into our warehouse.
                      </p>
                      <div className="mb-sm">
                        <button className="btn btn--primary">Print label</button>
                      </div>
                      <div>
                        <ShippingLabel />
                      </div>
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
