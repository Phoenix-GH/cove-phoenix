import { Container, Row, Col } from 'reactstrap';
import gs from './styles.scss';

const Winwin = () => (
  <Container className="container">
    <div className="containerBorder">
      <h1>Win-Win</h1>
      <Row>
        <Col md={{ offset: 1, size: 4 }}>
          <h3>Old</h3>
          <div className="listItem">
            <span className="bold">1.</span> Happy or not, here they come. 3-5 years contracts
          </div>
          <div className="listItem">
            <span className="bold">2.</span> Too much $$
          </div>
          <div className="listItem">
            <span className="bold">3.</span> Dozens of useless feature
          </div>
          <div className="listItem">
            <span className="bold">4.</span> Their way or the highway
          </div>
          <div className="listItem">
            <span className="bold">5.</span> Vague and ambiguos pricing (Call now to “Get a Quote”)
          </div>
        </Col>
        <Col md={{ offset: 2, size: 4 }}>
          <h3>Cove</h3>
          <div className="listItem">
            <span className="bold">1.</span> Cancel anytime
          </div>
          <div className="listItem">
            <span className="bold">2.</span> AMAZING prices
          </div>
          <div className="listItem">
            <span className="bold">3.</span> Dozens of useless features, that you don’t have to pay for
          </div>
          <div className="listItem">
            <span className="bold">4.</span> You choose what you want
          </div>
          <div className="listItem">
            <span className="bold">5.</span> Transparent prices
          </div>
        </Col>
      </Row>
      <div className={`${gs.tryNowBtn} ${gs.blockCenter}`}>
        Try it now
      </div>
    </div>
    <style jsx>{`
      @import 'variables';

      .container {
        padding: 8px;
        margin-bottom: 50px;

        h1 {
          text-align: center;
          color: $primary-color;
        }

        h3{
          font-family: GothamRoundedBold;
          font-size: 24px;
        }
      }

      .containerBorder {
        border: 8px solid $primary-color;
        border-radius: 32px;
        padding-top: 50px;
        padding-bottom: 30px;
      }


      .listItem {
        margin-bottom: 45px;
        font-family: GothamRoundedBook;
        font-size: 20px;
      }

      .bold {
        font-family: GothamRoundedBold;
      }
    `}</style>
  </Container>
);

export default Winwin;
