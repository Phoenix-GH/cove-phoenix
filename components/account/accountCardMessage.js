import React, { Component } from 'react';
import { string, func } from 'prop-types';

export default class AccountCardMessage extends Component {
  static propTypes = {
    title: string.isRequired,
    description: string.isRequired,
    action: func,
    actionTitle: string,
  }

  static defaultProps = {
    action: false,
    actionTitle: 'Go Back',
  }

  render() {
    const {
      title, description, action, actionTitle,
    } = this.props;
    return (
      <div>
        <div className="pb-lg text-center">
          <h5>{title}</h5>
          <div>{description}</div>
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
      </div>
    );
  }
}
