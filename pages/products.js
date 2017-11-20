import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import Layout from '../components/minimalLayout'
import Header from '../components/header'
import SidebarCart from '../components/sidebarCart'
import ProductModal from '../components/productModal'

const items = [
  {
    src: '/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://localhost:3000/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://127.0.0.1:3000/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
];

const products = {
  'productId123' : {
    id: 'productId123',
    name: 'Cove Door',
    price: 19.99,
    description: 'Cove door sensors are placed on each exterior door. When the door is left open, you’ll know about it. When someone enters the door with the alarm on, you will be notified immediately with our 24/7 monitorin station.',
  }
}

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modal: false,
      activeProduct: 'productId123',
    };
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
        </CarouselItem>
      );
    });

    return (
      <Layout>
        <Container>
          <Header color="secondary"/>
          <Container>
            <div className="productContent">
              <Row>
                <Col  md={8}>
                  <h2>Cove Protect</h2>
                  <div className="productCarousel">
                    <Row>
                      <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        interval={false}
                      >
                        {slides}
                      </Carousel>
                    </Row>
                    <Row>
                      <ul className="mx-auto list-inline productSliderThumbs">
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowLeft.png" />
                        </li>
                        {items.map((item, i) => {
                          return (
                            <li className="list-inline-item" key={item.thumb + Math.random()}>
                              <img src={item.thumb} onClick={() => { this.goToIndex(i)} }/>
                            </li>
                          )
                        })}
                        <li className="list-inline-item link">
                          <img src="/static/images/arrowRight.png" />
                        </li>
                      </ul>
                    </Row>
                  </div>
                </Col>
                <Col md={4} className="no-gutters">
                  <SidebarCart detailAction={this.toggle} />
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
        <ProductModal isOpen={this.state.modal} toggle={this.toggle} product={products[this.state.activeProduct]} className="productModal" />
        <style jsx>{`
          .productContent {
            margin-top:60px;
            width: 100%;
            h2 {
              margin-top: 55px;
              margin-bottom: 35px;
              font-family: GothamRoundedBold;
              font-size: 40px;
            }
            ul {
              list-style: none;
              padding-left: 0px;
            }
          }
          .productSliderThumbs {

          }
          .productCarousel {
            width: 656px;
          }
        `}
        </style>
        <style jsx global>{`
          .productContent {
            .carousel-item {
              border-radius: 16px;
            }
          }
          .productSliderThumbs {
            margin-top: 15px;
            .list-inline-item {
              border-radius: 8px;
              padding-left: 8px;
              padding-right: 8px;
            }
          }
          .link {
            cursor: pointer;
          }
          @media (min-width: 768px) {
            .modal-dialog .productModal {
              width: 944px;
            }
            .modal-lg  {
              width: 944px;
              max-width: 944px;
              height: 536px;
            }
            .productModal {
              .modal-content {
                border-radius: 16px;
                border: 1px solid #F0F4F7;
              }
              .modal-header {
                border: 0px;
              }
            }
          }
        `}
        </style>
      </Layout>
    );
  }
}


export default ProductPage;
