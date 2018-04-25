import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Head from 'next/head';
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
        <Head>
          <title>Cove | Products | Motion Sensor Alarm</title>
          <meta name="description" content="Each Cove motion sensor alarm is specially-configured to detect human movement in all lighting conditions without triggering when your pet decides to move to a different couch. Order a motion sensor for each large living space." />
        </Head>
        <Header color="secondary" callingPage="products" />
        <div className="product">
          <div className="product__header">
            <div className="product__header-text">
              <h1 className="product__title">Motion Sensor</h1>
              <p className="product__subtext">Motion Sensor Alarm</p>
            </div>
          </div>
          <Container>
            <p className="product__paragraph product__alt-font">Cove’s motion sensor alarms are lightweight and small enough to conceal in key living areas. Triggered by human movement, your pets can wander freely without undiresable false alarms.</p>
            <Row>
              <Col xs={{ size: 12, order: 1 }} md={{ size: 4, order: 0 }}>
                <p className="product__feature-box">45 feet range</p>
                <p className="product__feature-box">Infrared detection technology</p>
                <p className="product__feature-box">Adjustable Sensitivity Option</p>
                <p className="product__feature-box">3-5 year battery life</p>
              </Col>
              <Col xs={{ size: 12, order: 0 }} md={{ size: 4, order: 1 }}>
                <img className="product__showcase-image" alt="Motion Sensor Alarm Front" src="/static/images/product/motion-sensor-alarm/motion-sensor-front.jpg" />
              </Col>
              <Col xs={{ size: 12, order: 2 }} md={{ size: 4, order: 2 }}>
                <p className="product__feature-box">Pet immunity up to 55 pounds</p>
                <p className="product__feature-box">Smart self-testing</p>
                <p className="product__feature-box">90 degree field of view</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row>
              <Col xs={12} sm={4}>
                <div className="product__comparison">
                  <h2 className="product__subheading product__subheading--pad-top">Cove vs Them</h2>
                  <p className="product__paragraph">Cove motion sensor alarms are all paired with our award-winning Cove Touch panel offering the “all-around easiest” customer experience in the industry.</p>
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
                <p className="product__compare-box">3 year warranty</p>
                <p className="product__compare-box">No cancellation fees</p>
                <p className="product__compare-box">No service windows</p>
              </Col>
              <Col xs={6} sm={4}>
                <h2 className="product__column-title">Not Us</h2>
                <p className="product__compare-box product__compare-box--faded">$15-25/mo<br/>3-5 Year Contract</p>
                <p className="product__compare-box product__compare-box--faded">Control from Home</p>
                <p className="product__compare-box product__compare-box--faded">3 Years-Limited</p>
                <p className="product__compare-box product__compare-box--faded">$100's - $1,000's</p>
                <p className="product__compare-box product__compare-box--faded">$45+ per Visit</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <h2 className="product__subheading">Complete Motion Protection</h2>
            <Row>
              <Col sm={6}>
                <ul className="product__plain-list">
                  <li className="product__plain-list-item">Customized for you</li>
                  <li className="product__plain-list-item">Seamless installation</li>
                  <li className="product__plain-list-item">Features so simple you can control them</li>
                  <li className="product__plain-list-item">Protection on your terms</li>
                </ul>
              </Col>
              <Col sm={6}>
                <img className="product__image-flex" alt="Motion Sensor Alarm" src="/static/images/product/motion-sensor-alarm/motion-sensor-crop.jpg" />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <p className="product__footnote">* Custom configured for furry secondary alarm systems, A.K.A. pet-friendly!</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col xs={{ size: 12, order: 2 }} sm={{ size: 6, order: 1 }}>
                <div className="product__column--large product__column--center">
                  <h2 className="product__subheading">Easy to Install</h2>
                  <p className="product__text product__alt-font">Each motion sensor is pre-coupled with your Cove Touch panel. You can custom select each name to help you find its place in your home. With a couple touches of the screen you confirm each sensor is setup and ready to start protecting the ones you love.</p>
                </div>
              </Col>
              <Col xs={{ size: 12, order: 1 }} sm={{ size: 6, order: 2 }}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/motion-sensor-alarm/motion-sensor-lifestyle.jpg" alt="Motion Sensor Alarm Lifestyle" />
                </div>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col sm={6}>
                <div className="product__column--medium">
                  <img className="product__video" src="/static/images/product/cove-touch/cove-touch-video-placeholder.jpg" alt="How it works" />
                  <p className="product__center product__text--green product__alt-font">How it works</p>
                </div>
              </Col>
              <Col sm={6} className="d-flex align-items-center">
                <div className="product__column--medium product__column--center">
                  <h2 className="product__subheading">Easy to Use</h2>
                  <p className="product__text product__alt-font">Arm the entire system or a single sensor - Cove is yours. You decide what it does. We’ve engineered our smart devices to work with your individual needs. If your needs change, simply change the settings. No technician needed. Adding a basement access point? Simply order another motion sensor and add it to your alarm system arsenal yourself. Easy.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/cove-touch/cove-touch-square.jpg" alt="Motion Sensor Alarm Alternate Product" />
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
