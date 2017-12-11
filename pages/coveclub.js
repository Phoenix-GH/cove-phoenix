import { Container } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import CoveClubFullSize from '../components/coveClubFullsize';
import CoveClubMobile from '../components/coveClubMobile';
import s from './coveclub.scss';

const CoveClub = () => (
  <Layout>
    <Container>
      <Header color="secondary" />
    </Container>
    <div className={s.full}>
      <CoveClubFullSize />
    </div>
    <div className={s.mobile}>
      <CoveClubMobile />
    </div>
  </Layout>
);

export default CoveClub;
