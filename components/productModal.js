import React from 'react';
import Link from 'next/link';
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Product from './product';
import s from './productModal.scss';

const ProductModal = (props) => {
  const {
    product,
    quantity,
    isOpen,
    toggle,
    className,
    changeQuantity,
  } = props;
  console.log('P', product)
  return (
    <Modal isOpen={isOpen} toggle={toggle} className={className} size="lg">
      <ModalBody>
        <Row>
          <Col xs={11}>
            <div />
          </Col>
          <Col xs={1}>
            <div className={s.closeIcon}>
              <button onClick={toggle}><img src="/static/images/closeIcon.png" alt="closeIcon" /></button>
            </div>
          </Col>
        </Row>
        <Product product={product} />
      </ModalBody>
    </Modal>
  );
};

ProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
  changeQuantity: PropTypes.func,
};

ProductModal.defaultProps = {
  quantity: 0,
  isOpen: false,
  toggle: () => {},
  className: '',
  changeQuantity: () => {},
};

export default ProductModal;
