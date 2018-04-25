import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Layout from '../../../components/minimalLayout';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import styles from '../product-base.scss';

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
            <p className="product__paragraph product__alt-font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <Row>
              <Col xs={{size: 12, order: 1}} md={{size: 4, order: 0}}>
                <p className="product__feature-box">3" touchscreen</p>
                <p className="product__feature-box">Test sensors remotely</p>
                <p className="product__feature-box">Easy to use</p>
              </Col>
              <Col xs={{size: 12, order: 0}} md={{size: 4, order: 1}}>
                <img className="product__showcase-image" alt="Cove Touch Panel" src="/static/images/coveProduct_1.png" />
              </Col>
              <Col xs={{size: 12, order: 2}} md={{size: 4, order: 2}}>
                <p className="product__feature-box">Create users for each member of the family</p>
                <p className="product__feature-box">&nbsp;</p>
                <p className="product__feature-box">&nbsp;</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row>
              <Col xs={12} sm={4}>
                <div className="product__comparison">
                  <h2 className="product__subheading product__subheading--pad-top">Cove vs Them</h2>
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
            <h2 className="product__subheading">Using your alarm just got easy</h2>
            <Row>
              <Col sm={6}>
                <ul className="product__plain-list">
                  <li className="product__plain-list-item">Easy navigation</li>
                  <li className="product__plain-list-item">Easy setup</li>
                  <li className="product__plain-list-item">Easy on you</li>
                  <li className="product__plain-list-item">Easy on the wallet</li>
                </ul>
              </Col>
              <Col sm={6}>
                <img className="product__image-flex" alt="Cove Touch Panel" src="/static/images/product/cove-touch/cove-touch-angled-crop.jpg" />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p className="product__footnote">* Custom configured for furry secondary alarm systems, A.K.A. pet-friendly!</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col xs={{size: 12, order: 2}} sm={{size: 6, order: 1}}>
                <div className="product__column--large product__column--center">
                  <h2 className="product__subheading">Security that is elegant</h2>
                  <p className="product__text product__alt-font">We put our effort into creating value for you. Not having the lowest prices and not locking you into working with us for the next 5 years. Not even the next 60 days.</p>
                </div>
              </Col>
              <Col xs={{size: 12, order: 1}} sm={{size: 6, order: 2}}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/cove-touch/cove-touch-lifestyle-wide.jpg" alt="Cove Touch Product Lifestyle" />
                </div>
              </Col>
            </Row>
            <Row className="no-gutter">
              <Col sm={6}>
                <div className="product__column--medium">
                  <img className="product__video" src="/static/images/product/cove-touch/cove-touch-video-placeholder.jpg" alt="How it works" />
                  <p className="product__center product__text--green product__alt-font">How it works</p>
                </div>
              </Col>
              <Col sm={6} className="d-flex align-items-center">
                <div className="product__column--medium product__column--center">
                  <h2 className="product__subheading">Unprecedented DIY setup process</h2>
                  <p className="product__text product__alt-font">We put our effort into creating value for you. Not having the lowest prices and not locking you into working with us for the next 5 years. Not even the next 60 days.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/cove-touch/cove-touch-square.jpg" alt="Cove Touch Product Lifestyle" />
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--center product__column--no-pad">
                  <Row>
                    <Col xs={6}>
                      <img className="product__column-image--small" src="/static/images/product/product-gallery/sensor.jpg" alt="Cove Sensor" />
                    </Col>
                    <Col xs={6}>
                      <img className="product__column-image--small" src="/static/images/product/product-gallery/camera.jpg" alt="Cove Camera" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <img className="product__column-image--small" src="/static/images/product/product-gallery/key-fob.jpg" alt="Cove Key Fob" />
                    </Col>
                    <Col xs={6}>
                      <img className="product__column-image--small" src="/static/images/product/product-gallery/doorbell.jpg" alt="Cove Doorbell" />
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
