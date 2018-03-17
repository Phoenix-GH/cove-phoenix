import React, { Component } from 'react';
import { bool } from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    password: bool,
  }

  static defaultProps = {
    password: false,
  }

  render() {
    const { password } = this.props;
    return (
      <div>
        <input type={password ? 'password' : 'text'} className="form-control" />
      </div>
    );
  }
}
