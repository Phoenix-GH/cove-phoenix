import { Container, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { getProductsR } from '../redux/general/routine';
import Layout from '../components/minimalLayout';
import CheckoutSidebar from '../components/checkoutSidebar/checkoutSidebar';
import BackButton from '../components/backButton/backButton';
import s from './cart.scss';

const ShoppingCart = () => (
  <Layout>
    <Container>
      <Row>
        <div className="mobileCartHeader">
          <BackButton title="Return to Customer Info" link="/checkout" />
        </div>
        <CheckoutSidebar mobile />
      </Row>
    </Container>
    <style jsx>{s}</style>
  </Layout>
);

const mapStateToProps = ({ cart, products }) => ({ cart, products });

const mapDispatchToProps = {
  getProductsR,
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ShoppingCart);
