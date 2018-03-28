import Layout from '../components/minimalLayout';
import Header from '../components/landing/header';
import Cover from '../components/landing/cover';

const LandingOne = () => (
  <Layout className="landing-one">
    <Header/>
    <Cover 
      backgroundImage="/static/images/landing-one-cover.jpg"
      text="If it’s Cove, <br>it’s covered."
      align="right"
      color="#4E5661" />
  </Layout>
);

export default LandingOne;
