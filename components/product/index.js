import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SidebarCart from '../../pages/products/sidebarCart';
import Footer from '../../components/footer/footer';
import Switcher from '../switcher/switcher';
import styles from './product.scss';
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

export default class Product extends Component {
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
  }

  toggle = (productId) => {
    this.setState({
      modal: !this.state.modal,
      activeProduct: productId,
    });
  }

  changeView = (index) => {
    this.setState({ selectedView: index });
  }

  render() {
    let { product } = this.props;
    product = [product];
    const {
      activeProduct,
      modal,
      selectedView,
    } = this.state;

    return (
      <Container>
        <div className="productContent" >
          <Row>
            <Col xl={6} lg={6} md={12} xs={12}>
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
                  <WatchVideoLink title="Watch Install Video" size="medium" font="gotham" />
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={0} sm={0} className="no-gutters">
              <SidebarCart
                products={product}
                detailAction={this.toggle}
                headerText={headerText}
                showDetails={false}
              />
            </Col>
          </Row>
        </div>
        <style jsx>{styles}</style>
      </Container>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};
