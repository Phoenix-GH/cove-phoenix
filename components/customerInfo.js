import { Row, Col } from 'reactstrap';
import Input from '../components/input';
import s from './customerInfo.scss';

const CustomerInfo = ({ onChangeHandler, fields }) => (
  <div>
    <div className="customerInfo">
      <Row>
        <Col xs={12} sm={12}>
          <h3>Customer Information</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="First name" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('customer', { firstName: changeValue }); 
            }} 
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="Last name" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('customer', { lastName: changeValue }); 
            }} 
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="Email address" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('customer', { email: changeValue }); 
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="Phone" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('customer', { phone: changeValue }); 
            }} 
          />
        </Col>
      </Row>
    </div>
    <div className="customerInfo">
      <Row>
        <Col xs={12} sm={12}>
          <h3>Monitoring Info</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <Input 
            label="Monitored address" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('monitorAddress', { line2: changeValue }); 
            }} 
          />
        </Col>
        <Col md={4}>
          <Input label="Apt/Suite #" onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { line3: changeValue }); }} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={4}>
          <Input 
            label="City" 
            onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { line2: changeValue }); }} 
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Input 
            label="State" 
            onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { line3: changeValue }); }} 
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Input 
            label="Zipcode" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('monitorAddress', { postal: changeValue }); 
            }} 
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Emergency contact"
            onChangeHandler={(changeValue) => {
              let nameArr = changeValue.split(' ');
              onChangeHandler('account', { ecFirstName: nameArr[0], ecLastName: nameArr[nameArr.length - 1] });
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="Phone" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('account', { ecPhone: changeValue }); 
            }} 
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input 
            label="Verbal password" 
            onChangeHandler={(changeValue) => { 
              onChangeHandler('account', { verbalPassword: changeValue }); 
            }} 
          />
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default CustomerInfo;
