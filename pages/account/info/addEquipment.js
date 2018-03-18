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
import Radio from '../../../components/radio';
import AccountGroup from '../../../components/account/accountGroup';

export default class AccountInfoAddUser extends Component {
  state = {
    type: 'select', // select | review | message
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  changeQuantity = () => {}

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
                      <h4 className="text-center mb-lg">Add Equipment</h4>
                      <div>
                        <EquipmentListHeader
                          listLabel="My Equipment"
                          actionLabel="Add"
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
                      <div className="p-lg">
                        <div className="mb-md">
                          <a>Click here</a> to add Smoke, Carbon or Flood
                        </div>
                        <ul className="list mb-md">
                          <li>
                            <div className="flex-col">
                              <div>1 motion, 2 window sensors</div>
                              <div className="text-right"><strong>$60 or $1.15/mo</strong></div>
                            </div>
                          </li>
                          <li>
                            <div className="flex-col">
                              <div>Current Monthly Equipment Payment</div>
                              <div className="text-right"><strong>$8.56</strong></div>
                            </div>
                          </li>
                        </ul>

                        <div className="mb-xl">
                          <div className="form-group">
                            <Radio label="Pay equipment in full" />
                          </div>
                          <div className="form-group">
                            <Radio label="Finance equipment at 0% APR for 60 months" />
                          </div>
                        </div>

                        <div className="mb-lg">
                          <p className="lead">
                            New Monthly Equipment Payment
                          </p>
                          <h3>$1.15 + $8.56 = $9.71</h3>
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
                          onClick={() => this.changeType('review')}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'review' ?
                    <div>
                      <h4 className="text-center mb-sm">Review Order</h4>
                      <AccountGroup title="">
                        <div>
                          <h5>Order</h5>
                          <ul className="list mb-md">
                            <li>
                              <div className="flex-col">
                                <div>1 motion, 2 window sensors</div>
                                <div className="text-right"><strong>$60 or $1.15/mo</strong></div>
                              </div>
                            </li>
                            <li>
                              <div className="flex-col">
                                <div>Current Monthly Equipment Payment</div>
                                <div className="text-right"><strong>$8.56</strong></div>
                              </div>
                            </li>
                          </ul>
                          <div>
                            <p className="lead mb-xs">
                              New Monthly Equipment Payment
                            </p>
                            <h4>$1.15 + $8.56 = $9.71</h4>
                          </div>
                        </div>
                      </AccountGroup>

                      <h4 className="text-center mb-sm">Payment Methods</h4>
                      <AccountGroup>
                        <div>
                          <h6 className="font-weight-normal">Visa ending in 3585</h6>
                          <hr />
                          <div className="label">Jordon Harmon</div>
                          <div>
                            1154 N 190 E<br />
                            Lehi, UT 84043
                          </div>
                        </div>
                      </AccountGroup>

                      <div className="pl-xl pr-xl mb-lg">
                        <div className="mb-md">
                          <button className="btn btn--primary-inverse btn-block">
                            Add payment method
                          </button>
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
                          onClick={() => this.changeType('select')}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn--primary ml-sm"
                          onClick={this.save}
                        >
                          Confirm Order
                        </button>
                      </div>
                    </div>
                  : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="Order Successful"
                      description="Your order was successful. We will be sending you a confirmation email shortly."
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
