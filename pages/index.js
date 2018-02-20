import Link from 'next/link';
import Scroll from 'react-scroll';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import PriceComparisonTable from '../components/priceComparisonTable';
import CoveLiveAssist from '../components/coveLiveAssist';
import Winwin from '../components/winwin';
import EstimateSlider from '../components/estimateSlider';
import s from './index.scss';
import gs from '../components/styles.scss';

const LocalLink = Scroll.Link;
const ElementLink = Scroll.Element;

const Index = () => (
  <Layout className="home">
    <Row className="landingHeaderStyle no-gutters">
      <Container>
        <Header>
          <Nav className="mainNav nav-fill">
            <Link href="/login">
              <NavItem>Alarm System</NavItem>
            </Link>
            <NavItem>Life Safety</NavItem>
            <NavItem>Medical Button</NavItem>
            <NavItem>Camera</NavItem>
          </Nav>
        </Header>
        <div className="headerCenterText">
          <h1>Fair prices, real security</h1>
          <h3>Starting at $19.99</h3>
          <Row className="align-items-end justify-content-center">
            <Col
              xs={6}
              className="mx-auto"
              style={{
              marginTop: '30px',
              position: 'relative',
              bottom: '18%',
            }}
            >
              <Link href="/products">
                <div className="tryNowBtn mx-auto">
                  Try it now
                </div>
              </Link>
              <LocalLink to="priceComparisonTable" smooth>
                <div className="downArrow mx-auto">
                  <img src="/static/images/downArrow.png" alt="down arrow" />
                </div>
              </LocalLink>
            </Col>
          </Row>
        </div>
      </Container>
    </Row>
    <ElementLink name="priceComparisonTable">
      <PriceComparisonTable />
    </ElementLink>
    <Link href="/products">
      <div className="tryNowBtn mx-auto tryNowBtnTwo">
        Try it now
      </div>
    </Link>
    <CoveLiveAssist />
    <Container className="markupComparisonContainer">
      <Row>
        <Col md={{ offset: 1, size: 4 }} className="markupTextCol">
          <h1>Less Markup <br /><span className="primaryHighlight">More Security</span></h1>
          <p>
            When you pay more for home security,
            you’re paying for more middlemen and more mark-up.
            We cut out the middlemen and sell direct to you.
            You get exceptional security at a fraction of the price.
          </p>
          <Link href="/products">
            <div className="tryNowBtn blockCenter">
              Try it now
            </div>
          </Link>
        </Col>
        <Col md={{ offset: 2, size: 2 }}>
          <img src="/static/images/markupChain.png" alt="industry markup" />
        </Col>
        <Col md={2}>
          <img src="/static/images/coveMarkupChain.png" alt="Cove doesn't have a middleman" />
        </Col>
      </Row>
    </Container>
    <Winwin />
    <div className="testimonial">
      <div className="testimonialBorder" />
      <h1>"Something nice about Cove"</h1>
      <h3>- Someone</h3>
    </div>
    <Container className="dontbefooled">
      <Row>
        <Col md={6} className="dontbefooledLeftCol">
          <Link href="/products">
            <div className="tryNowBtn dontbefooledTryNow">
              Try it now
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <h1>Don’t be fooled by cheap DIY Security</h1>
          With Cove, you have Crash and Connection alerts so no one can mess with your home or security system.
        </Col>
      </Row>
    </Container>
    <div className="stepsOuter">
      <div className="stepsPhoto">
        <img src="/static/images/panelPhoto.png" className="img-fluid" />
      </div>
      <Container>
        <div className="steps">
          <Row>
            <Col md={{ size: 7, offset: 1 }}>
              <h1>Switching is easy</h1>
              <h4>80% of equipment is compatible</h4>
              <div className="step">
                <b>1.</b> Order equipment to replace existing sensors in your home
                <p>
                  (Don’t worry, if your sensors are not compatible,
                  you can send back extras for free)
                </p>
              </div>
              <div className="step">
                <b>2.</b> Plug in panel and follow on screen instructions
              </div>
              <div className="step">
                <b>3.</b> Send back unused equipment
              </div>
              <Link href="/products">
                <div className="tryNowBtn">
                  Try it now
                </div>
              </Link>
            </Col>
          </Row>
        </div>
        <h1 className="savingsHeader">
          Savings so big you can’t help but love it!
        </h1>
        <h3 className="savingsSubheader">
          Every year with Cove is more money in your pocket
        </h3>
        <EstimateSlider />
        <div id="__react-content"></div>
        <Link href="/products">
          <div className="tryNowBtn tryNowBtnFour mx-auto">
            Try it now
          </div>
        </Link>
        <div className="testimonial">
          <div className="testimonialBorder" />
          <h1>"Something nice about Cove"</h1>
          <h3>- Someone</h3>
        </div>
      </Container>
      <div className="panelBannerMobile">
        <img className="img-fluid" src="/static/images/panelClose.png" alt="security panel" />
      </div>
      <Container>
        <div className="panelBanner" />
        <h1 className="guaranteeHeader">100% satisfaction guaranteed</h1>
        <Row>
          <Col md={{ size: 6, offset: 2 }} sm={12} xs={12}>
            <div className="guaranteeText">
              Try out Cove for 30 days free,
              and if you don’t like it better than your current alarm,
              send it back for a complete refund.
              (Don’t worry, you don’t need to cancel your current system to try ours.)
            </div>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Link href="/products">
              <div className="tryNowBtn tryNowBtnFive mx-auto">
                Try it now
              </div>
            </Link>
          </Col>
        </Row>
        <div className="footer" />
      </Container>
    </div>
    <style jsx>{s}</style>

  </Layout>
);

export default Index;
