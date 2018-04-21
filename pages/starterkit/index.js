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
  }

  componentWillReceiveProps(nextProps) {
    const activeStage = this.props.stage ? this.props.stage : 0;
  }

  render() {
    const activeStage = this.props.stage ? this.props.stage : 0;
    const tab0ClassName = cx('flexCol', {
      activeStage: activeStage === '0',
    });
    const tab1ClassName = cx('flexCol', {
      activeStage: activeStage === '1',
    });
    const tab2ClassName = cx('flexCol', {
      activeStage: activeStage === '2',
    });

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
              <div className={tab0ClassName}>
                <Link href={{ pathname: '/starterkit', query: { stage: 0 } }}>
                  <div className="checkoutStageOne link">
                    <span className="stageLabel">Tab1</span>
                    <div className="stageIndicator" />
                  </div>
                </Link>
              </div>
              <div className={tab1ClassName}>
                <Link href={{ pathname: '/starterkit', query: { stage: 1 } }}>
                  <div className={`${s.checkoutStageTwo} ${s.link}`}>
                    <span className="stageLabel">Tab2</span>
                    <div className="stageIndicator" />
                  </div>
                </Link>
              </div>
              <div className={tab2ClassName}>
                <Link href={{ pathname: '/starterkit', query: { stage: 2 } }}>
                  <div className={`${s.checkoutStageThree} ${s.link}`}>
                    <span className="stageLabel">Tab3</span>
                    <div className="stageIndicator" />
                  </div>
                </Link>
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

Index.propTypes = {
  stage: PropTypes.number
};

Index.defaultProps = {
  stage: 0
};

export default Index;
