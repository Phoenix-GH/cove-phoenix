import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from 'reactstrap';import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Input from '../components/input';
import Radio from '../components/radio';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import AddEquipmentRow from '../components/addEquipmentRow.js';
import gs from '../components/styles.scss';
import s from './addEquipment.scss';

const items = [
];

class AddEquipmentPage extends Component {
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
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={s.header}>
              <Col>
                <h1 className={gs.pageHeader}>Add Equipment</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} className={s.leftSection}>
                <Row>
                  <AddEquipmentRow />
                </Row>
                <Row>
                  <Row className={s.paymentRow}>
                    <Col>
                      <span className={gs.primaryLink}>Click Here</span> to add Smoke, Carbon, or Flood
                    </Col>

                  </Row>
                  <Row className={s.paymentRow}>
                    <Col xs={8}>
                      1 motion, 2 window sensors
                    </Col>
                    <Col xs={4} className={s.costCol}>
                      $60  or  $1.15/mo
                    </Col>
                  </Row>
                  <Row className={s.paymentRow}>
                    <Col xs={8}>
                      Current Monthly Equipment Payment
                    </Col>
                    <Col xs={4} className={s.costCol}>
                      $8.56
                    </Col>
                  </Row>
                </Row>
                <Row className={s.paymentSummaryRow}>
                  <Col>
                    <Radio label={[<span className={gs.bold}>Pay equipment in full</span>]} />
                  </Col>
                </Row>
                <Row className={s.paymentSummaryRow}>
                  <Col>
                    <Radio label={[<span className={gs.bold}>Finance equipment at 0% APR for 60 months</span>]} />
                  </Col>
                </Row>
                <Row className={s.paymentSummaryRow}>
                  <Col>
                    <h5 className={s.newTotalHeading}>New Equipment Payment</h5>
                    <span className={s.newTotal}>$1.15 + $8.56 = $9.71</span>
                  </Col>
                </Row>
                <Row className={s.paymentSummaryRow}>
                  <Col xs={{ offset: 7, size: 5}}>
                    <div className={gs.actionBtn}>Add to Payment</div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className={s.rightSection}>
                <div className={s.productCarousel}>
                  <Row>
                    <Col>
                      <h2 className={s.productTitle}>Cove Door</h2>
                    </Col>
                  </Row>
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
                  <Row>
                    <Col>
                      <p className={s.productDescription}>
                        Cove door sensors are placed on each exterior door.
                        When the door is left open, you’ll know about it.
                        When someone enters the door with the alarm on,
                        you will be notified immediately with our 24/7 monitorin station.
                      </p>
                    </Col>
                  </Row>
                </div>

              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}


const mapStateToProps = ({ cart, products }) => ({ cart, products});

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: bindActionCreators(loadProducts, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddEquipmentPage);
