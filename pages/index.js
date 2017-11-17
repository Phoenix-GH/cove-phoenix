import Link from 'next/link'
import Layout from '../components/minimalLayout'
import Header from '../components/homeHeader'
import PriceComparisonTable from '../components/priceComparisonTable'
import { Container, Row, Col } from 'reactstrap'
import Scroll from 'react-scroll'

let LocalLink = Scroll.Link;
let ElementLink = Scroll.Element;

const Index = () => (
  <Layout>
    <Row className="no-gutters" style={landingHeaderStyle} >
      <Container>
        <Header />
        <div className="headerCenterText">
          <h1>Fair prices, real security</h1>
          <h3>Starting at $19.99</h3>
          <Row className="align-items-end justify-content-center">
            <Col xs={4} className="mx-auto" style={{
              marginTop: '30px',
              position: 'relative',
              bottom: '18%',
            }}>
              <Link href="/products">
                <div className="tryNowBtn mx-auto">
                  Try it now
                </div>
              </Link>
              <LocalLink to="priceComparisonTable" smooth={true}>
                <div  className="mx-auto downArrow">
                  <img src="/static/images/downArrow.png"  />
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
    <div className="stepsOuter">
      <div className="stepsPhoto"><img src="/static/images/panelPhoto.png" className="img-fluid"/></div>
      <Container>
        <div className="steps">
          <Row>
            <Col md={{ size: 7, offset: 5 }}>
              <h1>Switching is easy</h1>
              <h4>80% of equipment is compatible</h4>
              <div className="step">
                <b>1.</b> Order equipment to replace existing sensors in your home
                <p>(Don’t worry, if your sensors are not compatible, you can send back extras for free)</p>
              </div>
              <div className="step">
                <b>2.</b> Plug in panel and follow on screen instructions
              </div>
              <div className="step">
                 <b>3.</b> Send back unused equipment
              </div>
              <div className="tryNowBtn tryNowBtnThree">
                Try it now
              </div>
            </Col>
          </Row>
        </div>
        <h1 className="savingsHeader">
          Savings so big you can’t help but love it!
        </h1>
        <h3 className="savingsSubheader">
          Every year with Cove is more money in your pocket
        </h3>
        <img className="img-fluid mx-auto" src="/static/images/tempSlider.png" />
        <Link href="/products">
          <div className="tryNowBtn tryNowBtnFour mx-auto">
            Try it now
          </div>
        </Link>
        <div className="testimonial">
          <div className="testimonialBorder"></div>
          <h1>"Something nice about Cove"</h1>
          <h3>- Someone</h3>
        </div>
      </Container>
      <Container>
        <div className="panelBanner"></div>
        <h1 className="guaranteeHeader">100% satisfaction gauranteed</h1>
        <Row>
          <Col md={{ size: 6, offset: 2 }}>
            Try out Cove for 30 days free, and if you don’t like it better than your current alarm,
            send it back for a complete refund.
            (Don’t worry, you don’t need to cancel your current system to try ours.)
          </Col>
          <Col md={3}>
            <Link href="/products">
              <div className="tryNowBtn mx-auto">
                Try it now
              </div>
            </Link>
          </Col>
        </Row>
     </Container>
    </div>
    <style jsx>{`
      .steps {
        background-image: url("/static/images/greyRectangle.png");
        background-repeat: no-repeat;
        background-size: cover;
        h1 {
          font-family: GothamRoundedBold;
          font-size: 60px;
          margin-top: 80px;
        }
        h4 {
          font-family: GothamRoundedBook;
          font-size: 24px;
          margin-top: 20px;
        }
      }
      .stepsOuter {
        position: relative;
      }
      .stepsPhoto {
        position: absolute;
        top: 80px;
      }
      .step {
        font-size: 18px;
        margin-top: 48px;
        padding-bottom:30px;
        font-family: 'Open Sans', sans-serif;
        p {
          font-size: 14px;
          font-style: italic;
        }
      }
      .headerCenterText {
        position: relative;
        color: #FFFFFF;
        text-align: center;
        top: 22%;
        h1 {
          font-size: 72px;
          font-family: GothamRoundedBold
        }
        h3 {
          font-size: 60px;
          font-family: GothamRoundedBook;
        }
      }
      .tryNowBtn {
        color: #FFFFFF;
        width: 162px;
        height: 40px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background: #F17927;
        font-size: 16px;
        text-align: center;
        font-family: GothamRoundedBook;
        font-weight: bold;
        padding-top: 8px;
      }
      .tryNowBtnTwo {
        margin-top: 48px;
        margin-bottom: 96px;
      }
      .tryNowBtnThree {
        position: relative;
        left: 300px;
        margin-bottom: 80px;
        margin-top: 48px;
      }
      .tryNowBtnFour{
        margin-top: 48px;
        margin-bottom: 96px;
      }
      .downArrow {
        margin-top: 40px;
      }
      .savingsHeader {
        font-size: 60px;
        font-family: GothamRoundedBold;
        color: #00B19B;
        text-align: center;
        margin-top: 96px;
      }
      .savingsSubheader {
        font-size: 24px;
        font-family: GothamRoundedBook;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 48px;
      }
      .testimonial {
        position: relative;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 96px;
        color: #00B19B;
        text-align: center;
        font-family: GothamRoundedBookItalic;
        h1 {
          padding-top: 25px;
          font-size: 60px;
        }
        h3 {
          padding-bottom: 25px;
          font-size: 24px;
        }
        .testimonialBorder{
          &::before {
            content : "";
            position: absolute;
            left: 25%;
            top: 0;
            height: 2px;
            width: 50%;
            border-bottom:1px solid #00B19B;
          }
          &::after {
            content : "";
            position: absolute;
            left: 25%;
            bottom: 0;
            height: 2px;
            width: 50%;
            border-bottom:1px solid #00B19B;
          }
        }
      }
      .panelBanner{
        background-image: url("/static/images/panelClose.png");
        background-size: cover;
        min-height: 440px;
        width: 100%;
        margin-bottom: 48px;
      }
      .guaranteeHeader {
        font-size: 60px;
        font-family: GothamRoundedBold;
        color: #00B19B;
        text-align: center;
        margin-bottom: 48px;
      }
    `}
    </style>
  </Layout>
)

export default Index


const landingHeaderStyle = {
    backgroundImage: 'url("/static/images/landingBanner.png")',
    height: '100%',
    minHeight: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
