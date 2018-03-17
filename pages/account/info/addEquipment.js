import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Router from 'next/router';

import Layout from '../../../components/account/accountLayout';
import AccountCard from '../../../components/account/accountCard';
import AccountNav from '../../../components/account/accountNav';
import DashboardHeader from '../../../components/dashboardHeader';
import AccountCardMessage from '../../../components/account/accountCardMessage';
import EquipmentListItem from '../../../components/equipmentListItem';

export default class AccountInfoAddUser extends Component {
  state = {
    type: 'edit', // edit | message
  }

  changeType = (type) => {
    this.setState(() => ({ type }));
  }

  changeQuantity = (thing) => {
    console.log(thing);
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
                      <h4 className="text-center mb-lg">Add Equipment</h4>
                      <div className="mb-lg">
                        <div></div>
                        <div className="label mb-xs">My Equipment</div>
                        <EquipmentListItem changeQuantity={this.changeQuantity} quantity={1} />
                        <EquipmentListItem changeQuantity={this.changeQuantity} quantity={0} />
                        <EquipmentListItem changeQuantity={this.changeQuantity} quantity={1} />
                        <EquipmentListItem changeQuantity={this.changeQuantity} quantity={1} />
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
                          Add New User
                        </button>
                      </div>
                    </div>
                    : ''}

                  {type === 'message' ?
                    <AccountCardMessage
                      title="User 3 Added"
                      description={`Awesome job, User ${'3'} is now added to your alarm system.`}
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
