import { Row, Col } from 'reactstrap';
export default () => (
  <Row>
    <Col xs={12}>
      <div className="coupon">
        <div className="row">
          <span className="bold flexLeft">
            Have a Coupon
          </span>
          <button onClick={this.toggleCoupon}>
            <img src={`/static/images/${toggleImage}`} alt="toggle" />
          </button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col xs={12}>
              <Input label="Coupon Code" />
            </Col>
          </Row>
        </Collapse>
      </div>
    </Col>
  </Row>
);
