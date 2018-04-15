import React, { Component } from 'react';
import {
  Container,
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
import SidebarCart from './sidebarCart';
import ProductModal from '../../components/productModal';
import Footer from '../../components/footer/footer';
import styles from './product.scss';

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

class ProductPage extends Component {
  static getInitialProps() {
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modal: false,
      activeProduct: 2,
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

  render() {
    const { activeIndex, activeProduct, modal } = this.state;
    const { products } = this.props;
    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carouselImage" width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    ));

    return (
      <Layout>
        <Header color="secondary" />
        <Container>
          <div className="productContent" >
            <Row>
              <Col xl={8} lg={8} md={12} xs={12}>
                <div className="productLeft">
                  <h3>Cove Door Sensor</h3>
                  <div className="productCarousel">
                    <Row>
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
                    </Row>
                    <Row>
                      <ul className="mx-auto list-inline productSliderThumbs">
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowLeft.png" alt="arrowLeft" />
                        </li>
                        {items.map((item, i) => (
                          <li className="list-inline-item" key={item.thumb + Math.random()}>
                            <button onClick={() => { this.goToIndex(i); }}>
                              <img src={item.thumb} alt="thumb" />
                            </button>
                          </li>
                          ))}
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowRight.png" alt="arrowRight" />
                        </li>
                      </ul>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={0} sm={0} className="no-gutters">
                <SidebarCart detailAction={this.toggle} />
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
        {products[activeProduct] ?
          <ProductModal
            isOpen={modal}
            toggle={this.toggle}
            product={products[activeProduct]}
            className="productModal"
          />
          : ''
        }
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

ProductPage.propTypes = {
  products: PropTypes.object,
  loadProducts: PropTypes.func,
};

ProductPage.defaultProps = {
  products: [],
  loadProducts: () => {},
};

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = dispatch => ({
  loadProducts: bindActionCreators(loadProducts, dispatch),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductPage);
