import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import InfoBox from '../components/infoBox/infobox';
import s from './paymentInfo.scss';

const PaymentInfo = () => (
  <div>
    <div className="customerInfo">
      <h3>Payment Selection</h3>
      <Row className="justify-content-between">
        <Col>
          <h4>Credit Card</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Input label="Name on card" />
        </Col>
        <Col xs={4}>
          <img src="/static/images/creditcards.png" alt="credit card icon" />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Input label="Card number" />
        </Col>
        <Col xs={2}>
          <Input label="MM/YY" />
        </Col>
        <Col xs={2}>
          <Row>
            <Input label="CVV" />
            <InfoBox />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Terms and Conditions</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="acceptanceRow">
            <Checkbox />
            <div className="acceptance">
              I accept the <Link href="#link"><span className="linkTertiary"> Terms and Conditons</span></Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default PaymentInfo;
