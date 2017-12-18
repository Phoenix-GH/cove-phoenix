import React, { Component } from 'react';
import Link from 'next/link';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import s from './productModal.scss';

const ProductModal = (props) => {
  const { product } = props;
  const quantity = props.quantity || 0;
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className} size="lg">
      <ModalBody>
        <Row>
          <Col xs={11}>
            <h2 className={s.modalHeader}>{product.name}</h2>
          </Col>
          <Col xs={1}>
            <div className={s.closeIcon}>
              <img onClick={props.toggle} src="/static/images/closeIcon.png" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className={s.productImageMain}>
              <img src="/static/images/placeholderBig.png" className="img-fluid" />
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
            <div className={s.cartControlRow}>
              <Row>
                <Col xs={3}>
                  <div className={s.productPrice}>
                    ${product.price}
                  </div>
                </Col>
                <Col xs={3}>
                  <span className={s.quantityLabel}>Quantity</span>
                  <ul className="list-inline quantityControls">
                    <li className="list-inline-item">{quantity}</li>
                    <li className="list-inline-item">
                      <img src="/static/images/plusIcon.png" alt="plus icon" onClick={() => props.changeQuantity(product.id, quantity, quantity + 1)} />
                    </li>
                    <li className={`list-inline-item ${quantity === 0 ? s.disabled: '' }`}>
                      <img src="/static/images/minusIcon.png" alt="minus icon"  onClick={() => props.changeQuantity(product.id, quantity, quantity - 1)}/>
                    </li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <Link href="/coveclub">
                    <div className={`${s.addToCartBtn} mx-auto`}>
                      Add to cart
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductModal;
