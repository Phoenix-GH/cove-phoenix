import React, { Component } from 'react';
import s from './accountGroup.scss';

export default class AccountGroup extends Component {
  render() {
    return (
      <div className={`account-group ${this.props.children.length === 2 ? 'account-group--dual' : ''}`}>
        <div className="account-group__title">{this.props.title}</div>
        <div className="account-group__sub-title">{this.props.subTitle}</div>
        <div className="account-group__content">
          {this.props.children.length ?
            this.props.children.map(child => (
              <div>{child}</div>
            ) ) : <div>{this.props.children}</div> }
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}