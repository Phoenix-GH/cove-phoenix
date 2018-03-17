import React, { Component } from 'react';
import { string, func, node, oneOfType } from 'prop-types';
import s from './accountCardMessage.scss';

export default class AccountCardMessage extends Component {
  static propTypes = {
    title: string.isRequired,
    description: oneOfType([string, node]).isRequired,
    action: func,
    actionTitle: string,
  }

  static defaultProps = {
    action: false,
    actionTitle: 'Okay',
  }

  render() {
    const {
      title, description, action, actionTitle,
    } = this.props;
    return (
      <div>
        <div className="pb-lg">
          <h5 className="text-center">{title}</h5>
          <div className="message-card-description">
            {description}
          </div>
        </div>
        {action ?
          <div className="text-right">
            <button
              className="btn btn--primary ml-sm"
              onClick={action}
            >
              {actionTitle}
            </button>
          </div>
        : ''}
        <style jsx>{s}</style>
      </div>
    );
  }
}
