import React, { Component } from 'react';
import { object } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/account/accountLayout';
import AccountCard from '../../components/account/accountCard';
import AccountNav from '../../components/account/accountNav';
import DashboardHeader from '../../components/dashboardHeader';
import AccountGroup from '../../components/account/accountGroup';
import AccountCardMessage from '../../components/account/accountCardMessage';
import AccountDataField from '../../components/accountDataField';

const invite = 'INVITE';
const inviteSent = 'INVITE_SENT';

export default class Rewards extends Component {
  static propTypes = {
    url: object,
  }

  static defaultProps = {
    url: {},
  }

  state = {
    type: invite,
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
                  {type === invite ?
                    <div>
                      <AccountGroup title="Rewards">
                        <div>
                          <Row>
                            <Col>
                              <AccountDataField
                                label="Friends Out of Trial"
                                content={
                                  <div>
                                    Dave Nilson<br />
                                    Steven Gibson
                                  </div>
                                }
                              />
                            </Col>
                            <Col className="border-left">
                              <AccountDataField
                                label="Months Earned"
                                content="4"
                              />
                              <AccountDataField
                                label="Months Remaining"
                                content="2"
                              />
                            </Col>
                          </Row>
                          <hr className="border-color" />
                          <Row>
                            <Col>
                              <AccountDataField
                                label="Friends in Trial"
                                content="Jeffrey"
                              />
                            </Col>
                            <Col className="border-left">
                              <AccountDataField
                                label="Friends Invited"
                                content=""
                              />
                            </Col>
                          </Row>
                          <hr className="border-color" />
                          <Row>
                            <Col>
                              <AccountDataField
                                label="Loyalty Credits"
                                content="$50"
                              />
                            </Col>
                            <Col className="border-left" />
                          </Row>
                          <Row>
                            <Col className="text-center">
                              <a href="">Buy equip. with credits</a>
                            </Col>
                            <Col className="text-center">
                              <a href="">Use credits for free month</a>
                            </Col>
                          </Row>
                        </div>
                      </AccountGroup>
                      <AccountGroup title="Invite Friends/Family">
                        <div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address" />
                          </div>
                          <div className="form-group">
                            <textarea rows="5" className="form-control" placeholder="Message" />
                          </div>
                          <div className="text-right">
                            <button
                              className="btn btn--primary-inverse"
                              onClick={() => this.changeType(inviteSent)}
                            >
                              Invite
                            </button>
                          </div>
                        </div>
                      </AccountGroup>
                    </div>
                    : ''}


                  {type === inviteSent ?
                    <AccountCardMessage
                      title="Invitation Sent"
                      description={
                        <div>
                          Your invitations to (email) has been sent, you can review the
                          status of your invitation in the rewards tab.
                        </div>
                      }
                      action={() => this.changeType(invite)}
                      actionTitle="Invite More Friends"
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
