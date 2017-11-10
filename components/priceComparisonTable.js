import { Row, Col } from 'reactstrap';

export default () => (
  <div className="priceComparisonTable text-center">
    <Row className="mt-5  align-items-center">
      <Col xs={6}>
      </Col>
      <Col xs={3} style={{ borderRight: '1px solid #969696' }}>
        <img src="/static/images/logoBlue.png"  style={pcTableLogoStyle}/>
      </Col>
      <Col xs={3}>
        <h1>Them</h1>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft}>
        Long term contracts
      </Col>
      <Col xs={3} style={pcTableColMid}>
        Not our style
      </Col>
      <Col xs={3} style={pcTableColRight}>
        3-5 years
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft}>
        Monthly Monitoring
      </Col>
      <Col xs={3} style={pcTableColMid}>
        $19.99
      </Col>
      <Col xs={3}  style={pcTableColRight}>
        $44.99
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft}>
        Cancellation Fees
      </Col>
      <Col xs={3}  style={pcTableColMid}>
        None
      </Col>
      <Col xs={3}  style={pcTableColRight}>
        High as $2000
        <p style={{ fontSize: '10px' }}>
          Crazy, we know
        </p>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft}>
        Service Windows
      </Col>
      <Col xs={3} style={pcTableColMid}>
        None
      </Col>
      <Col xs={3}  style={pcTableColRight}>
        1 - 3 weeks
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft} >
        Finance Equipment at 0% APR
      </Col>
      <Col xs={3} style={pcTableColMid}>
        Yes
      </Col>
      <Col xs={3}  style={pcTableColRight}>
        No
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col xs={6} style={pcTableColLeft}>
        Warranty
      </Col>
      <Col xs={3} style={pcTableColMid}>
        3 years
      </Col>
      <Col xs={3}  style={pcTableColRight}>
        <p>3 years</p>
        <p>$45 service calls</p>
      </Col>
    </Row>
  </div>
)

const pcTableLogoStyle = {
  paddingBottom: '10px',
}

const pcTableColLeft = {
  borderRight: '1px solid #969696',
  fontWeight: 700,
  fontSize: '24px',
}

const pcTableColMid = {
  height: '33px',
  color: '#33c8f8',
  fontFamily: 'AvenirNext',
  fontSize: '24px',
}

const pcTableColRight = {
  color: '#ff0000',
  fontSize: '24px',
}
