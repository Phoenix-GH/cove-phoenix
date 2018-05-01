import React, { Component } from 'react';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import CoveClubFullSize from '../components/coveClubFullsize';
import CoveClubMobile from '../components/coveClubMobile';
import style from './monitoringPlan.scss';

class CoveClub extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
        </Container>
        <div className="full">
          <CoveClubFullSize />
        </div>
        <div className="mobile">
          <CoveClubMobile />
        </div>
        <style jsx>{style}</style>
      </Layout>
    );
  }
}

export default withRedux(initStore, null, null)(CoveClub);
