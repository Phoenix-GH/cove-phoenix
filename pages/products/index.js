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
import Product from '../../components/product';

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
        {products.length &&
          <Product product={product[0]} />
        }
        <Footer color="secondary" />
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
