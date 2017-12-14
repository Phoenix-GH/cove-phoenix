import React, { Component } from 'react';
import s from './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { props } = this;
    return (
      <div className={s.inputBlock}>
        <div onFocus={this.toggle} onBlur={this.toggle} className={`${s.coveInput} coveInput ${this.state.active ? 'activeInput' : ''}`}>
          <input type={props.type || 'text'} placeholder={props.placeholder} />
        </div>
        <div className={s.inputLabel}>{props.label}</div>
      </div>
    );
  }
}
export default Input;
