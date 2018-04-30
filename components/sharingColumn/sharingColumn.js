import Link from 'next/link';
import {
  Row,
  Col,
} from 'reactstrap';
import Input from '../input';
import s from './sharingColumn.scss';

const SharingColumn = () => (
  <Col xs={12} sm={4} className="ml-auto">
    <div className="sharingColumn">
      <Row>
        <div className="leftbar" />
        <Col xs={11}>
          <Row>
            <div className="sharingColumn__input-wrap">
              <Input label="Enter Email for Cove news" />
            </div>
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
        </Col>
      </Row>
      <style jsx>{s}</style>
      <style jsx global>{`
          .sharingColumn__input-wrap .inputBlockClass .coveInput > input {
            font-weight: 300 !important;
          }
        `}
      </style>
    </div>
  </Col>
);

export default SharingColumn;
