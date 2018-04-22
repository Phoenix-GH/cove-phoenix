import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Link from 'next/link';
import Input from './input';
import Checkbox from './checkbox';
import InfoBox from '../../components/infoBox/infobox';
import {
  required,
  creditCard,
  ccExp,
  normalizeExp,
  cvv
} from './validate';
import styles from './paymentInfo.scss';

const PaymentInfo = (props) => {
  const { onChangeHandler } = props;
  return (
    <div>
      <div className="customerInfo">
        <Row className="justify-content-between">
          <Col>
            <h3>Payment Selection</h3>
            <h4>Credit Card</h4>
            <p>Safe money transfer using your bank account.
              Visa, Mastercard, Discover, American Express
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              name="cc.name"
              label="Name on card"
              type="text"
              validate={required}
              component={Input}
            />
          </Col>
          <Col xs={4}>
            <img src="/static/images/creditcards.png" alt="credit card icon" />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              name="cc.number"
              label="Card number"
              type="text"
              validate={required}
              component={Input}
            />
          </Col>
          <Col xs={2}>
            <Field
              name="cc.exp"
              label="MM/YY"
              type="text"
              validate={[required, ccExp]}
              component={Input}
              normalize={normalizeExp}
            />
          </Col>
          <Col xs={2}>
            <Row>
              <Field
                name="cc.cvv"
                label="CVV"
                type="text"
                validate={[required, cvv]}
                component={Input}
              />
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
              <Field
                name="acceptedTerms"
                component={Checkbox}
              />
              <div className="acceptance">
                I accept the <Link href="#link"><span className="linkTertiary"> Terms and Conditons</span></Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

PaymentInfo.propTypes = {
  onChangeHandler: PropTypes.func,
};

PaymentInfo.defaultProps = {
  onChangeHandler: () => {},
};

export default reduxForm({
  form: 'checkout_payment',
  destroyOnUnmount: false,
})(PaymentInfo);

