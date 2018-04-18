import React, { Component } from 'react';
import {
  Row,
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

class ProductWalkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modal: false,
      activeProduct: 2,
      selectedView: 0,
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

  toggle = (productId) => {
    this.setState({
      modal: !this.state.modal,
      activeProduct: productId,
    });
  }

  load = () => {
    this.props.loadProducts();
  }

  changeView = (index) => {
    this.setState({ selectedView: index });
  }

  render() {
    const {
      activeIndex,
      activeProduct,
      modal,
      selectedView,
    } = this.state;
    const { products } = this.props;
    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    ));

    return (
      <Layout>
        <Header color="secondary" />
        <div className="productContent" >
          <div className="productLeft">
            <h1>Guard</h1>
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
        <Footer />
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

ProductWalkthrough.propTypes = {
  products: PropTypes.object,
  loadProducts: PropTypes.func,
};

ProductWalkthrough.defaultProps = {
  products: [],
  loadProducts: () => {},
};

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = dispatch => ({
  loadProducts: bindActionCreators(loadProducts, dispatch),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductWalkthrough);
