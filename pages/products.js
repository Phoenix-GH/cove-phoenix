import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Layout from '../components/minimalLayout'
import Header from '../components/header'
import CartAddon from '../components/cartAddon'

const items = [
  {
    src: '/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/static/images/placeholderBig.png',
    thumb: '/static/images/placeholderThumb.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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
                <Col md={8}>
                  <h2>Cove Protect</h2>
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                </Col>
                <Col md={4} className="no-gutters">
                  <div className="cartColumn">
                    <div className="cartHeader">
                      <h4>Cove Protect alarm system started pack</h4>
                      <ul>
                        <li>1 Cove Protect panel</li>
                        <li>2 Cove doors</li>
                        <li>1 Cove remote</li>
                      </ul>
                    </div>
                    <div className="cartSubHeader">
                      <h4>How many sensors should I add?</h4>
                      <p>Don’t worry too much, you can add more sensors later, or send the ones you don’t need free of charge.</p>
                    </div>
                    <CartAddon />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
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
          .cartHeader {
            margin: 20px;
          }
          .cartSubHeader {
            position: relative;
            height: 142px;
            margin-top:40px;
            margin-bottom: 90px;
            h4, p {
              padding-left: 25px;
              padding-right: 25px;
            }
            h4 {
              padding-top: 0px;
              color: #00B19A;
            }
            &::before {
              content: "";
              position: absolute;
              width: 8px;
              height: 100%;
              margin-left: -1px;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
              background: #00B19A;
            }
          }
          .cartColumn {
            -webkit-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            -moz-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
            height: 1085px;
            width: 385px;
            margin-bottom: 15px;
            border-radius: 16px;
            border: 1px solid #F0F4F7;
            h4 {
              font-family: GothamRoundedBold;
              font-size: 24px;
            }
          }
        `}
        </style>
      </Layout>
    );
  }
}


export default Example;
