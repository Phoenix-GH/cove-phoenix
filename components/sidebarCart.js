import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CartAddon from '../components/cartAddon';
import { changeQuantity } from '../actions';
import styles from './sidebarCart.scss';

class SidebarCart extends Component {
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this)
  }
  changeQuantity(id, oldQuantity, newQuantity)  {
    if (newQuantity < 0) {
      return;
    }
      this.props.changeQuantity(id, oldQuantity, newQuantity)
  }

  render() {
    const props = this.props;
    return (
      <div className="cartColumn">
        <div className="cartHeader">
          <h4>Cove Protect alarm system started pack</h4>
          <ul>
            <li>1 Cove Protect panel</li>
            <li>2 Cove doors</li>
            <li>1 Cove remote</li>
          </ul>
        </div>
        <div className="cartSubHeader">
          <h4>How many sensors should I add?</h4>
          <p>Don’t worry too much, you can add more sensors later,
            or send the ones you don’t need free of charge.
          </p>
        </div>
        {
          Object.keys(props.products).map((key) => {
            return (
              <CartAddon
                product={props.products[key]}
                quantity={props.cart.quantityById[key]}
                detailAction={props.detailAction}
                changeQuantity={this.changeQuantity}
              />
            )
          })
        }
        <Row>
          <Col xs={12}>
            <div className="footerLink">
              <span className="link linkTertiary">Click here</span> to add Smoke, Carbon, or Flood
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
              1 Cove Protect alarm system started pack
          </Col>
          <Col xs={6}>
            <span className="bold">$249 or $4.15/mo</span>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 6, offset: 6 }}>
            <Link href="/coveclub">
              <div className="addToCartBtn">
                  Add to cart
              </div>
            </Link>
          </Col>
        </Row>
        <style jsx>{styles}</style>
      </div>
    )
  }
}



SidebarCart.propTypes = {
  detailAction: PropTypes.func,
};

const mapStateToProps = ({ cart, products }) => ({ cart, products})

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuantity: bindActionCreators(changeQuantity, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart)
