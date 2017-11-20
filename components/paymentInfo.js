import { Row, Col } from 'reactstrap'
import Input from '../components/input'
import Checkbox from '../components/checkbox'

const PaymentInfo = () => (
  <div>
    <div className="customerInfo">
      <h3>Payment Selection</h3>
      <Row className="justify-content-between">
        <Col xs="3">
          <h4>Credit Card</h4>
        </Col>
        <Col xs="2">
          <img src="/static/images/creditcards.png" />
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
          <div className="termsCheckbox">
            <Checkbox />
          </div>
        </Col>
        <Col xs={11}>
          <Input label="Full Name" />
        </Col>
        <Col xs={12}>
          <div className="financeAgreement">
            To accept terms of <span className="linkTertiary">Financing Agreement </span>please type full name below and click accept
          </div>
        </Col>
        <Col xs={1}>
          <div className="termsCheckbox">
            <Checkbox />
          </div>
        </Col>
        <Col xs={11}>
          <div className="acceptance">
            I accept the <span className="linkTertiary"> Terms and Conditons</span>
          </div>
        </Col>
      </Row>
    </div>
    <style jsx>{`
      .customerInfo {
        h3 {
          margin-top: 60px;
          margin-bottom: 30px;
          font-size: 24px;
          font-family: GothamRoundedBold;
          color: #191E2B;
        }
        h4 {
          font-family: GothamRoundedBold;
          font-size: 20px;
        }
        .linkTertiary {
          font-weight: bold;
          color: #008CFF;
        }
        .termsCheckbox {
        }
        .financeAgreement {
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .acceptance {
          font-size: 14px;
          padding-top: 14px;
        }
      }
    `}</style>
  </div>
)

export default PaymentInfo
