import { Row, Col, Container } from 'reactstrap';
import s from './coveLiveAssist.scss';
import gs from './styles.scss';

const coveLiveAssist = () => (
  <div className={s.outer}>
    <div className={s.leftImg}>
      <img src="/static/images/supportOperator.jpg" alt="Support Operator" />
    </div>
    <Container>
      <div className={s.container}>
        <Row>
          <Col md={5} />
          <Col md={6}>
            <Row>
              <Col>
                <h1>CoveLive Assist</h1>
                <h3>24/7 support with CoveLive Assist. It speaks for itself, loudly.</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={s.listItem}>
                  <span className={gs.bold}>1. </span> Never worry again with CoveLive Assist
                  coming through the two-way
                  intercom built right into the 7” touchscreen.
                  (No landline necessary)
                </div>
                <div className={s.listItem}>
                  <span className={gs.bold}>2. </span> CoveLive Assist is smart, and can communicate
                   with you through the panel, cellphone, text message, mobile app, and more.

                </div>
                <div className={s.listItem}>
                  <span className={gs.bold}>3. </span> Customize notifications you
                  receive so that you aren’t bothered with unnecessary alerts.
                </div>

                <div className={gs.tryNowBtn}>
                  Try it now
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default coveLiveAssist;
