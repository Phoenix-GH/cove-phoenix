import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import Radio from '../../components/radio';
import s from './shippingInfo.scss';

class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      differentAddress: false,
      shipMethod: 0,
      warranty: 0,
    };
  }

  toggleShippingAddress = () => {
    const { onChangeHandler } = this.props;
    this.setState({
      differentAddress: !this.state.differentAddress,
    });
    onChangeHandler('shipAddress', { use: !this.state.differentAddress ? 'monitorAddress' : 'shipAddress' });
  }

  toggleShipMethod = (val) => {
    const { onChangeHandler } = this.props;
    this.setState({
      shipMethod: val,
    });
    onChangeHandler('createOrderInfo', { shippingMethodId: this.state.warranty });
  }

  toggleWarranty(val) {
    const { onChangeHandler } = this.props;
    this.setState({
      warranty: val,
    });
    onChangeHandler('createOrderInfo', { warrantyId: this.state.warranty });
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
                  <Input
                    label="First Name"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { firstName: changeValue }); }
                    }
                  />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <Input
                    label="Last Name"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { lastName: changeValue }); }
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Input
                    label="Email Address"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { email: changeValue }); }
                    }
                  />
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <Input
                    label="Phone"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { phone: changeValue }); }
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={8}>
                  <Input
                    label="Ship To Address"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { address1: changeValue }); }
                    }
                  />
                </Col>
                <Col xs={6} sm={6} md={4}>
                  <Input
                    label="Apt # or Unit #"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { address2: changeValue }); }
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={4}>
                  <Input
                    label="Postal Code"
                    onChangeHandler={
                      (changeValue) => { onChangeHandler('shipAddress', { postalCode: changeValue }); }
                    }
                  />
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
                        key="standard-delivery"
                        clickHandler={() => this.toggleShipMethod(0)}
                        label={[<span className="bold">Standard Delivery</span>]}
                        checked={this.state.shipMethod === 0}
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
                        key="fast-delivery"
                        clickHandler={() => this.toggleShipMethod(1)}
                        label={[<span className="bold">Fast Delivery</span>]}
                        checked={this.state.shipMethod === 1}
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
                  key="warranty-accept"
                  clickHandler={() => this.toggleWarranty(1)}
                  label={[<span className="bold">Accept</span>]}
                  checked={this.state.warranty === 1}
                />
              </li>
              <li className="list-inline-item">
                <Radio
                  key="warranty-decline"
                  clickHandler={() => this.toggleWarranty(0)}
                  label={[<span className="bold">Decline</span>]}
                  checked={this.state.warranty === 0}
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
  onChangeHandler: () => {},
};

export default ShippingInfo;
