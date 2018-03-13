import { Row, Col } from 'reactstrap';
import Input from '../components/input';
import s from './customerInfo.scss';

const CustomerInfo = ({ onChangeHandler, fields }) => (
  <div>
    <div className="customerInfo">
      <h3>Customer Information</h3>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="First Name" onChangeHandler={(changeValue) => { onChangeHandler('customer', { firstName: changeValue }); }} />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Last Name" onChangeHandler={(changeValue) => { onChangeHandler('customer', { lastName: changeValue }); }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="Email Address" onChangeHandler={(changeValue) => { onChangeHandler('customer', { email: changeValue }); }}/>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Phone" onChangeHandler={(changeValue) => { onChangeHandler('customer', { phone: changeValue }); }} />
        </Col>
      </Row>
    </div>
    <div className="customerInfo">
      <h3>Monitoring Information</h3>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <Input label="Monitoring Address" onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { line2: changeValue }); }} />
        </Col>
        <Col md={4}>
          <Input label="Apt # or Unit #" onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { line3: changeValue }); }} />
        </Col>
        <Col md={4}>
          <Input label="Postal Code"  onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { postal: changeValue }); }} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Emergency Contact"
            onChangeHandler={(changeValue) => {
              let nameArr = changeValue.split(' ');
              onChangeHandler('account', { ecFirstName: nameArr[0], ecLastName: nameArr[nameArr.length - 1] });
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Phone" onChangeHandler={(changeValue) => { onChangeHandler('account', { ecPhone: changeValue }); }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input label="Verbal Password" onChangeHandler={(changeValue) => { onChangeHandler('account', { verbalPassword: changeValue }); }} />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input label="Mastercode" onChangeHandler={(changeValue) => { onChangeHandler('account', { masterCode: changeValue }); }} />
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default CustomerInfo;
