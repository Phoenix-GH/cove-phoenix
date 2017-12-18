import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
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
    this.toggleShippingAddress = this.toggleShippingAddress.bind(this);
    this.toggleShippMethod = this.toggleShipMethod.bind(this);
  }

  toggleShippingAddress() {
    this.setState({
      differentAddress: !this.state.differentAddress,
    });
  }

  toggleShipMethod(val) {
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
    return (
      <div>
        <div className={s.customerInfo}>
          <h3>Shipping Information</h3>
          <div >
            <Checkbox clickHandler={this.toggleShippingAddress} checked={this.state.differentAddress} label="Shipping info is different than Monitored Address." />
          </div>
          <Collapse isOpen={this.state.differentAddress}>
            <Row>
              <Col xs={12} sm={12} md={6}>
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
            <Row>
              <Col xs={12} sm={12} md={8}>
                <Input label="Ship To Address" />
              </Col>
              <Col xs={6} sm={6} md={4}>
                <Input label="Apt # or Unit #" />
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={4}>
                <Input label="Postal Code" />
              </Col>
            </Row>
          </Collapse>
          <Collapse isOpen={!this.state.differentAddress}>
            <div className={s.shippingMap}>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <div className={s.mapAddress}>
                    <p className={s.bold}>Jenny Williams</p>
                    <p>10332 S Kestrel Rise Rd.</p>
                    <p>South Jordan, UT 84009</p>
                    <p><span className={s.bold}>Tel.</span> 801 745.1342</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                  <img className="img-fluid" src="/static/images/placeholderMap.png" />
                </Col>
              </Row>
            </div>
          </Collapse>
        </div>
        <div className={s.shippingInfo}>
          <h3>Shipping Method</h3>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className={s.shipOptionBox}>
                <Row>
                  <Col xs={{ size: 11, offset: 1 }}>
                    <div className={s.shipOptionHeader}>
                      <Radio
                        label={[<span className={s.bold}>Standard Delivery</span>]}
                        checked={this.state.standardDelivery}
                      />
                    </div>
                  </Col>
                  <Col xs={{ size: 10, offset: 2 }}>
                    <h4>Free with Prime</h4>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <div className={s.shipMethodDetails}>
                      Estimated 14-20 Day Shipping (Duties and taxes may be due upon delivery)
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className={s.shipOptionBox}>
                <Row>
                  <Col xs={{ size: 11, offset: 1 }}>
                    <div className={s.shipOptionHeader}>
                      <Radio clickHandler={() => this.toggleShipMethod(false)} label={[<span className={s.bold}>Fast Delivery</span>]} checked={!this.state.standardDelivery} />
                    </div>
                  </Col>
                  <Col xs={{ size: 10, offset: 2 }}>
                    <h4>$8.00</h4>
                  </Col>
                  <Col xs={{ size: 10, offset: 1 }}>
                    <div className={s.shipMethodDetails}>
                      Estimated 2-5 Day Shipping (Duties and taxes may be due upon delivery)
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className={s.customerInfo}>
          <h3>Extended Warranty - $3/mo</h3>
          <p>Extended Warranty provides free replacement of equipment and
            shipping no matter what the cause of the equipment to malfunction or break.
          </p>
          <ul className={`list-inline ${s.warrantyControls}`}>
            <li className="list-inline-item">
              <Radio
                clickHandler={() => this.toggleWarranty('accept')}
                label={[<span className={s.bold}>Accept</span>]}
                checked={this.state.warranty === 'accept'}
              />
            </li>
            <li className="list-inline-item">
              <Radio
                clickHandler={() => this.toggleWarranty('decline')}
                label={[<span className={s.bold}>Decline</span>]}
                defaultChecked={false}
                checked={this.state.warranty === 'decline'}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ShippingInfo;
