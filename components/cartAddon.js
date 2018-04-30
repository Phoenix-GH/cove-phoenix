import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './cartAddon.scss';

const getPriceClasses = (props) => {
  if (props.showDetails) {
    return 'price';
  } else {
    return 'price price--large';
  }
}

const CartAddon = (props) => {
  const quantity = props.product.quantity ? props.product.quantity : 0;
  const {
    thumbSrc,
    product,
    changeQuantity,
    detailAction,
    index,
    showDetails
  } = props;
  const outOfStockClass = cx({
    disabled: quantity === 0,
  });

  return (
    <div className="cartAddons">
      <Row className="no-gutters">
        <Col xs={3} className="no-gutters noPadding">
          <div className="noPadding">
            <img src={thumbSrc} alt="thumb" />
          </div>
        </Col>
        <Col xs={7} className="d-flex align-items-center">
          <div className="controlCol">
            <Row className="no-gutters">
              <Col xs={12}>
                <span className="productLabel">{product.display_name}</span>
              </Col>
            </Row>
            <Row className="no-gutters">
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
        <Col xs={2} className="d-flex flex-column justify-content-center">
          <div className={getPriceClasses(props)}>${product.price}</div>
          { props.showDetails &&
            <a href="#details" className="detailsCol" onClick={() => detailAction(index)}>
            Details
            </a>
          }
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
  showDetails: PropTypes.bool,
};

CartAddon.defaultProps = {
  product: null,
  quantity: 0,
  thumbSrc: '/static/images/placeholderThumbSquare.png',
  changeQuantity: () => {},
  detailAction: () => {},
  showDetails: false
};

export default CartAddon;
