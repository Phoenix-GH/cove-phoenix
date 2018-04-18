import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';

import styles from './productWalkthrough.scss';

class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  moveNext = () => {
    const { products } = this.props;
    const activeIndex = Math.min(this.state.activeIndex + 1, products.length - 1);
    this.setState({ activeIndex });
  }

  movePrevious = () => {
    const activeIndex = Math.max(this.state.activeIndex - 1, 0);
    this.setState({ activeIndex });
  }

  render() {
    const {
      activeIndex,
    } = this.state;
    const { products } = this.props;
    return (
      <div className="productRow">
        <div className="productLeft">
          <h1>Guard</h1>
          <div className="titleRow">
            <h3>{products[activeIndex].name}</h3>
            <WatchVideoLink size="medium" title="How To Install" />
          </div>
          <div className="descriptionRow">
            <div className="productDescription">
              {products[activeIndex].description}
            </div>
            <img className="productPhoto" src={products[activeIndex].src} alt="productPhoto" />
            <div className="navigations">
              <button onClick={this.movePrevious}><img src="/static/images/blackLeftArrow.png" alt="blackLeft" /></button>
              <h3>{`${activeIndex + 1} of ${products.length}`}</h3>
              <button onClick={this.moveNext}><img src="/static/images/blackRightArrow.png" alt="blackRight" /></button>
            </div>
          </div>
        </div>
        <div className="productRight">
          <img src={products[activeIndex].placement} alt="placementPhoto" />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

ProductCarousel.propTypes = {
  products: PropTypes.array,
};

ProductCarousel.defaultProps = {
  products: [],
};

export default ProductCarousel;
