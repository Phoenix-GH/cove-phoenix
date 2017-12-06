import Link from 'next/link'
import Layout from '../components/minimalLayout'
import Header from '../components/header'
import PriceComparisonTable from '../components/priceComparisonTable'
import { Container, Row, Col } from 'reactstrap'

const CoveClub = () => (
  <Layout>
    <Container>
      <Header color="secondary" />
      <Row>
        <Col>
          <h2>Cove members to Cove Pay</h2>
          <div className="titleSubText">
            Save $5/mo on your monitoring and use CoveClub EasyPay to pay your equipment off over time with 0% APR
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default CoveClub
