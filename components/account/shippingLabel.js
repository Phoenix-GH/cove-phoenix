import React from 'react';
import s from './shippingLabel.scss';
import Icon from '../elements/icon';

const ShippingLabel = () => (
  <div className="shipping-label">
    <div className="shipping-label__block" />
    <div className="shipping-label__helpers">
      <div
        className="shipping-label__helpers-item"
        style={{ marginTop: 20 }}
      >
        <div className="icon">
          <Icon name="arrowLeft" size={16} />
        </div>
        <div>
          Outside Box
        </div>
      </div>
      <div
        className="shipping-label__helpers-item"
        style={{ marginTop: 380 }}
      >
        <div className="icon">
          <Icon name="arrowLeft" size={16} />
        </div>
        <div>
          Inside Box
        </div>
      </div>
    </div>
    <style jsx>{s}</style>
  </div>
);

export default ShippingLabel;
