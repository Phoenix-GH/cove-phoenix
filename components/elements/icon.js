import React, { Component } from 'react';
import { string, number } from 'prop-types';
import iconMap from './iconMap';

export default class Icon extends Component {
  static propTypes = {
    name: string,
    size: number,
  }

  static defaultProps = {
    name: '',
    size: 24,
  }

  setIcon() {
    return { __html: iconMap[this.props.name] };
  }

  render() {
    const { size } = this.props;
    return (
      <div
        className="icon"
        style={{ width: size, height: size, lineHeight: `${size}px` }}
        dangerouslySetInnerHTML={this.setIcon()}
      />
    );
  }
}
