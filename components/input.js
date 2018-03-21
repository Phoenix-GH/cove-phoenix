import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
    const { props } = this;
    const { active, val } = this.state;
    const inputLabelClass = cx('inputLabel', {
      'visible': val,
      'hidden': !val,
    });
    const coveInputClass = cx('coveInput', {
      'activeInput': active,
    });
    return (
      <div className="inputBlockClass">
        <div
          onFocus={this.toggle}
          onBlur={this.toggle}
          className={coveInputClass}
        >
          <div className={inputLabelClass}>{props.label}</div>
          <input
            type={props.type}
            placeholder={props.label}
            onChange={this.handleChange} 
          />
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  label: '',
}

export default Input;
