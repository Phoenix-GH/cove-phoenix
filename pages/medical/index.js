import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from './medical.scss';

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Header color="secondary" callingPage="product" />
        <div className="medical__header">
          <div className="medical__header-data">
            <Container>
              <Row>
                <Col>
                  <h1 className="medical__title">COVE <br/><span className="medical__title--alt-font">Medical</span></h1>
                  <p className="medical__subtitle">Protect those you love.</p>
                  <a className="medical__button" href="/">Order Now</a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <div className="medical__content">
            <Row className="align-items-stretch justify-content-end" noGutters>
              <Col xs={{size: 12, order: 2}} sm={{size: 6, order: 2}} md={{size: 4, order: 1}}>
                <Row className="align-items-start tall-row" noGutters>
                  <Col xs={12} className="row-spacer">
                    <Row className="align-items-center justify-content-center justify-content-sm-start" noGutters>
                      <div className="medical__icon-wrap">
                        <img className="medical__icon" src="/static/images/plugIcon.png" alt="Plug Icon" />
                      </div>
                      <span className="medical__text--green">Always Compatible</span>
                    </Row>
                  </Col>
                  <Col xs={12} className="align-self-end row-spacer">
                    <Row className="align-items-center justify-content-center justify-content-sm-start" noGutters>
                      <div className="medical__icon-wrap">
                        <img className="medical__icon" src="/static/images/lockIcon.png" alt="Plug Icon" />
                      </div>
                      <span className="medical__text--green">Military Encryption</span>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={{size: 12, order: 1}} sm={{size: 6, order: 1}} md={{size: 4, order: 1}}>
                <img className="medical__image" src="/static/images/coveMedicalProductShot.jpg" alt="Cove Medical Product" />
              </Col>
              <Col xs={{size: 12, order: 3}} sm={{size: 6, order: 2}} md={{size: 4, order: 2}}>
                <Row className="align-items-start tall-row" noGutters>
                  <Col xs={12} className="row-spacer">
                    <Row className="align-items-center justify-content-center justify-content-sm-start" noGutters>
                      <div className="medical__icon-wrap">
                        <img className="medical__icon" src="/static/images/wrenchIcon.png" alt="Plug Icon" />
                      </div>
                      <span className="medical__text--green">Easy Install</span>
                    </Row>
                  </Col>
                  <Col xs={12} className="align-self-end row-spacer">
                    <Row className="align-items-center justify-content-center justify-content-sm-start" noGutters>
                      <div className="medical__icon-wrap">
                        <img className="medical__icon" src="/static/images/twoWayArrowIcon.png" alt="Plug Icon" />
                      </div>
                      <span className="medical__text--green">Talk and Listen</span>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
        <style jsx>{styles}</style>
        <style jsx global>{`
        .tall-row {
          height: auto;
        }
        @media (min-width: 768px) {
          .tall-row {
            height: 250px;
          }
        }
        @media (max-width: 768px) {
          .row-spacer {
            margin-bottom: 20px;
          }
        }
        `}
        </style>
      </Layout>
    );
  }
}
