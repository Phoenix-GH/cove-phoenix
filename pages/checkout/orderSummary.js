import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../../components/header';
import Layout from '../../components/minimalLayout';

class OrderSummaryPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className="spacer" />
          <Row>
            Summary
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default OrderSummaryPage;
