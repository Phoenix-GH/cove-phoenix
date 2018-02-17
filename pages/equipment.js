import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Input from '../components/input';
import Radio from '../components/radio';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import EquipmentListItem from '../components/equipmentListItem';
import gs from '../components/styles.scss';
import s from './equipment.scss';

class EquipmentPage extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={s.header}>
              <Col>
                <h1 className={gs.pageHeader}>My Equipment</h1>
                <p>Have problems or questions?</p>
                <p className={gs.primaryLink}>F.A.Q.</p>
                <h3>Equipment Type</h3>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col xs={7} />
                  <Col xs={2}>
                    Quantity
                  </Col>
                  <Col xs={3}>
                    Return
                  </Col>
                </Row>
              </Col>

            </Row>
            <Row>
              <Col md={6}>
                <EquipmentListItem />

              </Col>
              <Col md={6} className={s.optionsRow}>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Radio label={[<span className={gs.bold}>Front door</span>]} />
                  </li>
                  <li className="list-inline-item">
                    <Radio label={[<span className={gs.bold}>Back door</span>]} />
                  </li>
                </ul>

              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row className={s.bottomMenuRow}>
                  <Col xs={6}>
                    <p className={gs.primaryLink}>
                      Exchange Sensors
                    </p>
                    <p className={gs.primaryLink}>
                      Return Sensors
                    </p>
                  </Col>
                  <Col xs={6} className={s.actionBtnCol}>
                    <div className={gs.actionBtn}>
                      Add More Sensors
                    </div>
                  </Col>
                </Row>
              </Col>
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

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(EquipmentPage);
