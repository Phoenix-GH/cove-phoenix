import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import s from './customerInfo.scss';

const CustomerInfo = ({ onChangeHandler }) => (
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
              onChangeHandler('customer1', { firstName: changeValue });
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Last name"
            onChangeHandler={(changeValue) => {
              onChangeHandler('customer1', { lastName: changeValue });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Email address"
            onChangeHandler={(changeValue) => {
              onChangeHandler('customer1', { email: changeValue });
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Phone"
            onChangeHandler={(changeValue) => {
              onChangeHandler('customer1', { phone: changeValue });
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
              onChangeHandler('monitorAddress', { address1: changeValue });
            }}
          />
        </Col>
        <Col md={4}>
          <Input label="Apt/Suite #" onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { address2: changeValue }); }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Input
            label="City"
            onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { city: changeValue }); }}
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Input
            label="State"
            onChangeHandler={(changeValue) => { onChangeHandler('monitorAddress', { stateCode: changeValue }); }}
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
            hasInfo
            onChangeHandler={(changeValue) => {
              const nameArr = changeValue.split(' ');
              onChangeHandler('ec1', { firstName: nameArr[0], lastName: nameArr[nameArr.length - 1] });
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Phone"
            onChangeHandler={(changeValue) => {
              onChangeHandler('ec1', { phone: changeValue });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Checkbox
            label="Add Addtional Contact"
            clickHandler={(changeValue) => {
              onChangeHandler('ec1', { additionalContact: changeValue });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Input
            label="Verbal password"
            hasInfo
            onChangeHandler={(changeValue) => {
              onChangeHandler('ec1', { verbalPassword: changeValue });
            }}
          />
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

CustomerInfo.propTypes = {
  onChangeHandler: PropTypes.func,
};

CustomerInfo.defaultProps = {
  onChangeHandler: () => {},
};

export default CustomerInfo;
