import React, { Component } from 'react';
import { node } from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    trigger: node,
    content: node
  }

  render() {
    return (
      <div>
        {this.props.trigger}
        {this.props.content}
      </div>
    );
  }
}