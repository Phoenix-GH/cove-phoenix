import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import DashboardHeader from '../../components/dashboardHeader';
import AccountGroup from '../../components/account/accountGroup';
import AccountCardMessage from '../../components/account/accountCardMessage';
import { object } from 'prop-types';

const paymentMethodList = 'PAYMENT_METHOD_LIST';
const paymentMethodAdd = 'PAYMENT_METHOD_ADD';
const paymentMethodAddSuccess = 'PAYMENT_METHOD_ADD _SUCCESS';

export default class subscriptionPaymentMethods extends Component {
  static propTypes = {
    url: object,
  }

  static defaultProps = {
    url: {},
  }

  state = {
    type: paymentMethodList,
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
                <h2 className="mb-md">Account/Alarm Info</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <AccountNav pathname={this.props.url.asPath} />
              </Col>
              <Col>
                <AccountCard>
                  {type === paymentMethodList ?
                    <div>
                      <h4 className="text-center mb-md">Payment methods</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              Visa ending in 3585
                            </div>
                          </div>
                          <hr />
                          <div className="label">
                            Jordan Harmon:
                          </div>
                          <div className="font-gotham-rounded mb-md">
                            1154 N 190 E<br />
                            Lehi, UT 84043
                          </div>
                          <a href="">
                            Delete payment method &#62;
                          </a>
                        </div>
                      </AccountGroup>

                      <button
                        className="btn btn-block btn--primary-inverse"
                        onClick={() => this.changeType(paymentMethodAdd)}
                      >
                        Add Payment Method
                      </button>
                    </div>
                    : ''}

                  {type === paymentMethodAdd ?
                    <div>
                      <h4 className="text-center mb-md">Add Payment Method</h4>
                      <AccountGroup>
                        <div>
                          <div className="flex-col">
                            <div className="font-gotham-rounded">
                              Visa ending in 3585
                            </div>
                          </div>
                          <hr />
                          <div className="label mb-xs">
                            Jordan Harmon
                          </div>
                          <Row>
                            <Col md={9}>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name on Card" />
                              </div>
                              <Row>
                                <Col md={9}>
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Card Number" />
                                  </div>
                                </Col>
                                <Col md={3}>
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="ccv" />
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <button
                            className="btn btn--primary-inverse"
                            onClick={() => this.changeType(paymentMethodAddSuccess)}
                          >
                            Add Payment Method
                          </button>
                        </div>
                      </AccountGroup>
                    </div>
                  : ''}

                  {type === paymentMethodAddSuccess ?
                    <AccountCardMessage
                      title="Payment Method Added"
                      description={
                        <div>
                          <strong>Successful!</strong><br />
                          You have successfully added a payment method.
                        </div>
                      }
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
