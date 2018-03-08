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
          <h1>Them</h1>
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
            Monthly Monitoring
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            $19.99
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            $44.99
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft">
            Cancellation Fees
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            None
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            High as $2000
            <p style={{ fontSize: '10px' }}>
              Crazy, we know
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft">
            Service Windows
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            None
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            1 - 3 weekss
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pcTableColLeft" >
            Finance Equipment at 0% APR
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            Yes
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            No
          </Col>
        </Row>
        <Row className="lastRow">
            <Col xs={12} md={6} className="pcTableColLeft" style={{ paddingTop: '20px' }}>
              Warranty
            </Col>
            <Col xs={6} md={3} className="pcTableColMid" style={{ paddingTop: '20px' }}>
              3 years
            </Col>
            <Col xs={6} md={3} className="pcTableColRight">
              <p>3 years</p>
              <p>$45 service calls</p>
            </Col>
        </Row>
      </div>
    </Container>
    <style jsx global>{style}</style>
  </div>
);
