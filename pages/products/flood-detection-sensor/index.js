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
import Video from '../../../components/video';
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
          <title>Cove | Products | Flood Detection Sensor</title>
          <meta name="description" content="Cove offers protection from flooding and freezing weather. The sensor can alert you to pooled water and we can contact you before the issue requires expensive repairs." />
        </Head>
        <Header color="secondary" callingPage="products" />
        <div className="product">
          <div className="product__header">
            <div className="product__header-text">
              <h1 className="product__title">Flood Detection Sensor</h1>
              <p className="product__subtext">If it's Cove.<br /> It's covered.</p>
            </div>
          </div>
          <Container>
            <p className="product__paragraph product__alt-font">Cove offers protection from flooding and freezing weather. The sensor can alert you to pooled water and we can contact you before the issue requires expensive repairs.</p>
            <Row>
              <Col xs={{ size: 12, order: 1 }} md={{ size: 4, order: 0 }}>
                <p className="product__feature-box">Freeze alerts</p>
                <p className="product__feature-box">Flood alerts</p>
                <p className="product__feature-box">Easy install</p>
              </Col>
              <Col xs={{ size: 12, order: 0 }} md={{ size: 4, order: 1 }}>
                <img className="product__showcase-image" alt="Flood Detection Sensor" src="/static/images/product/flood-detection-sensor/flood-detection-sensor-front.jpg" />
              </Col>
              <Col xs={{ size: 12, order: 2 }} md={{ size: 4, order: 2 }}>
                <p className="product__feature-box">Incredible design</p>
                <p className="product__feature-box">Alerts that save $</p>
                <p className="product__feature-box">Smart self-testing</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row>
              <Col xs={12} sm={4}>
                <div className="product__comparison">
                  <h2 className="product__subheading product__subheading--pad-top">Cove vs Them</h2>
                  <p className="product__paragraph">Cove flood detection sensors are all paired with our award-winning Cove Touch panel offering the “all-around easiest” customer experience in the industry.</p>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="product__center">
                  <img src="/static/images/logoTeal.svg" height="32" alt="Cove Logo" />
                </div>
                <p className="product__compare-box">$20/mo<br/><span className="product__compare-subtext">Month-to-Month</span></p>
                <p className="product__compare-box">Control Anywhere</p>
                <p className="product__compare-box">3 year warranty</p>
                <p className="product__compare-box">No cancellation fees</p>
                <p className="product__compare-box">No service windows</p>
              </Col>
              <Col xs={6} sm={4}>
                <h2 className="product__column-title">Not Us</h2>
                <p className="product__compare-box product__compare-box--faded">$15-25/mo<br/><span className="product__compare-subtext">3-5 Year Contract</span></p>
                <p className="product__compare-box product__compare-box--faded">Control from Home</p>
                <p className="product__compare-box product__compare-box--faded">3 Years-Limited</p>
                <p className="product__compare-box product__compare-box--faded">$100's - $1,000's</p>
                <p className="product__compare-box product__compare-box--faded">$45+ per Visit</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <h2 className="product__subheading">Total Life Safety</h2>
            <Row className="no-gutter">
              <Col sm={6}>
                <ul className="product__plain-list">
                  <li className="product__plain-list-item">Easy to use</li>
                  <li className="product__plain-list-item">Seamless Setup</li>
                  <li className="product__plain-list-item">Convenience on your terms</li>
                  <li className="product__plain-list-item">Alerts that save $</li>
                </ul>
              </Col>
              <Col sm={6}>
                <img className="product__image-flex" alt="Flood Detection Sensor" src="/static/images/product/flood-detection-sensor/flood-detection-sensor-crop.jpg" />
              </Col>
            </Row>
            <Row className="no-gutter">
              <Col sm={4}>
                <p className="product__footnote">* Custom configured for furry secondary alarm systems, A.K.A. pet-friendly!</p>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col xs={{ size: 12, order: 2 }} sm={{ size: 6, order: 1 }}>
                <div className="product__column--large product__column--center product__column--no-pad-left">
                  <h2 className="product__subheading">Easy to Install</h2>
                  <p className="product__paragraph product__alt-font">Each flood/freeze sensor is pre-coupled with your Cove Touch panel. You can custom select each name to help you identify where trouble might be afoot. With a couple touches of the screen you confirm each sensor is setup and ready to start protecting the ones you love.</p>
                </div>
              </Col>
              <Col xs={{ size: 12, order: 1 }} sm={{ size: 6, order: 2 }}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/flood-detection-sensor/flood-detection-sensor-lifestyle.jpg" alt="Flood Detection Sensor Lifestyle" />
                </div>
              </Col>
            </Row>
            <div className="product__spacer" />
            <Row className="no-gutter">
              <Col sm={6}>
                <div className="product__column--medium">
                  <div className="product__video">
                    <Video />
                  </div>
                  <p className="product__center product__text--green product__alt-font">How it works</p>
                </div>
              </Col>
              <Col sm={6} className="d-flex align-items-center">
                <div className="product__column--medium product__column--center">
                  <h2 className="product__subheading">Easy to Use</h2>
                  <p className="product__paragraph product__alt-font">The flood/freeze sensors are active 24/7. We’ve engineered our smart devices to work with your individual needs. If your needs change, simply change the settings. No technician needed. Want only flood protection without the freeze? Simply make those changes yourself with a few touches of the Cove Touch panel. Easy.</p>
                </div>
              </Col>
            </Row>
            <Row className="no-gutter">
              <Col xs={12} sm={6}>
                <div className="product__column--large product__column--dark">
                  <img className="product__column-image" src="/static/images/product/cove-touch/cove-touch-square.jpg" alt="Flood Detection Sensor Lifestyle" />
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
