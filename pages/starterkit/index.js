import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import cx from 'classnames';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';
import s from './index.scss';

const coverSectionTitle = 'If it\'s Cove, it\'s covered.';
const descriptionSectionTitle = 'What\'s in the starter kit';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  selectTab = (index) => {
    this.setState({ activeIndex: index });
  }

  render() {
    const {
      activeIndex,
    } = this.state;

    return (
      <Layout>
        <Container>
          <Header color="secondary" />
        </Container>
        <div className="homeContainer">
          <div className="coverSection">
            <Row>
              <Col xs={0} sm={0} md={8} lg={6}>
                <div className="coverLeftArea">
                  <h1>
                    {coverSectionTitle}
                  </h1>
                  <button>JOIN FREE FOR A MONTH</button>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={6}>
                <div className="coverRightArea">
                  <WatchVideoLink link="/" />
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <div className="descriptionSection">
              <h2>{descriptionSectionTitle}</h2>
              <div className="products">
                <Row>
                  <Col xs={12} sm={12} md={6} lg={3}>
                    <div>
                      <div className="imageArea">
                        <img src="/static/images/coveProtectPanel.png" alt="" />
                      </div>
                      <h3>Cove Portect Panel</h3>
                      <a className="learnMore" href="/">
                        Learn More
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={3}>
                    <div>
                      <div className="imageArea">
                        <img src="/static/images/doorSensor.png" alt="" />
                      </div>
                      <h3>2 Door/Window Sensors</h3>
                      <a className="learnMore" href="/">
                        Learn More
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={3}>
                    <div>
                      <div className="imageArea">
                        <img src="/static/images/keyRemote.png" alt="" />
                      </div>
                      <h3>1 Key Remote</h3>
                      <a className="learnMore" href="/">
                        Learn More
                      </a>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={3}>
                    <div>
                      <div className="imageArea">
                        <img src="/static/images/motionSensor2.png" alt="" />
                      </div>
                      <h3>1 Motion Sensor</h3>
                      <a className="learnMore" href="/">
                        Learn More
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>

          <Row>
            <div className="starterKitTabsSection">
              <div className="tabHeader">
                <div className={`tabBarItem${activeIndex === 0 ? ' selected' : ''}`} onClick={() => this.selectTab(0)}>
                  <img src="/static/images/starterKitTab0.png" alt="" />
                  <p>No commitments.</p>
                  <p>Cancel online at anytime.</p>
                </div>
                <div className={`tabBarItem${activeIndex === 1 ? ' selected' : ''}`} onClick={() => this.selectTab(1)}>
                  <img src="/static/images/starterKitTab1.png" alt="" />
                  <p>Control your alarm</p>
                  <p>from anywhere.</p>
                </div>
                <div className={`tabBarItem${activeIndex === 2 ? ' selected' : ''}`} onClick={() => this.selectTab(2)}>
                  <img src="/static/images/starterKitTab2.png" alt="" />
                  <p>Pick your price.</p>
                </div>
              </div>

              <div className="tabBody">
                <div className={`tabBar${activeIndex === 0 ? ' selected' : ''}`}>
                  <div className="content">
                    <p className="commitment">
                      If you decide that Cove isn’t for you, that’s no problem. No commitment. Cancel online anytime.                  
                    </p>
                    <img className="commitmentImg" src="/static/images/commitment.png" alt="" />
                  </div>                  
                  <button className="joinBtn">JOIN FREE FOR A MONTH</button>
                </div>
                <div className={`tabBar${activeIndex === 1 ? ' selected' : ''}`}>
                  <p className="controlSystemTitle">
                    Control your system your way.                  
                  </p>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <div className="controlContent">
                        <div className="imageArea">
                          <img src="/static/images/landscape.png" />
                        </div>
                        <p>Panel</p>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <div className="controlContent">
                        <div className="imageArea">
                          <img src="/static/images/device.png" />
                        </div>
                        <p>Android/iOS App</p>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <div className="controlContent">
                        <div className="imageArea">
                          <img src="/static/images/keyRemote1.png" />
                        </div>
                        <p>Key Remote</p>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <div className="controlContent">
                        <div className="imageArea">
                          <img src="/static/images/voice.png" />
                        </div>
                        <p>voice</p>
                      </div>
                    </Col>                    
                  </Row>
                  <button className="joinBtn joinBtn--second">JOIN FREE FOR A MONTH</button>
                </div>
                <div className={`tabBar${activeIndex === 2 ? ' selected' : ''}`}>
                  
                </div>

              </div>
            </div>
          </Row>
        </div>
        <Footer />
        <style jsx>{s}</style>
      </Layout>
    );
  }
}

export default Index;
