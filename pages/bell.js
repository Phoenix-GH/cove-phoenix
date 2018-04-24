import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import Footer from '../components/footer/footer';
import FooterMobile from '../components/footer/footerMobile';
import s from './bell.scss';

const BellPage = () => (
  <Layout className="">
    <Header color="secondary" callingPage="bell" />
    <Row className="noPadding">
      <div className="sectionTopGreen">
        <Container fluid>
          <Row className="pb-none">
            <Col md={1}>
              &nbsp;
            </Col>
            <Col md={11} className="d-flex justify-content-start pb-none">
              <img className="pt-lg pb-none" src="/static/images/coveLogoWhiteLarge.svg" alt="cove logo" />
            </Col>
          </Row>
          <Row className="pt-none pb-none">
            <Col md={1}>
              &nbsp;
            </Col>
            <Col md={11} className="d-flex justify-content-start align-items-left pt-none pb-none">
              <div className="divBellPhoto1">
                <img className="imgBellPhoto1" src="/static/images/bellPhoto1.png" alt="bell" />
              </div>
              <div className="bellTitle pt-none pb-none">
                  Bell
              </div>
            </Col>
          </Row>
          <Row className="pt-none">
            <Col md={1}>
              &nbsp;
            </Col>
            <Col md={11} className="d-flex justify-content-start align-items-left pt-none">
              <div className="bellTagline pt-none">
                  The Cove Bell video doorbell is coming soon.
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              &nbsp;
            </Col>
            <Col md={11} className="d-flex justify-content-start align-items-left">
              <div className="pb-xl pt-md">
                <btn type="button" className="btnPreOrder" href="/" >Pre-Order</btn>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
    <Row>
      <div className="bottomRow pt-xl">
        <Container fluid>
          <div className="mobileOnly">
            <div className="pt-xl pb-xl">
              <Row>
                <Col sm={3} className="d-flex align-items-left">
                  <div>
                    <img className="imgBellPhoto2" src="/static/images/imgBellFront.png" alt="bell" />
                  </div>
                </Col>
                <Col sm={9} className="d-flex justify-content-middle align-items-start">
                  <div className="d-flex flex-column divMobileIcons ml-lg">
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon1.png" alt="bell" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-lg">
                          <div className="">
                            Mobile App
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-sm pl-xl pr-xl">
                          <img className="imgBellIcon2a ml-sm mt-md" src="/static/images/imgBellIcon2a.png" alt="" />
                          <img className="imgBellIcon2b" src="/static/images/imgBellIcon2b.png" alt="" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-lg">
                          <div className="">
                            Always Compatible
                          </div>
                          <div className="txtTiny">
                            Battery or wired
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon3.png" alt="" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-lg">
                          <div className="">
                            Military Encryption
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon4.png" alt="" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-lg">
                          <div className="">
                            Video Recording
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon5.png" alt="" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-lg">
                          <div className="">
                            Easy Install
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon6.png" alt="" />
                        </div>
                      </Col>
                      <Col sm={8} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeaturesMobile pb-md pl-lg pt-md">
                          <div className="">
                            Night Vision
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="pt-lg">
              <Row>
                <Col sm={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img className="imgBellIcon7" src="/static/images/imgBellIcon7.png" alt="" />
                  </div>
                </Col>
                <Col sm={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img className="imgBellIcon8" src="/static/images/imgBellIcon8.png" alt="" />
                  </div>
                </Col>
                <Col sm={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img className="imgBellIcon9" src="/static/images/imgBellIcon9.png" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divFullCenter">
              <img src="/static/images/bellCell.png" alt="" />
            </div>
          </div>
          <div className="desktopOnly">
            <div className="pt-xl pb-xl">
              <Row>
                <Col md={5} className="d-flex justify-content-middle align-items-center">
                  <div className="d-flex flex-column">
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon1.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Mobile App
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img className="imgBellIcon2a ml-sm mt-md" src="/static/images/imgBellIcon2a.png" alt="" />
                          <img className="imgBellIcon2b" src="/static/images/imgBellIcon2b.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Always Compatible
                          </div>
                          <div className="txtTiny">
                            Battery or wired
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon3.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Military Encryption
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={2} className="d-flex justify-content-between align-items-center">
                  <div className="divFullCenter">
                    <img src="/static/images/imgBellFront.png" alt="" />
                  </div>
                </Col>
                <Col md={5} className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon4.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Video Recording
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon5.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Easy Install
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2} className="d-flex justify-content-middle align-items-center">
                        <div className="mb-lg pb-lg pl-xl pr-xl">
                          <img src="/static/images/imgBellIcon6.png" alt="" />
                        </div>
                      </Col>
                      <Col md={10} className="d-flex justify-content-middle align-items-center">
                        <div className="txtBellFeatures pl-xl ml-lg pb-md">
                          <div className="">
                            Night Vision
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="pt-xl pb-xl mt-xl">
              <Row>
                <Col md={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img src="/static/images/imgBellIcon7.png" alt="" />
                  </div>
                </Col>
                <Col md={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img src="/static/images/imgBellIcon8.png" alt="" />
                  </div>
                </Col>
                <Col md={4} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img src="/static/images/imgBellIcon9.png" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col md={2} className="d-flex justify-content-middle align-items-center">
                  &nbsp;
                </Col>
                <Col md={8} className="d-flex justify-content-middle align-items-center">
                  <div className="divFullCenter">
                    <img src="/static/images/bellCell.png" alt="" />
                  </div>
                </Col>
                <Col md={2} className="d-flex justify-content-middle align-items-center">
                  &nbsp;
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </Row>
    <Row>
      <div className="desktopOnly">
        <Row>
          <Col md={12} className="d-flex justify-content-middle align-items-center">
            <div className="divFull" >
              <Footer color="secondary" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="mobileOnly">
        <FooterMobile color="secondary" />
        <Row>
          <Col xs={12} sm={12} md={3}>
            <input className="email" type="textarea" name="email" id="emailText" placeholder="Enter Email for Cove news" />
            <div className="socialMedia">
              <img src="/static/images/facebook.png" alt="facebook" />
              <img src="/static/images/twitter.png" alt="twitter" />
              <img src="/static/images/instagram.png" alt="instagram" />
              <img src="/static/images/youtube.png" alt="youtube" />
              <img src="/static/images/whatsapp.png" alt="whatsapp" />
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="bottomSection">
          &nbsp;
        </div>
      </Row>
    </Row>
    <style jsx>{s}</style>
  </Layout>
);

export default BellPage;
