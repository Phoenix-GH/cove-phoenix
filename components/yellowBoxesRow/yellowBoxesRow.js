import {
  Row,
  Col,
} from 'reactstrap';
import uuidv4 from 'uuid/v4';
import s from './yellowBoxesRow.scss';

const YellowBoxesRow = () => (
  <div className="yellowBoxes">
    <Row>
      {[...Array(12)].map(() => (
        <Col xs={1} key={uuidv4()}>
          <div className="footerSquare" />
        </Col>))
      }
    </Row>
    <style jsx>{s}</style>
  </div>
);

export default YellowBoxesRow;
