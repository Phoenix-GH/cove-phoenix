import Link from 'next/link';
import Scroll from 'react-scroll';
import { Container, Row, Col, Nav, NavItem, Input } from 'reactstrap';
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

const coverSectionTitle = 'If it\'s Cove, it\'s covered.';
const setupSectionTitle = 'A whole new simple setup process';
const setupDescriptionText = 'Most security systems are designed for technicians to install, but you\'re not a technician. Cove Protect was design3ed for you. It\'s easy on you while still being tough on the bad guys.'

const Index = () => (
  <Layout className="home">
    <Header color="secondary" />
    <Row>
      <div className="coverSection">
        <Row>
          <Col xs={0} sm={6} md={6}>
            <div className="coverLeftArea">
              <img src="/static/images/downArrow.png" />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div className="coverRightArea">
              <h1>
                {coverSectionTitle}
              </h1>
              <a>
                <img src="/static/images/watchVideo.png" />
                <span>Watch video</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
    <Row>
      <div className="setupProcessSection">
        <h2>{setupSectionTitle}</h2>
        <p>{setupDescriptionText}</p>
        <div className="products">
          <Row>
            <Col xs={12} sm={12} md={3}>
              <div>
                <div className="imageArea">
                  <img src="/static/images/coverTouch.png" />
                </div>
                <h3>Cove Touch</h3>
                <p>With the guided installation process on the touchscreen, Cove has an install process that even grandma can handle.</p>
                <a className="watchVideoLink">
                  <img src="/static/images/watchVideo.png" />
                  <span>Watch install video</span>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div>
                <div className="imageArea">
                  <img src="/static/images/motionSensor.png" />
                </div>
                <h3>Sensors For Everything</h3>
                <p>Entry point sensors, motion sensors, and much more. Cove Covers all areas of the home.</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div>
                <div className="imageArea">
                  <img src="/static/images/smokeAlarm.png" />
                </div>
                <h3>Protect People</h3>
                <p>Don't just protect your things, protect those you love. Smoke, carbon monoxide, flood/freeze sensors cover it.</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <div>
                <div className="imageArea">
                  <img src="/static/images/coveApp.png" className="coveAppImg" />
                </div>
                <h3>Cove app</h3>
                <p>Know what's happening anywhere you go. You deserve to be the first to know.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
    <Row>
      <div className="builtProductsSection">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="descriptionArea">
              <h2>Arming and disarming built around you.</h2>
              <p>Arm and disarm your system in a way that makes sense. We feel that security should be easy and effortless to use.</p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={6} />
        </Row>
      </div>
    </Row>
    <Row>
      <div className="liveAssistSection">
        <Row>
          <Col xs={0} sm={0} md={4} className="p-0">
            <div className="leftArea">
              <img src="/static/images/assistOperator.png" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="rightArea">
              <h2>Cove LiveAssist</h2>
              <h3>24/7 professional monitoring with Cove LiveAssist gives you real protection all the time, not when you're just looking.</h3>
              <ol>
                <li>Never worry again with Cove LIveAssist coming through the two-way intercom built right into the 7th touchscreen. (no landline necessary)</li>
                <li>Cove LiveAssist is smart, and if we can't communicate with you directly through your two-way intercom on your panel, we will get a hold of you on your cellphone, text message, mobile app, and more.</li>
                <li>In a real emergency, we will contact your local authorities. You can customize notifications you receive so that you aren't bothered with unnecessary alerts.</li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
    <Row>
      <div className="paySecuritySection">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="descriptionArea">
              <div className="contentTextArea">
                <h2>Less Markup.</h2>
                <h2 className="greenTitle">More Security.</h2>
                <p>When you pay more for home security, you're paying for more middlemen and more mark-up. We cut out the middlemen and sell direct to you. You get exceptional security at a fraction of the price.</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div>
              <img src="/static/images/cutOutMiddleMan.png" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div>
              <img src="/static/images/cashFlow.png" />
            </div>
          </Col>
        </Row>
      </div>
    </Row>
    <Row>
      <div className="eleganceSection">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="descriptionArea">
              <div className="contentTextArea">
                <h2>New elegance and beauty. Same incredible protection.</h2>
                <p>Security systems shouldn't be made to be an eye sore for your home. We designed every element to be beautiful and seamless to fit perfectly into your home.</p>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={6}></Col>
        </Row>
      </div>
    </Row>
    <Row>
      <div className="tableSection">
        <div className="tableArea">
          <div>
            <Row>
              <Col md={6} />
              <Col md={3}>
                <img src="/static/images/logoTeal.svg" />
              </Col>
              <Col md={3}>
                <h2>Them</h2>
              </Col>
            </Row>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Long term contracts</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">Not our style</p>
                </Col>
                <Col md={3}>
                  <p>3-5 years</p>
                </Col>
              </Row>
            </li>
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Monthly monitoring</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">$19.99/mo</p>
                </Col>
                <Col md={3}>
                  <p>$44.99/mo</p>
                </Col>
              </Row>
            </li>
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Cancelation fees</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">None</p>
                </Col>
                <Col md={3}>
                  <p>Up to $2,000</p>
                  <p>Crazy, we know!</p>
                </Col>
              </Row>
            </li>
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Service windows</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">None</p>
                </Col>
                <Col md={3}>
                  <p>1-3 weeks</p>
                </Col>
              </Row>
            </li>
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Equipment payment options at 0% APR</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">Yes</p>
                </Col>
                <Col md={3}>
                  <p>No</p>
                </Col>
              </Row>
            </li>
            <li className="list-group-item">
              <Row>
                <Col md={6}>
                  <p className="listHeader">Warranty</p>
                </Col>
                <Col md={3}>
                  <p className="greenText">3 years</p>
                </Col>
                <Col md={3}>
                  <p>3 years</p>
                  <p>$45 per service</p>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </div>
    </Row>
    <Row>
      <div className="jordanSayingSection d-flex justify-content-center">
        <div className="sayingTextArea">
          <hr />
          <p className="sayingText">"Cove was so much less than competitors and still maintains the quality I was used to."</p>
          <p className="authorName">- Jordan H.</p>
          <hr />
        </div>
      </div>
    </Row>
    <Row>
      <div className="savingsSection d-flex align-items-center">
        <h2>Savings so big, you can't help but love it!</h2>
        <p>The average consumer saves every year by choosing Cove over other alarm companies.</p>
        <div className="savingsLabel">
          <h3>$1200</h3>
          <h6>In savings</h6>
        </div>
        <img src="/static/images/savingLine.png" />
      </div>
    </Row>
    <Row>
      <div className="processSection">
        <Row>
          <Col xs={12} sm={12} md={8}>
            <div className="leftArea">
              <h2>The most simple setup process ever.</h2>
              <p>Our unprecedented setup process makes it easy for everyone.</p>
              <ol>
                <li>Plug in your panel</li>
                <li>Follow on screen instructions.</li>
                <li>There is not step 3.</li>
              </ol>
              <a className="watchVideoLink">
                <img src="/static/images/watchVideo.png" />
                <span>Watch install video</span>
              </a>
            </div>
          </Col>
          <Col xs={0}  sm={0} md={4}>
            <div className="rightArea">
              <img src="/static/images/packageBox.png" />
            </div>
          </Col>
        </Row>
      </div>
    </Row>
    <Row>
      <div className="riskFreeSection">
        <img src="/static/images/riskFreeTrial.png" />
        <h2>100% satisfaction guaranteed</h2>
        <p>Try out Cove for 60 days free, and if you don't like it more than your children, yo ucan send it back complete free of charge. We are that good.</p>
      </div>
    </Row>
    <Row>
      <div className="footer">
        <Row>
          <Col xs={12} sm={12} md={3}>
            <ul>
              <li className="listHeader">
                Store
              </li>
              <li>
                <a>Cove Protect</a>
              </li>
              <li>
                <a>Cove Touch</a>
              </li>
              <li>
                <a>Cove Smoke Detector</a>
              </li>
              <li>
                <a>Cove Food Detector</a>
              </li>
              <li>
                <a>Cove Carbon Monoxide</a>
              </li>
              <li>
                <a>Cove Camera</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <ul>
              <li className="listHeader">
                Company
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Responsibility</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Press</a>
              </li>
              <li>
                <a>Video</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <ul>
              <li className="listHeader">
                Programs
              </li>
              <li>
                <a>Insurance Partners</a>
              </li>
              <li>
                <a>Rebates and Rewards</a>
              </li>
              <li>
                <a>Cove for Business</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={3}>
            <input type="textarea" name="email" id="emailText" placeholder="Enter Email for Cove news" />
            <div className="socialMedia">
              <img src="/static/images/facebook.png" />
              <img src="/static/images/twitter.png" />
              <img src="/static/images/instagram.png" />
              <img src="/static/images/youtube.png" />
              <img src="/static/images/whatsapp.png" />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="bottomSection">
            <img src="/static/images/bottomStrip.png" />
          </div>
        </Row>
      </div>
    </Row>
    <style jsx>{s}</style>
  </Layout>
);

export default Index;
