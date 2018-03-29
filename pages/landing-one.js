import { Row, Col } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/landing/header';
import Cover from '../components/landing/cover';
import Testimonial from '../components/landing/testimonial';
import s from './landing-one.scss';

const LandingOne = () => (
  <Layout className="landing-one">
    <Header/>
    <Cover 
      backgroundImage="/static/images/landing-one-cover.jpg"
      text="If it’s Cove, <br>it’s covered."
      align="right"
      color="#4E5661" />
    <div className="section">
      <h1 className="font-size-54 text-secondary text-center mt-112">The security you have been waiting for.</h1>
      <p className="font-size-24 text-secondary text-center mt-28 mx-72">Cove Protect security system is a system designed around you. We make the set up process incredibly easy and effortless. With 24/7 professional monitoring, Cove LiveAssist, motion detection, glass break detection, key remotes to make turning off and on your system easy, and constant updates, your home will never be out of date. </p>
      <div className="flex-col align-items-center mx-36 mt-156">
        <div className="clearfix">
          <div className="float-left w-fit-content">
            <p className="mb-44 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/smartphone.png"/></span> Mobile App</p>
            <p className="mb-44 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/headset.png"/></span> Cove LiveAssist</p>
            <p className="mb-0 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/vpnLock.png"/></span> Military Encription</p>
          </div>
        </div>
        <img src="/static/images/coveProduct.png"/>
        <div className="clearfix">
          <div className="float-right w-fit-content">
            <p className="mb-44 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/professionalMonitoring.png"/></span> Professional Monitoring</p>
            <p className="mb-44 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/easyInstall.png"/></span> Easy Install</p>
            <p className="mb-0 font-size-16 text-secondary text-nowrap w-fit-content"><span className="w-100 text-center display-inline"><img src="/static/images/simpleUI.png"/></span> Simple UI</p>
          </div>
        </div>
      </div>
      <Testimonial
        className="mt-240 mb-72"
        text="Cove was so much less than competitors and still maintains the quality I was used to."
        author="- Jordan H."/>
    </div>
    <div className="section bg-secondary--lighter pb-120">
      <Row>
        <Col md={8}>
          <div className="pt-172 pl-84">
            <h1 className="text-secondary font-size-54 line-height-84">Not just noise makers,<br />these are live savers.</h1>
            <p className="text-secondary font-size-24 mt-56">With Cove Protect life safety system, your CO, Smoke, and flood detectors will not just make noise, they will actually have our 24/7 professional monitoring station call you and make sure everything is ok and call 911 for you if you’re not home.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="pt-132">
            <p className="font-size-40"><span className="w-200 text-center display-inline"><img src="/static/images/smoke.png"/></span> Smoke</p>
            <p className="font-size-40"><span className="w-200 text-center display-inline"><img src="/static/images/flood.png"/></span> Flood</p>
            <p className="font-size-40"><span className="w-200 text-center display-inline"><img src="/static/images/coveCO.png"/></span> CO</p>
          </div>
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </Layout>
);

export default LandingOne;
