import Link from 'next/link'
import Layout from '../components/minimalLayout'
import { Row, Col } from 'reactstrap'

const Index = () => (
  <div style={landingHeaderStyle}>
    <Layout>
      <div>
        <Row className="landingHeader">
          Test
        </Row>
      </div>
    </Layout>
    <div></div>
<div></div>
  </div>
)

export default Index


const landingHeaderStyle = {
    backgroundImage: 'url("/static/images/bannerReadyToArm.png")',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
