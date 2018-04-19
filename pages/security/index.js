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
            
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem motionSensor">
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem totalControl">
            
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem protectionStarts">
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem totalSecurity">
            
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem allHomes">
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem instaText">
            
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem liveAssist">
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem easyInstall">
            
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem lifeSafety">
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className="gridItem noContracts">
            
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
