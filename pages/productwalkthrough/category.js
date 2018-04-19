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

  selectTab = (index) => {
    this.setState({ activeIndex: index });
  }

  render() {
    const {
      activeIndex,
    } = this.state;

    const { categories } = this.props;
    return (
      <div className="tabSection">
        <div className="tabBars">
          {
            categories.map((item, index) => (
              <button className={`tabBarItem${activeIndex === index ? ' selected' : ''}`} onClick={() => this.selectTab(index)}>{item.name}</button>
            ))
          }
        </div>
        <div className="productRow bordered">
          <div className="carouselLeft">
            <h1>{categories[activeIndex].name}</h1>
            <div className="descriptionRow">
              <div className="productDescription">
                {categories[activeIndex].description}
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
              <div className="price">${categories[activeIndex].price}</div>
              <GreenButton title="See details" />
            </div>
          </div>
          <div className="carouselRight">
            <img src={categories[activeIndex].src} alt="categoryPhoto" className="categoryPhoto" />
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
