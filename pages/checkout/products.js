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
import { getProductsR } from '../../redux/general/routine';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import SidebarCart from '../../components/sidebarCart';
import ProductModal from '../../components/productModal';
import CustomizedRange from '../../components/estimateSlider';
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
    //  store.dispatch({type: 'LOAD_PRODUCTS', payload: [{id:3}]});
    // component will be able to read from store's state when rendered
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modal: false,
      activeProduct: 2,
    };
    this.props.getProductsR();
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
    console.log('toggle', productId)
    this.setState({
      modal: !this.state.modal,
      activeProduct: productId,
    });
  }

  render() {
    const { activeIndex, activeProduct, modal } = this.state;
    const products = this.props.general.products.data.sensor || [];
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
                  <h2>Cove Protect</h2>
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
                  <div className="descriptionRow">
                    <Row>
                      <Col xs={6}>
                        <img src="/static/images/24monitoring.png" alt="24/7 Professional Monitoring" />
                      </Col>
                      <Col xs={6}>
                        <h2 className="titlePadding">24/7 Professional Monitoring</h2>
                        <div className="description">
                          With 24/7 Professinoal Monitoring,
                          you know your home is protected all the time,
                          not just when you are looking.
                        </div>
                        <Row>
                          <ul>
                            <li>5 Star Monitoring Station</li>
                            <li>$19.99/mo</li>
                            <li>No contracts</li>
                          </ul>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div className="descriptionRow">
                    <Col xs={6}>
                      <h2>Setup is easy.
                        <br />Protection is tough.
                      </h2>
                      <div className="description">
                        With the most unique and simple setup process in the entire industry,
                          you are able to protect your home within minutes.
                      </div>
                    </Col>
                  </div>
                  <div className="descriptionRow">
                    <Row>
                      <Col xs={6}>
                        <img src="/static/images/securityChart.png" alt="24/7 Professional Monitoring" />
                      </Col>
                      <Col xs={6}>
                        <h2 className="grey">Less Markup.</h2>
                        <h2 className="green">More Security.</h2>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col xs={12}>
                      <Col xs={{ size: 6, offset: 3 }}>
                        <h2 className="center titlePadding">
                          Savings so big, you can&#39;t help but love it.
                        </h2>
                      </Col>
                      <div className="saving center">
                        Every year with Cove is more money in your pocket
                        from what you would have paid with other security companies.
                        <p>
                          We cut out the middlemen markup.
                        </p>
                        <CustomizedRange />
                      </div>
                    </Col>
                  </Row>
                  <div className="descriptionRow">
                    <Row>
                      <Col xs={7}>
                        <Row>
                          <h2 className="grey titlePadding">
                            100% satisfaction
                            <br />guaranteed
                          </h2>
                          <div className="grey">
                            Try out Cove for 60 days free, and if you don&#39;t like
                            it more than your children, send it back for a complete refund.
                          </div>
                        </Row>
                      </Col>
                      <Col xs={5}>
                        <img src="/static/images/riskFreeTrial.png" alt="Risk Free 60 Day Trial" />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={0} sm={0} className="no-gutters">
                <SidebarCart detailAction={this.toggle} products={products} />
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
  getProductsR: PropTypes.func,
};

ProductPage.defaultProps = {
  products: {},
  getProductsR: () => {},
};

const mapStateToProps = ({ general }) => ({ general });

const mapDispatchToProps = {
  getProductsR,
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductPage);
