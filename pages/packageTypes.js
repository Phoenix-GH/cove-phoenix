import { Container } from 'reactstrap';
import Layout from '../components/minimalLayout';
import Header from '../components/header';
import Footer from '../components/footer/footer';
import PackageInfoBox from '../components/packageTypes/packageInfoBox';
import PackageCatalog from '../components/packageTypes/packageCatalog';
import PackageBackgroundImage from '../components/packageTypes/packageBackgroundImage';
import WatchVideoLink from '../components/watchVideoLink/watchVideoLink';
import RiskFreeSection from '../components/riskFreeSection/riskFreeSection';
import stylesheet from '../styles/pages/packageTypes.scss';

const PackageTypes = () => (
  <Layout>
    <Container fluid>
      <Header />
    </Container>
    <div className="package-types-container">
      <div className="cover-section">
        <img src="/static/images/packageTypes/coverBackground.jpg" alt="background" srcSet="/static/images/packageTypes/coverBackground.jpg 1440w, /static/images/packageTypes/coverBackground@2x.jpg 2880w" className="cover-background" />
        <div className="cover-content">
          <img src="/static/images/downArrow.png" alt="" className="down-arrow" />
          <div className="slogan">
            <h1>If it’s safe, it’s Cove.</h1>
            <div className="video-link">
              <WatchVideoLink link="/" />
            </div>
          </div>
        </div>
      </div>

      <div className="package-types-content">
        <div className="package-intro">
          <h2>
            <span>Design your system or pick from our</span>
            <span>packages that we designed to every need.</span>
          </h2>
          <p>
            We have created multiple packages that can meet every
            need or you can design your own with our custom design
            tool. All packages include a Cove Protect 7” touchscreen
            panel.
          </p>
        </div>
      </div>

      <PackageBackgroundImage imageFilename="buildYourOwnSystem" ext="jpg" className="build-your-own-box">
        <PackageInfoBox buttonLabel="Build my system" href="/" title="Build Your Own">
          With Guard, you will have the most comprehensive security
          with not only protection from burglars but also fires,
          floods, and CO.
        </PackageInfoBox>
      </PackageBackgroundImage>

      <div className="package-catalog-container">
        <PackageCatalog />
      </div>

      <RiskFreeSection />
    </div>
    <Footer />
    <style jsx>{stylesheet}</style>
  </Layout>
);

export default PackageTypes;
