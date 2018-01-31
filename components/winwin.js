import { Container, Row, Col } from 'reactstrap';
import s from './winwin.scss';
import gs from './styles.scss';

const Winwin = () => (
  <Container className={s.container}>
    <div className={s.containerBorder}>
      <h1>Win-Win</h1>
      <Row>
        <Col md={{ offset: 1, size: 4 }}>
          <h3>Old</h3>
          <div className={s.listItem}>
            <span className={s.bold}>1.</span> Happy or not, here they come. 3-5 years contracts
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>2.</span> Too much $$
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>3.</span> Dozens of useless feature
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>4.</span> Their way or the highway
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>5.</span> Vague and ambiguos pricing (Call now to “Get a Quote”)
          </div>
        </Col>
        <Col md={{ offset: 2, size: 4 }}>
          <h3>Cove</h3>
          <div className={s.listItem}>
            <span className={s.bold}>1.</span> Cancel anytime
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>2.</span> AMAZING prices
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>3.</span> Dozens of useless features, that you don’t have to pay for
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>4.</span> You choose what you want
          </div>
          <div className={s.listItem}>
            <span className={s.bold}>5.</span> Transparent prices
          </div>
        </Col>
      </Row>
      <div className={`${gs.tryNowBtn} ${gs.blockCenter}`}>
        Try it now
      </div>
    </div>
  </Container>
);

export default Winwin;
