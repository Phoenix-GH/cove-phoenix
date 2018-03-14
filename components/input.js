import React, { Component } from 'react';
import s from './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      val: null,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { props } = this;
    return (
      <div className="inputBlock">
        <div onFocus={this.toggle} onBlur={this.toggle} className={`coveInput ${this.state.active ? 'activeInput' : ''}`}>
          <input type={props.type || 'text'} placeholder={props.placeholder} onChange={(e) => { props.onChangeHandler(e.target.value); }} />
        </div>
        <div className="inputLabel">{props.label}</div>
        <style jsx>{s}</style>
      </div>
    );
  }
}
export default Input;
