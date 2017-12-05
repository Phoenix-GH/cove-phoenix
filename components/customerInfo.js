import { Row, Col } from 'reactstrap'
import Input from '../components/input'

const CustomerInfo = () => (
  <div>
    <div className="customerInfo">
      <h3>Customer Information</h3>
      <Row>
        <Col  xs={12} sm={12} md={6}>
          <Input label="First Name" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="Email Address" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Phone" />
        </Col>
      </Row>
    </div>
    <div className="customerInfo">
      <h3>Monitoring Information</h3>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <Input label="Monitoring Address" />
        </Col>
        <Col md={4}>
          <Input label="Apt # or Unit #" />
        </Col>
        <Col md={4}>
          <Input label="Postal Code" />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="Emergency Contact" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Phone" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="Verbal Password" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Mastercode" />
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
      }
    `}</style>
  </div>
)

export default CustomerInfo
