import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../../store';
import { getProductsR } from '../../redux/general/routine';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import SidebarCart from './sidebarCart';
import ProductModal from '../../components/productModal';
import Footer from '../../components/footer/footer';
import Switcher from '../../components/switcher/switcher';
import styles from './product.scss';
import FooterMobile from '../../components/footer/footerMobile';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';

const items = [
  {
    src: '/static/images/products/product-thumbnail1.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: '/static/images/products/product-thumbnail2.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: '/static/images/products/product-thumbnail3.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
];
const headerText = 'Cove Door sensors allow you to protect every entry point with ease. With instant notifications and customizable sound alerts, you can know when poeple come into your home, and who checked in.';

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
    this.props.getProductsR();
  }

  changeView = (index) => {
    this.setState({ selectedView: index });
  }

  render() {
    const {
      activeProduct,
      modal,
      selectedView,
    } = this.state;
    const products = this.props.general.products.data.sensor || [];
    let product = [];
    if (products && products.length > 0) {
      product.push(products[0]);
      product[0].productId = '111';
      product[0].thumbSrc = '/static/images/products/product-product.png';
    }
    return (
      <Layout>
        <Header color="secondary" callingPage="products" />
        <Container>
          <div className="productContent" >
            <Row>
              <Col xl={8} lg={8} md={12} xs={12}>
                <div className="productLeft">
                  <h3>Cove Door Sensor</h3>
                  <Switcher list={['Overview', 'Details']} selected={selectedView} onSelect={index => this.changeView(index)} />
                  <div className="productCarousel">
                    <img src="/static/images/products/product-product.png" alt="product" className="productImage" />
                    <Row>
                      <ul className="mx-auto list-inline productSliderThumbs">
                        {items.map(item => (
                          <li className="list-inline-item" key={item.src + Math.random()}>
                            <img src={item.src} alt="thumb" />
                          </li>
                          ))
                        }
                      </ul>
                    </Row>
                  </div>
                  <div className="center">
                    <WatchVideoLink title="Watch Install Video" size="medium" />
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={0} sm={0} className="no-gutters">
                <SidebarCart
                  products={product}
                  detailAction={this.toggle}
                  headerText={headerText}
                />
              </Col>
            </Row>
          </div>
        </Container>
        <Row>
          <div className="desktopOnly">
            <Row>
              <Col md={12} className="d-flex justify-content-middle align-items-center">
                <div className="divFull" >
                  <Footer color="secondary" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="mobileOnly">
            <FooterMobile color="secondary" />
          </div>
          <Row>
            <div className="bottomSection">
              &nbsp;
            </div>
          </Row>
        </Row>
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
  general: PropTypes.object,
};

ProductPage.defaultProps = {
  products: {},
  getProductsR: () => {},
  general: {},
};

const mapStateToProps = ({ general }) => ({ general });

const mapDispatchToProps = {
  getProductsR,
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductPage);
