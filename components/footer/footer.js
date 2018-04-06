import { Row } from 'reactstrap';
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
            <FooterColumn title={item.title} list={item.list} width={item.width} />
          ))
        }
        <SharingColumn />
      </Row>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default Footer;
