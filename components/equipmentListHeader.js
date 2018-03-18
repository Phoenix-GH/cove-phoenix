import React from 'react';
import { string } from 'prop-types';
import s from './equipmentListHeader.scss';

const EquipmentList = ({
  equipment,
  onChange,
  quantityList,
  listLabel,
  actionLabel,
}) => (
  <div>
    <div className="equipment-list__header">
      <div>{listLabel}</div>
      <div>Quantity</div>
      <div>{actionLabel}</div>
    </div>
    <style jsx>{s}</style>
  </div>
);

EquipmentList.propTypes = {
  listLabel: string,
  actionLabel: string,
};

EquipmentList.defaultProps = {
  listLabel: '',
  actionLabel: '',
};

export default EquipmentList;