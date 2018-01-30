import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore, loadProducts } from '../store';
import Input from '../components/input';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import gs from '../components/styles.scss';
import s from './login.scss';

class LoginPage extends Component {
  static async getInitialProps({ query }) {
    return { stage: query.stage };
  }

  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} style={{ position: 'relative' }}>
                <div className={s.leftHighlight} />
                <Row>
                  <Col xs={{ size: 9 }}>
                    <Row className={gs.spacerTop}>
                      <Col>
                        <Input label="Username" />
                      </Col>
                    </Row>
                    <Row className={gs.spacerTop}>
                      <Col>
                        <Input label="Password" type="password" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className={s.actionRow}>
                  <Col xs={{ offset: 2, size: 2 }} className={s.cancelLink}>
                    <div className={gs.mutedLink}> Cancel</div>
                  </Col>
                  <Col xs={5}>
                    <div className={gs.actionBtnInverse} style={{ maxWidth: '350px' }}>
                      Login
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
    loadProducts: bindActionCreators(loadProducts, dispatch)
  }
}

export default withRedux({
  createStore: initStore,
  mapStateToProps,
  mapDispatchToProps,
  storeKey: 'rootRedux',
})(LoginPage);
