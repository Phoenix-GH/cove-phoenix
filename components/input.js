import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InfoBox from './infoBox/infobox';
import s from './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      val: null,
    };
  }

  toggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
    this.props.onChangeHandler(e.target.value);
  }

  render() {
    const { label, type, hasInfo } = this.props;
    const { active, val } = this.state;
    const toggleClass = cx({
      active: val,
      inactive: !val,
    });
    const inputLabelClass = cx('inputLabel', toggleClass);
    const coveInputClass = cx('coveInput', {
      activeInput: active,
    });
    return (
      <div className="inputBlockClass">
        <div
          onFocus={this.toggle}
          onBlur={this.toggle}
          className={coveInputClass}
        >
          <div className={inputLabelClass}>{label}</div>
          <input
            className={toggleClass}
            type={type}
            placeholder={label}
            onChange={this.handleChange}
          />
        </div>
        {
          hasInfo && <InfoBox />
        }
        <style jsx>{s}</style>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
  hasInfo: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  hasInfo: false,
  onChangeHandler: '',
};

export default Input;
