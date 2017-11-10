import { Row, Col } from 'reactstrap'
import Navbar from '../components/navbar'
import Layout from '../components/minimalLayout'

const Products = () => (
  <Layout>
    <div className="defaultHeader">
      <Navbar />
    </div>
    <style jsx>{`
      .defaultHeader {
        background: #D7D7D7;
        height: 116px;
      }
      .addToCart {
        border-radius: 0px;
        width: 417px;
        height: 54px;
        background: #0076e2;
        box-shadow: 0px 2px 7px #0076E2;
        color: #FFFFFF;
        text-align: center;
      }
    `}
    </style>
    <Row>
      <Col sm={6}>

      </Col>
      <Col sm={6}>
        <div className="addToCart mx-auto">
          <span>ADD TO CART</span>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default Products
