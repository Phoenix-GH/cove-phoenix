import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import FooterColumn from '../footerColumn/footerColumn';
import SharingColumn from '../sharingColumn/sharingColumn';
import footerList from './footerList';
import s from './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footerContainer">
      <Row>
        {
          footerList.map(item => (
            <FooterColumn key={item.title} title={item.title} list={item.list} />
          ))
        }
        <SharingColumn />
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col xs={8} className="d-flex justify-content-center">
          <div className="footer__legal">
            <Link href="/terms">
              <span className="footer__link">Legal</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="footer__link">Privacy</span>
            </Link>
            <Link href="/safety">
              <span className="footer__link">Cove Safety Notice</span>
            </Link>
            <Link href="/contact">
              <span className="footer__link">Contact Us</span>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col xs={8} className="d-flex justify-content-center">
          <p className="footer__copywrite">© 2018 Cove Smart, LLC All rights reserved. | 14015 Minuteman Drive, Draper, UT 84020</p>
        </Col>
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default Footer;
