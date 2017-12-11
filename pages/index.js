import Link from 'next/link';
import Scroll from 'react-scroll';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import PriceComparisonTable from '../components/priceComparisonTable';
import s from './index.scss';

const LocalLink = Scroll.Link;
const ElementLink = Scroll.Element;

const Index = () => (
  <Layout>
    <Row className={`${s.landingHeaderStyle} no-gutters`}>
      <Container>
        <Header />
        <div className={s.headerCenterText}>
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
                <div className={`${s.tryNowBtn} mx-auto`}>
                  Try it now
                </div>
              </Link>
              <LocalLink to="priceComparisonTable" smooth>
                <div className={`${s.downArrow} mx-auto`}>
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
      <div className={`${s.tryNowBtn} mx-auto ${s.tryNowBtnTwo}`}>
        Try it now
      </div>
    </Link>
    <div className={s.stepsOuter}>
      <div className={s.stepsPhoto}>
        <img src="/static/images/panelPhoto.png" className="img-fluid" />
      </div>
      <Container>
        <div className={s.steps}>
          <Row>
            <Col md={{ size: 7, offset: 5 }}>
              <h1>Switching is easy</h1>
              <h4>80% of equipment is compatible</h4>
              <div className={s.step}>
                <b>1.</b> Order equipment to replace existing sensors in your home
                <p>
                  (Don’t worry, if your sensors are not compatible,
                  you can send back extras for free)
                </p>
              </div>
              <div className={s.step}>
                <b>2.</b> Plug in panel and follow on screen instructions
              </div>
              <div className={s.step}>
                <b>3.</b> Send back unused equipment
              </div>
              <div className={`${s.tryNowBtn} ${s.tryNowBtnThree}`}>
                Try it now
              </div>
            </Col>
          </Row>
        </div>
        <h1 className={s.savingsHeader}>
          Savings so big you can’t help but love it!
        </h1>
        <h3 className={s.savingsSubheader}>
          Every year with Cove is more money in your pocket
        </h3>
        <img className="img-fluid mx-auto" src="/static/images/tempSlider.png"  alt="Savings Estimate"/>
        <Link href="/products">
          <div className={`${s.tryNowBtn} ${s.tryNowBtnFour} mx-auto`}>
            Try it now
          </div>
        </Link>
        <div className={s.testimonial}>
          <div className={s.testimonialBorder} />
          <h1>"Something nice about Cove"</h1>
          <h3>- Someone</h3>
        </div>
      </Container>
      <div className={s.panelBannerMobile}>
        <img className="img-fluid" src="/static/images/panelClose.png" alt="security panel" />
      </div>
      <Container>
        <div className={s.panelBanner} />
        <h1 className={s.guaranteeHeader}>100% satisfaction gauranteed</h1>
        <Row>
          <Col md={{ size: 6, offset: 2 }} sm={12} xs={12}>
            <div className={s.guaranteeText}>
              Try out Cove for 30 days free,
              and if you don’t like it better than your current alarm,
              send it back for a complete refund.
              (Don’t worry, you don’t need to cancel your current system to try ours.)
            </div>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Link href="/products">
              <div className={`${s.tryNowBtn}  ${s.tryNowBtnFive} mx-auto`}>
                Try it now
              </div>
            </Link>
          </Col>
        </Row>
        <div className={s.footer} />
      </Container>
    </div>
  </Layout>
);

export default Index;
