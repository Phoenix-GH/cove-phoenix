import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { loadProducts } from '../actions.js';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import SidebarCart from '../components/sidebarCart';
import ProductModal from '../components/productModal';
import s from './product.scss';

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
  static getInitialProps({store, isServer, pathname, query}) {
      //    store.dispatch({type: 'LOAD_PRODUCTS', payload: [{id:3}]}); // component will be able to read from store's state when rendered
          return {custom: 'custom'}; // you can pass some custom props to component from here
      }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modal: false,
      activeProduct: 2,
    };
    this.load();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggle(productId) {
    this.setState({
      modal: !this.state.modal,
      activeProduct: productId
    });
  }

  load = () => {
    this.props.loadProducts();
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
        src={item.src}
        altText={item.altText}
      />
    ));

    return (
      <Layout>
        <Container >
          <Header color="secondary" />
          <Container>
            <div className={s.productContent} >
              <Row>
                <Col xl={8} lg={7} md={6}>
                  <h2>Cove Protect</h2>
                  <div className={s.productCarousel}>
                    <Row>
                      <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={false}
                        className="mx-auto"
                      >
                        {slides}
                      </Carousel>
                    </Row>
                    <Row>
                      <ul className={`mx-auto list-inline ${s.productSliderThumbs}`}>
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowLeft.png" />
                        </li>
                        {items.map((item, i) => (
                          <li className="list-inline-item" key={item.thumb + Math.random()}>
                            <img src={item.thumb} onClick={() => { this.goToIndex(i); }} />
                          </li>
                          ))}
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowRight.png" />
                        </li>
                      </ul>
                    </Row>
                  </div>
                </Col>
                <Col xl={4} lg={5} md={6} className="no-gutters">
                  <SidebarCart detailAction={this.toggle} />
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
        {this.props.products[this.state.activeProduct] ?
          <ProductModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            product={this.props.products[this.state.activeProduct]}
            className="productModal"
          />
          :''
        }
      </Layout>
    );
  }
}

const mapStateToProps = ({ cart, products }) => ({ cart, products })

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: bindActionCreators(loadProducts, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductPage);
