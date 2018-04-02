import { Container, Row } from 'reactstrap';
import FooterColumn from '../footerColumn/footerColumn';
import SharingColumn from '../sharingColumn/sharingColumn';
import footerList from './footerList';
import s from './productFooter.scss';

const ProductFooter = () => (
  <div className="productFooter">
    <Container>
      <Row>
        {
          footerList.map(item => (
            <FooterColumn title={item.title} list={item.list} width={item.width} />
          ))
        }
        <SharingColumn />
      </Row>
    </Container>
    <style jsx>{s}</style>
  </div>
);

export default ProductFooter;
