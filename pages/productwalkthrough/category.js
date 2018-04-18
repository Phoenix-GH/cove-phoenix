import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import GreenButton from '../../components/greenButton/greenButton';
import styles from './productWalkthrough.scss';

class Category extends Component {
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
    const { categories } = this.props;
    return (
      <div className="productContent" >
        <div className="productRow">
          <div className="carouselLeft">
            <h1>Guard</h1>
            <div className="descriptionRow">
              <div className="productDescription">
                {categories[0].description}
              </div>
            </div>
            <ul className="greenList">
              <Col md={12}>
                <li>No contracts</li>
                <li>24/7 professional monitoring</li>
                <li>Includes Cove Protect Panel</li>
              </Col>
            </ul>
            <div className="buttonRow">
              <div className="price">${categories[0].price}</div>
              <GreenButton title="See details" />
            </div>
          </div>
          <div className="carouselRight">
            <img src={categories[0].src} alt="categoryPhoto" className="categoryPhoto" />
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.array,
};

Category.defaultProps = {
  categories: [],
};

export default Category;
