import { Row, Col } from 'reactstrap';
import s from './equipmentListItem.scss';
import gs from './styles.scss';

const EquipmentListItem = (props) => {
  const thumbSrc = props.thumbSrc ? props.thumbSrc : "/static/images/placeholderThumbSquare.png";
  const product = {};
  const quantity = props.quantity || 0;
  return (
    <div className={s.itemRow}>
      <Row>
        <Col xs={2} className={`no-gutters ${s.noPadding}`}>
          <div className={gs.noPadding}>
            <img src={thumbSrc} />
          </div>
        </Col>
        <Col xs={5} className={s.itemName}>
          Door Sensors
        </Col>
        <Col xs={2} className={s.quantityCol}>
          2
        </Col>
        <Col xs={3} className={s.controlCol}>

          <ul className="list-inline">
            <li className={`list-inline-item ${s.quantity}`}>{quantity}</li>
            <li
              className="list-inline-item"
              onClick={() => props.changeQuantity(product.id, quantity, quantity + 1)}
              >
              <img src="/static/images/plusIcon.svg" height="24px" alt="add icon" />
            </li>
            <li
              className={`list-inline-item ${quantity === 0 ? s.disabled: '' }`}
              onClick={() => props.changeQuantity(product.id, quantity, quantity - 1)}

            >
              <img src="/static/images/minusIcon.svg"  height="24px" alt="minus icon" />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default EquipmentListItem
