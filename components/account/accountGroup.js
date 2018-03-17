import React, { Component } from 'react';
import { string, oneOfType, node } from 'prop-types';
import s from './accountGroup.scss';

export default class AccountGroup extends Component {

  static propTypes = {
    title: oneOfType([node, string]),
    link: string,
    route: string,
  }

  render() {
    const { children, title, link, route } = this.props
    const dual = children && typeof children === 'object' && children.length === 2;
    return (
      <div className={`account-group ${dual ? 'account-group--dual' : ''}`}>
        {title ?
          <div className="account-group__title-group">
            <div className="account-group__title">{title}</div>
            {link ?
              <a className="account-group__sub-title" href={route}>{link}</a>
            : ''}
          </div>
        : ''}
        <div className="account-group__content">
          {dual
            ? children.map((child, i) => (
                <div key={i}>{child}</div>
              ))
            : <div>{children}</div> }
        </div>
        <style jsx>{s}</style>
      </div>
    );
  }
}