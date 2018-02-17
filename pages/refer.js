import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStorefrom '../store';
import Input from '../components/input';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import AccountDataField from '../components/accountDataField';
import gs from '../components/styles.scss';
import s from './refer.scss';

class ReferPage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Refer a Friend</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} style={{ position: 'relative' }}>
                <div className={gs.leftHighlightShort} />
                <Row>
                  <Col className={s.label}>
                    Receive 2 months free when a friend signs up
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col className={s.label}>
                    Pending Invites
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col xs={4} className={gs.text}>
                    Dallin Harmon
                  </Col>
                  <Col xs={4} className={gs.text}>
                    Pending
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col xs={4} className={gs.text}>
                    Jordan Richard
                  </Col>
                  <Col xs={4} className={gs.text}>
                    Pending
                  </Col>
                </Row>
                <Row className={s.summaryRow}>
                  <Col xs={4} className={s.label}>
                    Pending months
                  </Col>
                  <Col className={gs.text}>
                    4
                  </Col>
                </Row>
              </Col>
              <Col className={s.rightCol}>
                <Row className={gs.spacerTop}>
                  <Col className={s.label}>
                    Accepted Invites
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col xs={4} className={gs.text}>
                    James Ricks
                  </Col>
                  <Col xs={4} className={gs.text}>
                    Accepted
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col xs={4} className={gs.text}>
                    Hannah Ames
                  </Col>
                  <Col xs={4} className={gs.text}>
                    20 days remaining
                  </Col>
                </Row>
                <Row className={gs.spacerTop40}>
                  <Col className={s.label}>
                    Friends must finish trial period to qualify for 2 free month reward
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col xs={4} className={s.label}>
                    Months earned
                  </Col>
                  <Col className={gs.text}>
                    4
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col className={s.actionRow}>
                  <div className={gs.primaryLink}>
                    Invite more friends
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}


const mapStateToProps = ({ cart, products }) => ({ cart, products});

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ReferPage);
