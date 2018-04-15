import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CartAddon from '../../components/cartAddon';
import { changeQuantity } from '../../actions';
import styles from './sidebarCart.scss';

class SidebarCart extends Component {
  changeQuantity = (id, oldQuantity, newQuantity) => {
    if (newQuantity < 0) {
      return;
    }
    this.props.changeQuantity(id, oldQuantity, newQuantity);
  }

  render() {
    const { products, cart, detailAction } = this.props;
    return (
      <div className="cartColumn">
        {
          Object.keys(products).map(key =>
            (<CartAddon
              product={products[key]}
              quantity={cart.quantityById[key]}
              detailAction={detailAction}
              changeQuantity={this.changeQuantity}
            />))
        }
        <Row>
          <Col xs={12}>
            <Link href="/coveclub">
              <div className="addToCartBtn">
                Add to cart
              </div>
            </Link>
          </Col>
        </Row>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

SidebarCart.propTypes = {
  products: PropTypes.object,
  cart: PropTypes.object,
  detailAction: PropTypes.func,
  changeQuantity: PropTypes.func,
};

SidebarCart.defaultProps = {
  products: null,
  cart: null,
  detailAction: () => {},
  changeQuantity: () => {},
};

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = dispatch => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);
