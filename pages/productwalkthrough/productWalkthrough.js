import React, { Component } from 'react';
import {
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  CarouselCaption,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store';
import { loadProducts } from '../../actions';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import ProductCarousel from './productCarousel';
import ProductCategory from './category';
import GreenButton from '../../components/greenButton/greenButton';
import RiskFreeSection from '../../components/riskFreeSection/riskFreeSection';

import styles from './productWalkthrough.scss';

const items = [
  {
    src: '/static/images/workthrough/product-1.png',
    name: 'Cove Protect Panel',
    description: 'The Cove Protect security panel has a 7” touchscreen, Cove LiveAssist to communicate with the 24/7 professional monitoring station, an 85 decibel siren, and much more. It can either be mounted on the wall or placed on a table with the included stand.',
    placement: '/static/images/workthrough/placement-1.png',
  },
  {
    src: '/static/images/workthrough/product-2.png',
    name: 'Cove Motion Sensor',
    description: 'The Cove Protect security panel has a 7” touchscreen, Cove LiveAssist to communicate with the 24/7 professional monitoring station, an 85 decibel siren, and much more. It can either be mounted on the wall or placed on a table with the included stand.',
    placement: '/static/images/workthrough/placement-2.png',
  },
  {
    src: '/static/images/workthrough/product-3.png',
    name: 'Cove Siren',
    description: 'The Cove siren is built right into the 7” touch screen so you don’t need to worry about buying it extra. It is loud enough to make sure whoever came into your home is leaving quickly.',
    placement: '/static/images/workthrough/placement-3.png',
  },
  {
    src: '/static/images/workthrough/product-4.png',
    name: 'Cove Panic Button',
    description: 'The panic button is designed for not only burlgar emergencies but also medical and fire emergencies. If you ever need help, just place the panic button in an accessible place so that you can quickly get to it.',
    placement: '/static/images/workthrough/placement-4.png',
  },
  {
    src: '/static/images/workthrough/product-5.png',
    name: 'Cove Freeze Sensor',
    description: 'The Cove flood/freeze sensor is designed to make sure your home is always safe from the elements and the accidents.',
    placement: '/static/images/workthrough/placement-5.png',
  },
  {
    src: '/static/images/workthrough/product-6.png',
    name: 'Cove Freeze Sensor',
    description: 'Never let a fire ruin your life and destroy those priceless memories that are within the walls of your home.',
    placement: '/static/images/workthrough/placement-6.png',
  },
  {
    src: '/static/images/workthrough/product-7.png',
    name: 'Cove Flood Sensor',
    description: 'The Cove flood/freeze sensor is designed to make sure your home is always safe from the elements and the accidents.',
    placement: '/static/images/workthrough/placement-7.png',
  },
  {
    src: '/static/images/workthrough/product-8.png',
    name: 'Cove CO Detector',
    description: 'Cove doesn’t want anything to happen to any Americans, and our mission to provide CO Detectors in every home is as real as can be. Avoid the silent killer today.',
    placement: '/static/images/workthrough/placement-8.png',
  },
  {
    src: '/static/images/workthrough/product-9.png',
    name: 'Cove Entry Sensors',
    description: 'With our entry sensor, you are able to protect every part of the home without ever having to worry about intruders entering while you are sleeping or away.',
    placement: '/static/images/workthrough/placement-9.png',
  },
];
const categories = [
  {
    name: 'Guard',
    description: 'With Guard, you will have the most comprehensive security with not only protection from burglars but also fires, floods, and CO.',
    price: 499,
    src: '/static/images/categoryArmor.png',
  },
  {
    name: 'Armor',
    description: 'With Guard, you will have the most comprehensive security with not only protection from burglars but also fires, floods, and CO.',
    price: 499,
    src: '/static/images/categoryArmor.png',
  },
  {
    name: 'Cover',
    description: 'With Guard, you will have the most comprehensive security with not only protection from burglars but also fires, floods, and CO.',
    price: 499,
    src: '/static/images/categoryArmor.png',
  },
  {
    name: 'Defense',
    description: 'With Guard, you will have the most comprehensive security with not only protection from burglars but also fires, floods, and CO.',
    price: 499,
    src: '/static/images/categoryArmor.png',
  },
  {
    name: 'Shield',
    description: 'With Guard, you will have the most comprehensive security with not only protection from burglars but also fires, floods, and CO.',
    price: 499,
    src: '/static/images/categoryArmor.png',
  },
];

const guardDescription = 'With Guard, you will have the most comprehensive security with not only protection from burlars but also fires, floods, and CO.';
class ProductWalkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.load();
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggle = () => {
  }

  load = () => {
    this.props.loadProducts();
  }

  changeView = () => {
  }

  render() {
    const {
      activeIndex,

    } = this.state;
    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
        className="carouselImage"
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    ));

    return (
      <Layout>
        <Header color="secondary" />
        <div className="productContent" >
          <div className="productRow">
            <div className="carouselLeft">
              <h1>Guard</h1>
              <div className="productDescription">
                {guardDescription}
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
              <div className="buttonRow">
                <GreenButton title="Add to cart" />
                <button className="extraButton">NEED EXTRA SENSORS?</button>
              </div>
            </div>
            <div className="carouselRight">
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval={false}
                className="carouselImage"
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
              <img src="/static/images/riskFreeTrial.png" alt="" className="carouselLogo" />
            </div>
          </div>
          <ProductCarousel products={items} />
          <ProductCategory categories={categories} />
          <RiskFreeSection isContentHidden={false} />
        </div>
        <Footer />
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

ProductWalkthrough.propTypes = {
  loadProducts: PropTypes.func,
};

ProductWalkthrough.defaultProps = {
  loadProducts: () => {},
};

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = dispatch => ({
  loadProducts: bindActionCreators(loadProducts, dispatch),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductWalkthrough);
