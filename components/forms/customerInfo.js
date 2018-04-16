import { Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from './input';
import { validatePhoneHandler } from '../../redux/checkout/routine';
import {
  required,
  email,
  phoneNumber,
  normalizePhone,
  fullName,
  minLength6,
  zip,
} from './validate';
import Checkbox from '../../components/checkbox';
import style from './customerInfo.scss';

console.log('required', required)

const normalizeStateInput = (value) => {
  console.log('current value', value, normalizeState(value))
  return (value && normalizeState(value)) ? normalizeState(value) : value;
};

const CustomerInfo = ({ onChangeHandler, additionalEC, validatePhone }) => {
  const ec2RowClassName = cx({ 'd-none': additionalEC });
  console.log('qqq', validatePhoneHandler, validatePhone, validatePhoneHandler.TRIGGER, validatePhone.TRIGGER);
  // validatePhoneHandler.trigger();
  return (
    <div>
      <form>
        <div className="customerInfo">
          <Row>
            <Col xs={12} sm={12}>
              <h3>Customer Information</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="customer1.firstName"
                label="First name"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="customer1.lastName"
                label="Last name"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="customer1.email"
                label="Email address"
                type="text"
                validate={[required, email]}
                component={Input}
              />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="customer1.phone"
                label="phone"
                type="text"
                validate={[required, phoneNumber]}
                normalize={normalizePhone}
                component={Input}
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
              <Field
                name="monitorAddress.address1"
                label="Monitored address"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
            <Col md={4}>
              <Field
                name="monitorAddress.address2"
                label="Apt/Suite #"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <Field
                name="monitorAddress.city"
                label="City"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <Field
                name="monitorAddress.state"
                label="State"
                type="text"
                validate={required}
                component={Input}
              />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <Field
                name="monitorAddress.postal"
                label="Zipcode"
                type="text"
                validate={[required, zip]}
                component={Input}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="ec1.name"
                label="Emergency Contact"
                type="text"
                validate={[required, fullName]}
                component={Input}
                hasInfo
              />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="ec1.phone"
                label="phone"
                type="text"
                validate={[required, phoneNumber]}
                normalize={normalizePhone}
                component={Input}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="ec2.name"
                label="Emergency Contact"
                type="text"
                validate={[required, fullName]}
                component={Input}
                hasInfo
              />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="ec2.phone"
                label="phone"
                type="text"
                validate={[required, phoneNumber]}
                normalize={normalizePhone}
                component={Input}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Field
                name="verbalPassword"
                label="Verbal password"
                type="text"
                validate={[required, minLength6]}
                component={Input}
              />
            </Col>
          </Row>
          <button onClick={() => { validatePhone.trigger(); }}>Click</button>
        </div>
        <style jsx>{style}</style>
      </form>
    </div>
  );
};
CustomerInfo.propTypes = {
  onChangeHandler: PropTypes.func,
};

CustomerInfo.defaultProps = {
  onChangeHandler: () => {},
};

export default reduxForm({
  form: 'checkout',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(CustomerInfo);
