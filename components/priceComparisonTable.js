import { Container, Row, Col } from 'reactstrap';
import style from './priceComparisonTable.scss';

export default () => (
  <div className="priceComparisonTable">
    <Container>
      <Row className="pctHeader align-items-center">
        <Col md={{ size: 3, offset: 6 }} xs={6} sm={6} className="pcTableLogo">
          <img src="/static/images/coveTeal.png" className="pcTableLogoStyle" alt="cove logo" />
        </Col>
        <Col md={3} xs={6} sm={6} >
          <h2>Them</h2>
        </Col>
      </Row>
      <div className="tableRows">
        <Row className="firstRow">
          <Col xs={12} sm={12} md={6} className="pcTableColLeft">
            Long term contracts
          </Col>
          <Col xs={6} sm={6} md={3} className="pcTableColMid">
            Not our style
          </Col>
          <Col xs={6} sm={6} md={3} className="pcTableColRight">
            3-5 years
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft">
            Monthly monitoring
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            $19.99/mo
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            $44.99/mo
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft titlePadding">
            Cancellation fees
          </Col>
          <Col xs={6} md={3} className="pcTableColMid titlePadding">
            None
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            High as $2000
            <p style={{ fontSize: '12px', fontWeight: '300' }}>
              Crazy, we know!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft">
            Service windows
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            None
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            1 - 3 weeks
          </Col>
        </Row>
        <Row className="lastRow">
          <Col xs={12} md={6} className="pcTableColLeft titlePadding">
            Warranty
          </Col>
          <Col xs={6} md={3} className="pcTableColMid titlePadding">
            3 years
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            3 years<br />
            $45 service calls
          </Col>
        </Row>
      </div>
    </Container>
    <style jsx global>{style}</style>
  </div>
);
