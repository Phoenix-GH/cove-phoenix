import { number, func, string } from 'prop-types';

import Icon from './elements/icon';
import s from './equipmentListItem.scss';

const EquipmentListItem = (props) => {
  const thumbSrc = props.thumbSrc ? props.thumbSrc : '/static/images/placeholderThumbSquare.png';
  const product = {};
  const quantity = props.quantity || 0;
  return (
    <div className="equipment-list-item">
      <div>
        <img src={thumbSrc} />
      </div>
      <div className="equipment-list-item__name">
        Door Sensors
      </div>
      <div className="equipment-list-item__owned">
        2
      </div>
      <div className="equipment-list-item__quantity">
        <div>
          <button
            className={`list-inline-item ${quantity === 0 ? 'disabled' : ''}`}
            onClick={() => props.changeQuantity(product.id, quantity, quantity - 1)}
          >
            <Icon name="minus" size={12} />
          </button>
        </div>
        <div>
          {quantity}
        </div>
        <div>
          <button
            className="list-inline-item"
            onClick={() => props.changeQuantity(product.id, quantity, quantity + 1)}
          >
            <Icon name="plus" size={12} />
          </button>
        </div>
      </div>
      <style jsx>{s}</style>
    </div>
  );
};

EquipmentListItem.propTypes = {
  changeQuantity: func.isRequired,
  quantity: number.isRequired,
  thumbSrc: string,
};

EquipmentListItem.defaultProps = {
  thumbSrc: '',
};

export default EquipmentListItem;
