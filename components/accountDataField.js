import React, { Component } from 'react';
import { string, func, node, oneOfType } from 'prop-types';
import s from './accountDataField.scss';

export default class accountDataField extends Component {

  static defaultProps = {
    label: '',
    content: '',
    edit: '',
  }

  static propTypes = {
    label: string,
    content: oneOfType([string, node]),
    edit: oneOfType([string, func]),
  }

  render() {
    const { label, content, edit } = this.props;
    const linkProps = {};
    linkProps[typeof edit === 'function' ? 'onClick' : 'href'] = edit;
    return (
      <div className="dataField">
        { edit ?
          <a className="edit" {...linkProps}>
            <img src="/static/images/edit.svg" height="24px" alt="edit" />
          </a>
          : ''}
        {label ?
          <div className="label">{label}</div>
          : ''}
        <div className="content">{content}</div>
        <style jsx>{s}</style>
      </div>
    );
  }
}
