import { Row, Col } from 'reactstrap'

const CartAddon = (props) => {
  const thumbSrc = props.thumbSrc ? props.thumbSrc : "/static/images/placeholderThumbSquare.png";

  return (
    <div className="cartAddons">
      <Row>
        <Col xs={3} className="no-gutters no-padding">
          <div className="no-padding">
            <img src={thumbSrc} />
          </div>
        </Col>
        <Col xs={7}>
          <div  className="controlCol">
            <Row>
              <Col xs={12}>
                Cove Door $15
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ul className="list-inline">
                  <li className="list-inline-item">1</li>
                  <li className="list-inline-item"><img src="/static/images/plusIcon.png" /></li>
                  <li className="list-inline-item"><img src="/static/images/minusIcon.png" /></li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={2} className="no-padding-left">
          <div  className="detailsCol" onClick={props.detailAction}>
            Details
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .cartAddons {
          border-top: 2px solid #F0F4F7;
          border-bottom: 2px solid #F0F4F7;
        }
        .controlCol {
          text-align: center;
          padding-top: 15px;
        }
        .thumbCol {
          padding: 0px;
        }
        .controlCol.col {
          text-align: center;
        }
        .detailsCol {
          color: #008CFF;
          font-weight: bold;
          padding-top: 25px;
          padding-left: 0px;
        }
      `}
    </style>
    <style jsx global>{`
      .no-padding {
        padding: 0px;
      }
      .no-padding-left {
        padding-left: 0px;
      }
    `}
    </style>
    </div>
  )
}

export default CartAddon
