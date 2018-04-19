import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  required,
  phoneNumber,
  normalizePhone,
  zip,
} from './validate';
import Input from './input';
import Checkbox from './checkbox';
import Radio from './radio';
import s from './shippingInfo.scss';

class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      differentAddress: false,
      shipMethod: 1,
      warranty: 0,
    };
  }

  getMapURl(formData) {
    const monitorAddress = {
      ...formData.checkout_customer.values.monitorAddress,
      ...formData.checkout_customer.values.customer1,
    };
    const { shipAddress } = formData.checkout_shipping.values;
    const mapAddress = (_.has(formData.checkout_shipping, 'values.shipAddress.postal') && !formData.checkout_shipping.syncErrors && this.state.differentAddress) ? shipAddress : monitorAddress;
    const mapAddressQueryStr = `${mapAddress.address1.replace(/\s+/g, '+')},${mapAddress.city.replace(/\s+/g, '+')},${mapAddress.state},${mapAddress.postal}`;
    const mapUrl = `
      https://maps.googleapis.com/maps/api/staticmap?center=${mapAddressQueryStr}&markers=color:0x00CDB9|label:C|${mapAddressQueryStr}
      &zoom=16&size=400x350
      &format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e
      &key=AIzaSyCx07Q0WXn6gYW6gMPuBKF9LWbRwBNOpY4`;
    return { mapUrl, mapAddress };
  }

  toggleShippingAddress = () => {
    this.setState({
      differentAddress: !this.state.differentAddress,
    });
  }

  toggleShipMethod = (val) => {
    this.setState({
      shipMethod: val,
    });
  }

  toggleWarranty= (val) => {
    this.setState({
      warranty: val,
    });
  }

  render() {
    const { formData } = this.props;
    let mapUrl = '';
    let mapAddress = {};
    if (_.has(formData, 'checkout_customer.values.monitorAddress.postal')) {
      ({ mapUrl, mapAddress } = this.getMapURl(formData));
    }

    return (
      <div>
        <div className="customerInfo">
          <Col xs={12} sm={12} md={12}>
            <h3>Shipping Information</h3>
            <div >
              <Field
                name="shippAddress.differentShipAddress"
                label="Shipping info is different than Monitored Address."
                component={Checkbox}
                onClick={this.toggleShippingAddress}
              />
            </div>
            <Collapse isOpen={this.state.differentAddress}>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Field
                    name="shipAddress.firstName"
                    label="First name"
                    type="text"
                    validate={required}
                    component={Input}
                  />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <Field
                    name="shipAddress.lastName"
                    label="Last name"
                    type="text"
                    validate={required}
                    component={Input}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={8}>
                  <Field
                    name="shipAddress.address1"
                    label="Shipping street address"
                    type="text"
                    validate={required}
                    component={Input}
                  />
                </Col>
                <Col md={4}>
                  <Field
                    name="shipAddress.address2"
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
                    name="shipAddress.city"
                    label="City"
                    type="text"
                    validate={required}
                    component={Input}
                  />
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Field
                    name="shipAddress.state"
                    label="State"
                    type="text"
                    validate={required}
                    component={Input}
                  />
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Field
                    name="shipAddress.postal"
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
                    name="shipAddress.phone"
                    label="Phone"
                    type="text"
                    validate={[required, phoneNumber]}
                    normalize={normalizePhone}
                    component={Input}
                  />
                </Col>
              </Row>
            </Collapse>
            <Collapse isOpen>
              <div className="shippingMap">
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <div className="mapAddress">
                      <p className="bold">{`${mapAddress.firstName} ${mapAddress.lastName}`}</p>
                      <p>{mapAddress.address1}</p>
                      {mapAddress.address2 &&
                        <p>{mapAddress.address2}</p>
                      }
                      <p>{`${mapAddress.city}, ${mapAddress.state}, ${mapAddress.postal}`}</p>
                      <p><span className="bold">Tel.</span> {mapAddress.phone}</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <img src={mapUrl} alt="placeholderMap" />
                  </Col>
                </Row>
              </div>
            </Collapse>
          </Col>
        </div>
        <div className="shippingInfo">
          <Col xs={12} sm={12} md={12}>
            <h3>Shipping Method</h3>
          </Col>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className="shipOptionBox">
                <Row>
                  <Col xs={{ size: 11, offset: 1 }}>
                    <div className="shipOptionHeader">
                      <Field
                        name="shippingMethod"
                        label={[<span className="bold">Standard Delivery</span>]}
                        component={Radio}
                        type="radio"
                        key="standard-delivery"
                        formValue={1}
                        onClick={() => this.toggleShipMethod(1)}
                        checked={this.state.shipMethod === 1}
                      />
                    </div>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <h4>$0.00</h4>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <div className="shipMethodDetails">
                      Estimated 7-10 Day Shipping
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="shipOptionBox">
                <Row>
                  <Col xs={{ size: 11, offset: 1 }}>
                    <div className="shipOptionHeader">
                      <Field
                        name="shippingMethod"
                        key="fast-delivery"
                        component={Radio}
                        formValue={2}
                        onClick={() => this.toggleShipMethod(2)}
                        label={[<span className="bold">Fast Delivery</span>]}
                        checked={this.state.shipMethod === 2}
                      />
                    </div>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <h4>$20.00</h4>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <div className="shipMethodDetails">
                      Estimated 2-4 Day Shipping
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="customerInfo">
          <Col xs={12} sm={12} md={12}>
            <h3 className="extendedTitle">Extended Warranty - $3/mo</h3>
            <p>Extended Warranty provides free replacement of equipment and
              shipping no matter what the cause of the equipment to malfunction or break.
            </p>
            <ul className="list-inline warrantyControls">
              <li className="list-inline-item">
                <Field
                  name="warranty"
                  key="warranty-accept"
                  onClick={() => this.toggleWarranty(1)}
                  label={[<span className="bold">Accept</span>]}
                  value="accept"
                  type="true"
                  formValue
                  component={Radio}
                  checked={this.state.warranty}
                />
              </li>
              <li className="list-inline-item">
                <Field
                  name="warranty"
                  key="warranty-decline"
                  type="radio"
                  onClick={() => this.toggleWarranty(0)}
                  label={[<span className="bold">Decline</span>]} 
                  component={Radio}
                  value="decline"
                  formValue={false}
                  checked={!this.state.warranty}
                />
              </li>
            </ul>
          </Col>
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}

ShippingInfo.propTypes = {
  formData: PropTypes.object,
};

ShippingInfo.defaultProps = {
  formData: {},
};

export default reduxForm({
  form: 'checkout_shipping',
  initialValues: {
    warranty: false,
    shippingMethod: 1,
    shipAddress: {},
  },
})(ShippingInfo);
