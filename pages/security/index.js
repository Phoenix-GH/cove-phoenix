import { Container, Row, Col } from 'reactstrap';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';
import s from './index.scss';

const coverSectionTitle = 'If it\'s Cove, it\'s covered.';

const Index = () => (
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
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem coveProtect">
            <div className="wrapper">
              <h3>Cove Protect</h3>
              <p>
                Cove Protect just does it better. Safety, security and peace of mind you can trust.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem motionSensor">
            <div className="wrapper">
              <h3>Motion Sensor</h3>
              <p>
                With motion protection, you receive state of the art protection thorughout the whole home.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem totalControl">
            <div className="wrapper">
              <h3>Total Control</h3>
              <p>
                It&apos;s your system, control it in your way.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem protectionStarts">
            <div className="wrapper">
              <h3>Protection stars here</h3>
              <p>
                FBI studies show you are 3x less likely to have a break in with a Cove security sign out front.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem totalSecurity">
            <div className="wrapper">
              <h3>Total Security</h3>
              <p>
                With security for every part of the home, we make sure you are 100% covered.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem allHomes">
            <div className="wrapper">
              <h3>All Homes</h3>
              <p>
                Homes, apartments, condos, bedrooms, etc. Cove is able to go where you live, no hassle.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem instaText">
            <div className="wrapper">
              <h3>Cove InstaText</h3>
              <p>
                Get immediate notifications and respond to emergencies right from your text messges.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem liveAssist">
            <div className="wrapper">
              <h3>Cove LiveAssist</h3>
              <p>
                With Cove LiveAssist, we communicate with you immediately thorough your panel.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem easyInstall">
            <div className="wrapper">
              <h3>Cove Easy Install</h3>
              <p>
                Cove has a revolutionary install process that allows anyone to set up their system in minutes.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem lifeSafety">
            <div className="wrapper">
              <h3>Cove Life Safety</h3>
              <p>
                Protect your loved ones with Cove Smoke, Flood, CO detectors.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem noContracts">
            <div className="wrapper">
              <h3>No Contracts</h3>
              <p>
                We believe in consumer freedom to choose. That&apos;s why we don&apos;t do long term monitoring contracts.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem guarantee">
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} />
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem neverWorry">
          </div>
        </Col>
      </Row>
    </div>
    <Footer />
    <style jsx>{s}</style>
  </Layout>
);

export default Index;
