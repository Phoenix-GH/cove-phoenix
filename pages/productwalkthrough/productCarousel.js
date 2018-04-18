import React, { Component } from 'react';
import {
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';
import GreenButton from '../../components/greenButton/greenButton';

import styles from './productWalkthrough.scss';

const items = [
  {
    src: '/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'http://localhost:3000/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'http://127.0.0.1:3000/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
];

class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const {
      activeIndex,
    } = this.state;
    const { products } = this.props;
    return (
      <div className="productContent" >
        <div className="productRow">
          {
            products && products[activeIndex] && (
              <div className="productLeft">
                <h1>Guard</h1>
                <div className="titleRow">
                  <h3>{products[activeIndex].name}</h3>
                  <WatchVideoLink size="middle" title="How To Install" />
                </div>
                <div className="productDescription">
                  With Guard, you will have the most comprehensive security with not only protection from burlars but also fires, floods, and CO.
                </div>
                <ul>
                  <Col md={6}>
                    <li>1 Key Remote</li>
                    <li>4 Door/Window sensors</li>
                    <li>1 Panic Button</li>
                    <li>2 Motions</li>
                  </Col>
                  <Col md={6}>
                    <li>1 CO Detector</li>
                    <li>1 Flood Remote</li>
                    <li>1 Fire Detector</li>
                  </Col>
                </ul>
              </div>
            )
          }
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
