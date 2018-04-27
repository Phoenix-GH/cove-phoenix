import { Row, Col, Collapse } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from './input';
import {
  required,
  email,
  phoneNumber,
  normalizePhone,
  fullName,
  minLength6,
  zip,
} from './validate';
import Checkbox from './checkbox';
import style from './customerInfo.scss';

const CustomerInfo = ({ formData }) => {
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
                label="Add Addtional Contact"
                name="includeEc3"
                component={Checkbox}
                className="additionalContact"
              />
            </Col>
          </Row>
          <Collapse isOpen={formData.values && formData.values.includeEc3}>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <Field
                  name="ec3.name"
                  label="Emergency Contact"
                  type="text"
                  validate={fullName}
                  component={Input}
                  hasInfo
                />
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Field
                  name="ec3.phone"
                  label="phone"
                  type="text"
                  validate={phoneNumber}
                  normalize={normalizePhone}
                  component={Input}
                />
              </Col>
            </Row>
          </Collapse>
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
          
        </div>
        <style jsx>{style}</style>
      </form>
    </div>
  );
};
CustomerInfo.propTypes = {
  formData: PropTypes.object,
};

CustomerInfo.defaultProps = {
  formData: {
    values: {},
  },
};

export default reduxForm({
  form: 'checkout_customer',
  initialValues: {
    ec1: {},
    includeEc3: false,
  },
  destroyOnUnmount: false,
})(CustomerInfo);
