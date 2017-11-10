import Link from 'next/link'
import Layout from '../components/minimalLayout'
import Navbar from '../components/navbar'
import PriceComparisonTable from '../components/priceComparisonTable'
import { Row, Col } from 'reactstrap'

const Index = () => (
  <Layout>
    <div style={navContainerStyle}>
      <Navbar showOrderBtn />
    </div>
    <Row className="no-gutters" style={landingHeaderStyle} >
      <div style={headerCenterTextStyle}>
        <h1>Fair and Honest Prices.</h1>
        <h3>Packages starting at $19.99</h3>
      </div>
      <Row className="align-items-end justify-content-center">
        <Col xs={4} className="mx-auto" style={{
          marginTop: '30px',
          position: 'relative',
          bottom: '18%',
        }}>
          <Link href="/products">
            <div style={{
              ...primaryRectangle,
               marginRight: 'auto',
               marginLeft: 'auto',
             }}>
              Order Now
            </div>
          </Link>
        </Col>
      </Row>
    </Row>
    <PriceComparisonTable />
    <Link href="/products">
      <div style={{
        ...primaryRectangle,
         marginRight: 'auto',
         marginLeft: 'auto',
         marginTop: '90px',
       }}>
        Try Now
      </div>
    </Link>
    <Row style={stepRowStyle} className="no-gutters">
      <Col sm={6} className="align-middle">
        <div className="steps">
          <h1>Designed to be simple</h1>
          <h2>Step 1: Plug in the panel</h2>
          <h2>Step 2: Put up sensors</h2>
          <h2>Step 3: There is no step 3</h2>
          <div style={{
            ...primaryRectangle,
             marginRight: 'auto',
             marginLeft: 'auto',
             marginTop: '20px',
           }}>
            Try Now
          </div>
        </div>
      </Col>
      <Col sm={6}>
        <img src="/static/images/bannerPackage.png" className="img-fluid" />
      </Col>
    </Row>
    <style jsx>{`
      .steps {
        margin-top: 20px;
        margin-left: 30px;
        h2 {
          padding: 30px;
          color: #0e5b54;
        }
      }
    `}
    </style>
  </Layout>
)

export default Index


const landingHeaderStyle = {
    backgroundImage: 'url("/static/images/bannerReadyToArm.png")',
    height: '100%',
    minHeight: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}

const navContainerStyle = {
  position: 'absolute',
  width:'100%',
}

const primaryRectangle = {
  borderRadius: '0px',
  width: '253px',
  height: '59px',
  border: '1px solid #969696',
  background: '#34c9f9',
  boxShadow: '0px 2px 4px rgba:(0,0,0,0.5)',
  color: '#000000',
  fontFamily: 'AvenirNext',
  fontSize: '20px',
  fontWeight: '700',
  textAlign: 'center',
  paddingTop: '10px',
}

const headerCenterTextStyle = {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  top: '35%',
  height: '100px',
  marginTop: '-50px',
}

const stepRowStyle = {
  borderTop: '1px solid #969696',
  borderBottom: '1px solid #969696',
  background: '#e9ecef',
  padding: '20px',
}
