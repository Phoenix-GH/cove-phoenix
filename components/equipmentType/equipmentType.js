import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import InfoBox from '../infoBox/infobox';

import s from './equipmentType.scss';

const EquipmentType = (props) => {
  const { title, quantity, list } = props;
  return (
    <div className="equipmentType">
      <Row>
        <Col xs={4}>
          <span className="title">{title}</span>
        </Col>
        <Col xs={4}>
          <div className="quantity">{quantity}</div>
        </Col>
        <Col xs={1} />
        <Col xs={3}>
          <img src="/static/images/placeholderThumb.png" alt="placeholder" className="productPhoto" />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <h5>Sensor Name</h5>
        </Col>
        <Col xs={4}>
          <h5 className="center">Name</h5>
        </Col>
      </Row>
      {
        list.map(item => (
          <Row key={item.id}>
            <Col xs={4}>
              <span className="title">{item.sensorName}</span>
            </Col>
            <Col xs={4}>
              <div className="quantityWrapper">
                <span className="quantity">{item.name}</span>
                <img src="/static/images/arrowDown.png" alt="arrowDown" className="dropDownArrow" />
              </div>
            </Col>
            <Col xs={1} />
            <Col xs={3} sm={3}>
              {
                item.hasInfo && <InfoBox />
              }
            </Col>
          </Row>
        ))
      }
      <style jsx>{s}</style>
    </div>
  );
};

EquipmentType.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
  list: PropTypes.array,
};

EquipmentType.defaultProps = {
  title: '',
  quantity: 0,
  list: [],
};

export default EquipmentType;
