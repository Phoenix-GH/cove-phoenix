import React, { Component } from 'react';
import { Container } from 'reactstrap';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import CoveClubFullSize from '../components/coveClubFullsize';
import CoveClubMobile from '../components/coveClubMobile';
import s from './coveclub.scss';

class CoveClub extends Component {
  static getInitialProps({ store }) {

  }
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
        <style jsx>{`
          @media (min-width: 767px) {
            .mobile {
              display: none;
            }
            .full {
              display: block;
            }
          }

          @media (max-width: 768px) {
            .mobile {
              display: block;
            }
            .full {
              display: none;
            }
          }

        `}</style>
      </Layout>
    );
  }
}


export default withRedux(initStore, null, null)(CoveClub);
