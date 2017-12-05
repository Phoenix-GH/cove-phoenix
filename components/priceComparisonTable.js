    import { Container, Row, Col } from 'reactstrap';

  export default () => (
    <div className="priceComparisonTable">
      <Container>
        <Row className="pctHeader align-items-center">
          <Col md={{ size: 3, offset: 6 }} xs={6} sm={6} className="pcTableLogo">
            <img src="/static/images/coveTeal.png"  style={pcTableLogoStyle} />
          </Col>
          <Col md={3}  xs={6} sm={6} >
            <h1>Them</h1>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={12} sm={12} md={6} className="pcTableColLeft">
            Long term contracts
          </Col>
          <Col xs={6} sm={6} md={3} className="pcTableColMid">
            Not our style
          </Col>
          <Col xs={6}  sm={6} md={3} className="pcTableColRight">
            3-5 years
          </Col>
        </Row>
        <Row className="no-gutters">
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
        <Row className="no-gutters">
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
        <Row className="no-gutters">
          <Col xs={12} md={6} className="pcTableColLeft">
            Service Windows
          </Col>
          <Col xs={6} md={3} className="pcTableColMid">
            None
          </Col>
          <Col xs={6} md={3} className="pcTableColRight">
            1 - 3 weeks
          </Col>
        </Row>
        <Row className="no-gutters">
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
        <Row className="no-gutters">
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
      </Container>
      <style jsx global>{`
        .priceComparisonTable {
          h1 {
            font-size: 32px;
          }
          .pctHeader {
              padding-bottom: 20px;
              margin-top: 66px;
          }
          .row {
            border-bottom: 1px solid #BEC2C5;
            font-family: GothamRoundedBold;
            font-size: 20px;
            padding-top: 20px;
          }
          .col {
            padding-left: 20px;
          }
          .pcTableColLeft {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: bold;
            padding-left: 100px;
            @media (max-width: 767px) {
              padding-left: 0px;
            }
          }
          .pcTableColMid {
            height: 56px;
            color: #00B19B;
          }
          .pcTableColRight {

          }
        }
        .pcTableLogo {

        }
      `}
      </style>
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
