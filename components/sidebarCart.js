import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CartAddon from '../components/cartAddon';
import s from './sidebarCart.scss';

const SidebarCart = props => (
  <div className={s.cartColumn}>
    <div className={s.cartHeader}>
      <h4>Cove Protect alarm system started pack</h4>
      <ul>
        <li>1 Cove Protect panel</li>
        <li>2 Cove doors</li>
        <li>1 Cove remote</li>
      </ul>
    </div>
    <div className={s.cartSubHeader}>
      <h4>How many sensors should I add?</h4>
      <p>Don’t worry too much, you can add more sensors later,
        or send the ones you don’t need free of charge.
      </p>
    </div>
    <CartAddon product={{id: 123}} detailAction={props.detailAction} changeQuantity={props.changeQuantity}/>
    <Row>
      <Col xs={12}>
        <div className={s.footerLink}>
          <span className={`${s.link} ${s.linkTertiary}`}>Click here</span> to add Smoke, Carbon, or Flood
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
          1 Cove Protect alarm system started pack
      </Col>
      <Col xs={6}>
        <span className={s.bold}>$249 or $4.15/mo</span>
      </Col>
    </Row>
    <Row>
      <Col xs={{ size: 6, offset: 6 }}>
        <div className={s.addToCartBtn}>
            Add to cart
        </div>
      </Col>
    </Row>
  </div>
);

SidebarCart.propTypes = {
  detailAction: PropTypes.func,
};

export default SidebarCart;
