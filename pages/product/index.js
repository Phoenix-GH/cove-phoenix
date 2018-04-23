import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import styles from './product.scss';

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Header color="secondary" callingPage="products" />
        <div className="product">
          <div className="product__header">
            <div className="product__header-text">
              <h1 className="product__title">Cove Touch</h1>
              <p className="product__subtext">Lorem ipsum dolor sit amet. <br/> Consectetuer adipiscing eli.</p>
            </div>
          </div>
          <Container>
            <p className="product__paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <Row>
              <Col xs={{size: 12, order: 1}} md={{size: 4, order: 0}}>
                <p className="product__feature-box">Short description of product feature for this product</p>
                <p className="product__feature-box">Short description of product feature for this product</p>
                <p className="product__feature-box">Short description of product feature for this product</p>
              </Col>
              <Col xs={{size: 12, order: 0}} md={{size: 4, order: 1}}>
                <img className="product__showcase-image" alt="Cove Touch Panel" src="/static/images/coveProduct_1.png" />
              </Col>
              <Col xs={{size: 12, order: 2}} md={{size: 4, order: 2}}>
                <p className="product__feature-box">Short description of product feature for this product</p>
                <p className="product__feature-box">Short description of product feature for this product</p>
                <p className="product__feature-box">Short description of product feature for this product</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row>
              <Col xs={12} sm={4}>
                <div className="product__comparison">
                  <h2 className="product__subheading product__subheading--pad-top">Easy.</h2>
                  <p className="product__paragraph">We put our effort into creating value for you. Not having the lowest prices and not locking you into working with us for the next 5 years. Not even the next 60 days.</p>
                  <p className="product__paragraph--no-margin">More questions?</p>
                  <a className="product__link" href="/">Chat with Us</a>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="product__center">
                  <img src="/static/images/logoTeal.svg" height="32" alt="Cove Logo" />
                </div>
                <p className="product__compare-box">$20/mo<br/>Month-to-Month</p>
                <p className="product__compare-box">Control Anywhere</p>
                <p className="product__compare-box">No Cancel Fees</p>
                <p className="product__compare-box">Free Tech Calls</p>
                <p className="product__compare-box">3 Year Warranty</p>
              </Col>
              <Col xs={6} sm={4}>
                <h2 className="product__column-title">Not Us</h2>
                <p className="product__compare-box product__compare-box--faded">$15-25/mo<br/>3-5 Year Contract</p>
                <p className="product__compare-box product__compare-box--faded">Control from Home</p>
                <p className="product__compare-box product__compare-box--faded">$100's - $1,000's</p>
                <p className="product__compare-box product__compare-box--faded">$45+ / Visit</p>
                <p className="product__compare-box product__compare-box--faded">3 Years-Limited</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row>
              <Col sm={6}>
                <Row>
                  <h2 className="product__subheading">You need not worry.</h2>
                  <Col xs={6}>
                    <ul className="product__plain-list">
                      <li className="product__plain-list-item">Fire</li>
                      <li className="product__plain-list-item">Flood</li>
                      <li className="product__plain-list-item">Harmful fumes</li>
                      <li className="product__plain-list-item">Medical emergency</li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="product__plain-list">
                      <li className="product__plain-list-item">Unwanted Intrusion</li>
                      <li className="product__plain-list-item">Broken Window</li>
                      <li className="product__plain-list-item">Infrared movement*</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <img className="product__image-flex" alt="Cove Touch Panel" src="/static/images/coveProduct_1.png" />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p className="product__footnote">* Custom configured for furry secondary alarm systems, A.K.A. pet-friendly!</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col xs={{size: 12, order: 1}} sm={6}>
                <div className="product__column--large product__column--center">
                  <h2 className="product__subheading">Easy.</h2>
                  <p className="product__text">We put our effort into creating value for you. Not having the lowest prices and not locking you into working with us for the next 5 years. Not even the next 60 days.</p>
                </div>
              </Col>
              <Col xs={{size: 12, order: 0}} sm={6}>
                <div className="product__column--large product__column--dark">&nbsp;</div>
              </Col>
            </Row>
            <Row className="no-gutter">
              <Col sm={6}>
                <div className="product__column--large">
                  <img className="product__video" src="/static/images/videoPlaceholder.jpg" alt="How it works" />
                  <p className="product__center product__text--green">How it works</p>
                  <img className="product__video" src="/static/images/videoPlaceholder.jpg" alt="How it works" />
                  <p className="product__center product__text--green">How it works</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="product__column--large product__column--center">
                  <h2 className="product__subheading">Easy.</h2>
                  <p className="product__text">We put our effort into creating value for you. Not having the lowest prices and not locking you into working with us for the next 5 years. Not even the next 60 days.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--dark">&nbsp;</div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--center product__column--no-pad">
                  <Row>
                    <Col xs={6}>
                      <div className="product__grid-item" />
                    </Col>
                    <Col xs={6}>
                      <div className="product__grid-item" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <div className="product__grid-item" />
                    </Col>
                    <Col xs={6}>
                      <div className="product__grid-item" />
                    </Col>
                  </Row>
                  <Row>
                    <a href="/" className="product__center product__text--green">View all</a>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="product__footer">
          <a className="product__button" href="/">Chat Available</a>
          <p className="product__text--white">Read Frequently Asked Questions »</p>
        </div>
        <Footer />
        <style jsx>{styles}</style>
        <style jsx global>{`
        .no-gutter > [class*='col-'] {
          padding-right:0;
          padding-left:0;
        }
        `}
        </style>
}
      </Layout>
    );
  }
}
