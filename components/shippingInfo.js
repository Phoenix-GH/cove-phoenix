import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import Input from '../components/input';
import Checkbox from '../components/checkbox';
import Radio from '../components/radio';
import s from './shippingInfo.scss';

class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      differentAddress: false,
      standardDelivery: true,
      warranty: null,
    };
  }

  toggleShippingAddress = () => {
    const { onChangeHandler } = this.props;
    this.setState({
      differentAddress: !this.state.differentAddress,
    });
    onChangeHandler('shippingAddress', { shipToMonitorAddress: !this.state.differentAddress });
  }

  toggleShipMethod = (val) => {
    this.setState({
      standardDelivery: val,
    });
  }

  toggleWarranty(val) {
    this.setState({
      warranty: val,
    });
  }

  render() {
    const { onChangeHandler } = this.props;
    return (
      <div>
        <div className="customerInfo">
          <Col xs={12} sm={12} md={12}>
            <h3>Shipping Information</h3>
            <div >
              <Checkbox
                clickHandler={this.toggleShippingAddress}
                checked={this.state.differentAddress}
                label="Shipping info is different than Monitored Address."
              />
            </div>
            <Collapse isOpen={this.state.differentAddress}>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Input label="First Name" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { firstName: changeValue }); }} />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <Input label="Last Name" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { lastName: changeValue }); }} />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Input label="Email Address" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { email: changeValue }); }} />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <Input label="Phone" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { phone: changeValue }); }} />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={8}>
                  <Input label="Ship To Address" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { line2: changeValue }); }} />
                </Col>
                <Col xs={6} sm={6} md={4}>
                  <Input label="Apt # or Unit #" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { line3: changeValue }); }} />
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={4}>
                  <Input label="Postal Code" onChangeHandler={(changeValue) => { onChangeHandler('shippingAddress', { postal: changeValue }); }} />
                </Col>
              </Row>
            </Collapse>
            <Collapse isOpen={!this.state.differentAddress}>
              <div className="shippingMap">
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <div className="mapAddress">
                      <p className="bold">Jenny Williams</p>
                      <p>10332 S Kestrel Rise Rd.</p>
                      <p>South Jordan, UT 84009</p>
                      <p><span className="bold">Tel.</span> 801 745.1342</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <img src="/static/images/placeholderMap.png" alt="placeholderMap" />
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
                      <Radio
                        name="shipping-method"
                        clickHandler={() => this.toggleShipMethod(true)}
                        label={[<span className="bold">Standard Delivery</span>]}
                        checked={this.state.standardDelivery}
                        defaultChecked
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
                      <Radio
                        name="shipping method"
                        clickHandler={() => this.toggleShipMethod(false)}
                        label={[<span className="bold">Fast Delivery</span>]}
                        checked={!this.state.standardDelivery}
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
                <Radio
                  clickHandler={() => this.toggleWarranty('accept')}
                  label={[<span className="bold">Accept</span>]}
                  checked={this.state.warranty === 'accept'}
                  defaultChecked
                />
              </li>
              <li className="list-inline-item">
                <Radio
                  clickHandler={() => this.toggleWarranty('decline')}
                  label={[<span className="bold">Decline</span>]}
                  checked={this.state.warranty === 'decline'}
                  defaultChecked={false}
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
  onChangeHandler: PropTypes.func,
};

ShippingInfo.defaultProps = {
  onChangeHandler: () => {
  },
};

export default ShippingInfo;
