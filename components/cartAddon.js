import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './cartAddon.scss';

const CartAddon = (props) => {
  const {
    thumbSrc,
    product,
    changeQuantity,
    detailAction,
    index,
  } = props;
  const quantity = props.product.quantity ? props.product.quantity : 0;
  const outOfStockClass = cx({
    disabled: quantity === 0,
  });
  return (
    <div className="cartAddons">
      <Row>
        <Col xs={3} className="no-gutters noPadding">
          <div className="noPadding">
            <img src={thumbSrc} alt="thumb" />
          </div>
        </Col>
        <Col xs={7}>
          <div className="controlCol">
            <Row>
              <Col className="productLabel" xs={12}>
                {product.display_name}
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div className="priceTab">
                  <button
                    className={outOfStockClass}
                    onClick={() => changeQuantity(product.id, quantity, quantity - 1)}
                  >
                    <img src="/static/images/minusIcon.svg" height="24px" alt="minus icon" />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    onClick={() => changeQuantity(product.id, quantity, quantity + 1)}
                  >
                    <img src="/static/images/plusIcon.svg" height="24px" alt="add icon" />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={2} className="noPaddingLeft">
          <div className="price">${product.price}</div>
          <a href="#details" className="detailsCol" onClick={() => detailAction(index)}>
            Details
          </a>
        </Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  );
};

CartAddon.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  thumbSrc: PropTypes.string,
  changeQuantity: PropTypes.func,
  detailAction: PropTypes.func,
};

CartAddon.defaultProps = {
  product: null,
  quantity: 0,
  thumbSrc: '/static/images/placeholderThumbSquare.png',
  changeQuantity: () => {},
  detailAction: () => {},
};

export default CartAddon;
