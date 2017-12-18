import { Row, Col } from 'reactstrap';
import s from './cartAddon.scss';

const CartAddon = (props) => {
  const thumbSrc = props.thumbSrc ? props.thumbSrc : "/static/images/placeholderThumbSquare.png";
  const { product } = props;
  const quantity = props.quantity || 0;
  return (
    <div className={s.cartAddons}>
      <Row>
        <Col xs={3} className={`no-gutters ${s.noPadding}`}>
          <div className={s.noPadding}>
            <img src={thumbSrc} />
          </div>
        </Col>
        <Col xs={7}>
          <div  className={s.controlCol}>
            <Row>
              <Col className={s.productLabel} xs={12}>
                {product.name} <span className={s.price}>${product.price}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <ul className="list-inline">
                  <li className={`list-inline-item ${s.quantity}`}>{quantity}</li>
                  <li
                    className="list-inline-item"
                    onClick={() => props.changeQuantity(product.id, quantity, quantity + 1)}
                    >
                    <img src="/static/images/plusIcon.svg" height="24px" alt="add icon" />
                  </li>
                  <li
                    className={`list-inline-item ${quantity === 0 ? s.disabled: '' }`}
                    onClick={() => props.changeQuantity(product.id, quantity, quantity - 1)}

                  >
                    <img src="/static/images/minusIcon.svg"  height="24px" alt="minus icon" />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={2} className={s.noPaddingLeft}>
          <div  className={s.detailsCol} onClick={() => props.detailAction(product.id)}>
            Details
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CartAddon
