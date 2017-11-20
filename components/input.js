import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render () {
    const props = this.props;
    return (
      <div className="inputBlock">
        <div onFocus={this.toggle} onBlur={this.toggle} className={`coveInput ${this.state.active ? 'activeInput': ''}`}>
          <input type={props.type || "text"} placeholder={props.placeholder}/>
        </div>
        <div className="inputLabel">{props.label}</div>
        <style jsx>{`
          .coveInput {
            position: relative;
            border-bottom: 1px solid #777A81;
            border-left: 0px;
            border-top: 0px;
            border-right: 0px;
            padding: 2px 10px 2px 10px;
            &::before {
              position: absolute;
              bottom: 0px;
              left: 0px;
              content: "";
              border-left: 1px solid #777A81;
              height: 8px;
              width: 1px;
            }
            &::after {
              position: absolute;
              bottom: 0px;
              right: 0px;
              content: "";
              border-left: 1px solid #777A81;
              height: 8px;
              width: 1px;
            }
            input {
              border: 0px;
              width: 100%;
              caret-color: #00CDB9;
            }
          }
          .activeInput, .activeInput::before, .activeInput::after {
            border-color: #00CDB9;
          }
          .inputLabel {
            font-family: GothamRoundedBook;
            font-size: 12px;
            color: #191E2B;
            margin-top: 4px;
          }
        `}
        </style>
      </div>
    )
  }
}
export default Input
