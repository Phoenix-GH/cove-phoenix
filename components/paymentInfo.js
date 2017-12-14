import { Row, Col } from 'reactstrap';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import s from './paymentInfo.scss';

const PaymentInfo = () => (
  <div>
    <div className={s.customerInfo}>
      <h3>Payment Selection</h3>
      <Row className="justify-content-between">
        <Col xs="3">
          <h4>Credit Card</h4>
        </Col>
        <Col xs="2">
          <img src="/static/images/creditcards.png" alt="credit card icon" />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Input label="Credit Card" placeholder="0000 - 0000 - 000 - 0000" />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Input label="Name on Card" />
        </Col>
        <Col xs={3}>
          <Input label="Expiration Date" />
        </Col>
        <Col xs={3}>
          <Input label="CVV Code" />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <div className={s.termsCheckbox}>
            <Checkbox />
          </div>
        </Col>
        <Col xs={11}>
          <Input label="Full Name" />
        </Col>
        <Col xs={12}>
          <div className={s.financeAgreement}>
            To accept terms of
            <span className={s.linkTertiary}>Financing Agreement </span>
            please type full name below and click accept
          </div>
        </Col>
        <Col xs={1}>
          <div className={s.termsCheckbox}>
            <Checkbox />
          </div>
        </Col>
        <Col xs={11}>
          <div className={s.acceptance}>
            I accept the <span className={s.linkTertiary}> Terms and Conditons</span>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default PaymentInfo;
