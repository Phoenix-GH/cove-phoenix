import React, { Component } from 'react'
import { Row, Col, Collapse } from 'reactstrap'
import Input from '../components/input'
import Checkbox from '../components/checkbox'
import Radio from '../components/radio'

class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.state= {
      differentAddress: false,
      standardDelivery: true,
      warranty: null,
    }
    this.toggleShippingAddress = this.toggleShippingAddress.bind(this);
    this.toggleShippMethod = this.toggleShipMethod.bind(this);
  }

  toggleShippingAddress () {
    this.setState({
      differentAddress: !this.state.differentAddress,
    });
  }

  toggleShipMethod (val) {
    this.setState({
      standardDelivery: val,
    })
  }

  toggleWarranty (val) {
    this.setState({
      warranty: val,
    })
  }

  render () {
    return (
      <div>
        <div className="customerInfo">
          <h3>Shipping Information</h3>
          <div >
            <Checkbox clickHandler={this.toggleShippingAddress} checked={this.state.differentAddress} label="Shipping info is different than Monitored Address."/>
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
                <Col  xs={12} sm={12} md={6} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                  <img className="img-fluid" src="/static/images/placeholderMap.png" />
                </Col>
              </Row>
            </div>
          </Collapse>
        </div>
        <div className="shippingInfo">
          <h3>Shipping Method</h3>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className="shipOptionBox">
                <Row>
                  <Col xs={{ size:11, offset: 1 }}>
                    <div className="shipOptionHeader">
                      <Radio label={[<span className='bold'>Standard Delivery</span>]} checked={this.state.standardDelivery} />
                    </div>
                  </Col>
                  <Col xs={{ size:10, offset: 2 }}>
                    <h4>Free with Prime</h4>
                  </Col>
                  <Col xs={{ size:10, offset: 1 }}>
                    <div className="shipMethodDetails">
                      Estimated 14-20 Day Shipping (Duties and taxes may be due upon delivery)
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="shipOptionBox">
                <Row>
                  <Col xs={{ size:11, offset: 1 }}>
                    <div className="shipOptionHeader">
                      <Radio clickHandler={()=> this.toggleShipMethod(false)} label={[<span className='bold'>Fast Delivery</span>]} checked={!this.state.standardDelivery} />
                    </div>
                  </Col>
                  <Col xs={{ size:10, offset: 2 }}>
                    <h4>$8.00</h4>
                  </Col>
                  <Col xs={{ size:10, offset: 1 }}>
                    <div className="shipMethodDetails">
                      Estimated 2-5 Day Shipping (Duties and taxes may be due upon delivery)
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="customerInfo">
          <h3>Extended Warranty - $3/mo</h3>
          <p>Extended Warranty provides free replacement of equipment and shipping no matter what the cause of the equipment to malfunction or break.</p>
          <ul className="list-inline warrantyControls">
            <li className="list-inline-item">
              <Radio clickHandler={()=> this.toggleWarranty('accept')} label={[<span className='bold'>Accept</span>]} checked={this.state.warranty == 'accept'} />
            </li>
            <li className="list-inline-item">
              <Radio clickHandler={()=> this.toggleWarranty('decline')} label={[<span className='bold'>Decline</span>]} defaultChecked={false} checked={this.state.warranty == 'decline'} />
            </li>
          </ul>
        </div>
        <style jsx>{`
          .customerInfo, .shippingInfo {
            h3 {
              margin-top: 60px;
              margin-bottom: 30px;
              font-size: 24px;
              font-family: GothamRoundedBold;
              color: #191E2B;
            }

          }
          .customerInfo .shippingInfo .col-sm-12 {
            margin-top: 0px;
          }
          .shippingMap {
            border: 1px solid #DEDFE1;
            border-radius: 16px;
            max-width: 656px;
            margin-top: 30px;

          }

          .mapAddress {
            padding: 30px;
          }
          .shipOptionBox {
            height: 197px;
            border: 1px solid #DEDFE1;
            border-radius: 16px;
            margin-right:20px;
          }
          .shipOptionHeader {
            margin-top: 20px;
          }
          .shipMethodDetails {
            margin-top: 20px;
          }
          h4 {
            font-family: GothamRoundedBold;
            font-size: 20px;
            color: #00B19A;
          }
          .warrantyControls {
            li {
              margin-right: 50px;
            }
          }
        `}</style>
        <style jsx global>{`
          .customerInfo .shippingMap .row {
            margin-top: 0px;
          }
          .bold {
            font-weight: bold;
          }
        `}
        </style>
      </div>
    )
  }
}
export default ShippingInfo
