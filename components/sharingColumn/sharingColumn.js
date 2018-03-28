import Link from 'next/link';
import {
  Row,
  Col,
} from 'reactstrap';
import Input from '../input';
import s from './sharingColumn.scss';

const SharingColumn = () => (
  <div className="sharingColumn">
    <Row>
      <div className="leftbar" />
      <div>
        <Row>
          <Input label="Enter Email for Cove news" />
        </Row>
        <div className="socialRow">
          <Row>
            <Col xs={2}>
              <Link href="http://facebook.com">
                <img src="/static/images/facebook.png" alt="facebook" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link href="https://twitter.com">
                <img src="/static/images/twitter.png" alt="twitter" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link href="https://instagram.com">
                <img src="/static/images/instagram.png" alt="instagram" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link href="https://youtube.com">
                <img src="/static/images/youtube.png" alt="youtube" />
              </Link>
            </Col>
            <Col xs={2}>
              <Link href="https://whatsapp.com">
                <img src="/static/images/whatsapp.png" alt="whatsapp" />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
    <style jsx>{s}</style>
  </div>
);

export default SharingColumn;
