import React from 'react';
import { number, object, func, string } from 'prop-types';

import Icon from './elements/icon';
import s from './equipmentListItem.scss';

const EquipmentListItem = (props) => {
  const {
    thumbSrc,
    product,
    changeQuantity,
    quantity,
  } = props;
  return (
    <div className="equipment-list-item">
      <div className="equipment-list-item__img">
        {thumbSrc ?
          <img src={thumbSrc} alt={product.name} />
        : ''}
      </div>
      <div className="equipment-list-item__name">
        {product.name}
      </div>
      <div className="equipment-list-item__owned">
        {product.quantity}
      </div>
      <div className="equipment-list-item__quantity">
        <div>
          <button
            className="btn btn--circle-icon"
            disabled={quantity === 0}
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
            className="btn btn--circle-icon"
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
  product: object,
  thumbSrc: string,
};

EquipmentListItem.defaultProps = {
  thumbSrc: '',
  product: {},
};

export default EquipmentListItem;
