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
    const {
      products,
      cart,
      detailAction,
      headerText,
    } = this.props;
    return (
      <div className="cartColumn">
        <Row>
          <div className="headerText">
            {headerText}
          </div>
          <div className="buttonRow">
            <a href="#details" className="detailsCol" onClick={() => detailAction(0)}>
              Details
            </a>
          </div>
        </Row>
        {
          Object.keys(products).map(key =>
            (<CartAddon
              key={key}
              product={products[key]}
              quantity={cart.quantityById[key]}
              detailAction={detailAction}
              changeQuantity={this.changeQuantity}
            />))
        }
        <Row>
          <Link href="/coveclub">
            <div className="addToCartBtn">
              Add to cart
            </div>
          </Link>
        </Row>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

SidebarCart.propTypes = {
  headerText: PropTypes.string,
  products: PropTypes.object,
  cart: PropTypes.object,
  detailAction: PropTypes.func,
  changeQuantity: PropTypes.func,
};

SidebarCart.defaultProps = {
  headerText: '',
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
