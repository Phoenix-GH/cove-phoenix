import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
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
    const { productById } = this.props.checkout;
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
              index={key}
              product={productById[products[key].id]}
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
  cart: PropTypes.object,
  detailAction: PropTypes.func,
  changeQuantity: PropTypes.func,
};

SidebarCart.defaultProps = {
  headerText: '',
  cart: null,
  detailAction: () => {},
  changeQuantity: () => {},
};

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = dispatch => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);
