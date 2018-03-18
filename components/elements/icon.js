import React, { Component } from 'react';
import { string, number } from 'prop-types';
import * as IconMap from './iconMap';

const UnknownIcon = () => <span>?</span>;

export default class Icon extends Component {
  static propTypes = {
    name: string,
    size: number,
  }

  static defaultProps = {
    name: '',
    size: 20,
  }

  render() {
    const { size } = this.props;
    const name = this.props.name.slice(0, 1).toUpperCase() + this.props.name.slice(1);
    const iconProps = {};
    let IconToRender;
    if (IconMap[name]) {
      IconToRender = IconMap[name];
      iconProps.size = size;
    } else {
      IconToRender = UnknownIcon;
    }
    return (
      <IconToRender {...iconProps} />
    );
  }
}