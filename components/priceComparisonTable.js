import { Container, Row, Col } from 'reactstrap';
import s from './priceComparisonTable.scss';

export default () => (
  <div className={s.priceComparisonTable}>
    <Container>
      <Row className={`${s.pctHeader} align-items-center`}>
        <Col md={{ size: 3, offset: 6 }} xs={6} sm={6} className={s.pcTableLogo}>
          <img src="/static/images/coveTeal.png" className={s.pcTableLogoStyle} alt="cove logo" />
        </Col>
        <Col md={3} xs={6} sm={6} >
          <h1>Them</h1>
        </Col>
      </Row>
      <div className={s.tableRows}>
        <Row className={s.firstRow}>
          <Col xs={12} sm={12} md={6} className={s.pcTableColLeft}>
            Long term contracts
          </Col>
          <Col xs={6} sm={6} md={3} className={s.pcTableColMid}>
            Not our style
          </Col>
          <Col xs={6} sm={6} md={3} className={s.pcTableColRight}>
            3-5 years
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.pcTableColLeft}>
            Monthly Monitoring
          </Col>
          <Col xs={6} md={3} className={s.pcTableColMid}>
            $19.99
          </Col>
          <Col xs={6} md={3} className={s.pcTableColRight}>
            $44.99
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.pcTableColLeft}>
            Cancellation Fees
          </Col>
          <Col xs={6} md={3} className={s.pcTableColMid}>
            None
          </Col>
          <Col xs={6} md={3} className={s.pcTableColRight}>
            High as $2000
            <p style={{ fontSize: '10px' }}>
              Crazy, we know
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.pcTableColLeft}>
            Service Windows
          </Col>
          <Col xs={6} md={3} className={s.pcTableColMid}>
            None
          </Col>
          <Col xs={6} md={3} className={s.pcTableColRight}>
            1 - 3 weekss
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.pcTableColLeft} >
            Finance Equipment at 0% APR
          </Col>
          <Col xs={6} md={3} className={s.pcTableColMid}>
            Yes
          </Col>
          <Col xs={6} md={3} className={s.pcTableColRight}>
            No
          </Col>
        </Row>
        <Row className={s.lastRow}>
          <Col xs={12} md={6} className={s.pcTableColLeft} style={{ paddingTop: '20px' }}>
            Warranty
          </Col>
          <Col xs={6} md={3} className={s.pcTableColMid} style={{ paddingTop: '20px' }}>
            3 years
          </Col>
          <Col xs={6} md={3} className={s.pcTableColRight}>
            <p>3 years</p>
            <p>$45 service calls</p>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);
