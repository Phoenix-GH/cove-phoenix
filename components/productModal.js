import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'

export default class ProductModal extends Component {
  constructor(props) {
    super(props);

  }

  render () {
    const product = this.props.product
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} size="lg">
        <ModalBody>
          <Row>
            <Col xs={11}>
              <h2 className="modalHeader">Cove Door</h2>
            </Col>
            <Col xs={1}>
              <div className="closeIcon">
                <img onClick={this.props.toggle} src="/static/images/closeIcon.png" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="productImageMain">
                <img src="/static/images/placeholderBig.png" className="img-fluid"/>
              </div>
              <ul className="list-inline productThumbs">
                <li className="list-inline-item">
                  <img src="/static/images/placeholderThumb.png" />
                </li>
                <li className="list-inline-item">
                  <img src="/static/images/placeholderThumb.png" />
                </li>
                <li className="list-inline-item">
                  <img src="/static/images/placeholderThumb.png" />
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              {product.description}
              <div className="cartControlRow">
                <Row>
                  <Col xs={3}>
                    <div className="productPrice">
                      $15
                    </div>
                  </Col>
                  <Col xs={3}>
                    <span className="quantityLabel">Quantity</span>
                    <ul className="list-inline quantityControls">
                      <li className="list-inline-item">1</li>
                      <li className="list-inline-item"><img src="/static/images/plusIcon.png" /></li>
                      <li className="list-inline-item"><img src="/static/images/minusIcon.png" /></li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <div className="addToCartBtn mx-auto">
                      Add to cart
                    </div>
                  </Col>
                </Row>
              </div>

            </Col>
          </Row>
        </ModalBody>
        <style jsx>{`
          .modalHeader {
            font-family: 'GothamRoundedBold';
            font-size: 40px;
            margin-bottom:30px;
          }
          .closeIcon {
            text-align: right;
          }
          .productImageMain {

          }
          .productThumbs {
            margin-top: 20px;
            li {
              margin-left:8px;
              margin-right:20px;
            }
          }
          .cartControlRow {
            margin-top: 40px;
          }
          .productPrice {
            padding-top: 28px;
            font-size: 24px;
            font-weight: bold;
          }
          .quantityLabel {
            font-family: GothamRoundedBook;
            font-size: 12px;
            padding-bottom: 5px;
          }
          .quantiyControls {
            margin-top: 10px;
          }
          .addToCartBtn {
            color: #FFFFFF;
            width: 162px;
            height: 40px;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            background: #F17927;
            font-size: 16px;
            text-align: center;
            font-family: GothamRoundedBook;
            font-weight: bold;
            padding-top: 8px;
            margin-top: 28px;
          }
        `}
        </style>
      </Modal>
    )
  }
}
