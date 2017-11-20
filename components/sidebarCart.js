import { Row, Col } from 'reactstrap'
import CartAddon from '../components/cartAddon'

const SidebarCart = (props) => {

  return (
    <div className="cartColumn">
      <div className="cartHeader">
        <h4>Cove Protect alarm system started pack</h4>
        <ul>
          <li>1 Cove Protect panel</li>
          <li>2 Cove doors</li>
          <li>1 Cove remote</li>
        </ul>
      </div>
      <div className="cartSubHeader">
        <h4>How many sensors should I add?</h4>
        <p>Don’t worry too much, you can add more sensors later, or send the ones you don’t need free of charge.</p>
      </div>
      <CartAddon detailAction={props.detailAction}/>
      <Row>
        <Col xs={12}>
          <div className="footerLink">
            <span className="link linkTertiary">Click here</span> to add Smoke, Carbon, or Flood
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          1 Cove Protect alarm system started pack
        </Col>
        <Col xs={6}>
          <span className="bold">$249 or $4.15/mo</span>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 6 }}>
          <div className="addToCartBtn">
            Add to cart
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .cartHeader {
          margin: 20px;
        }
        .cartSubHeader {
          position: relative;
          height: 142px;
          margin-top:40px;
          margin-bottom: 90px;
          h4, p {
            padding-left: 25px;
            padding-right: 25px;
          }
          h4 {
            padding-top: 0px;
            color: #00B19A;
          }
          &::before {
            content: "";
            position: absolute;
            width: 8px;
            height: 100%;
            margin-left: -1px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            background: #00B19A;
          }
        }
        .cartColumn {
          -webkit-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
          -moz-box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
          box-shadow: 0px 6px 5px 2px rgba(44,50,57,0.2);
          height: 1085px;
          width: 385px;
          margin-bottom: 15px;
          border-radius: 16px;
          border: 1px solid #F0F4F7;
          h4 {
            font-family: GothamRoundedBold;
            font-size: 24px;
          }
        }
        .footerLink {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .linkTertiary {
          color: #008CFF;
          cursor: pointer;
        }
        .bold {
          font-weight: bold;
        }
        .addToCartBtn {
          color: #FFFFFF;
          width: 162px;
          height: 40px;
          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          background: #F17927;
          font-size: 16px;
          text-align: center;
          font-family: GothamRoundedBook;
          font-weight: bold;
          padding-top: 8px;
          margin-top: 28px;
        }
      `}
      </style>
    </div>
  )
}

export default SidebarCart
