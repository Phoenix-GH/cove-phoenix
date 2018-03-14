import React, { Component } from 'react';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import { func } from 'prop-types';

export default class EditNotifications extends Component {

  static propTypes = {
    changeType: func.isRequired,
  }

  save = () => {
    // save some things then invoke onSubmit
    this.props.changeType('messageNotifications');
  }

  render() {
    return (
      <div>
        <h4 className="text-center mb-sm">Notifications</h4>
        <Row>
          <Col>
            <div className="p-lg">
              <h5>Alarm Events</h5>
              <div className="mb-md">
                <div>
                  <input id="alarm-event-email" type="checkbox" />
                  <label htmlFor="alarm-event-email">Email</label>
                </div>
                <div>
                  <input id="alarm-event-text" type="checkbox" />
                  <label htmlFor="alarm-event-text">Text</label>
                </div>
                <div>
                  <input id="alarm-event-mobile-app" type="checkbox" />
                  <label htmlFor="alarm-event-mobile-app">Mobile App</label>
                </div>
              </div>
              <div>
                <a onClick={() => this.props.changeType('customize')}>Customize Alarm Events</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="p-lg">
              <h5>Special Offers</h5>
              <div>
                <input id="special-offers-email" type="checkbox" />
                <label htmlFor="special-offers-email">Email</label>
              </div>
              <div>
                <input id="special-offers-text" type="checkbox" />
                <label htmlFor="special-offers-text">Text</label>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-right">
          <button
            className="btn btn--white"
            onClick={() => Router.push('/account/info')}
          >
            Cancel
          </button>
          <button
            className="btn btn--primary ml-sm"
            onClick={this.save}
          >
            Update Notifications
          </button>
        </div>
      </div>
    );
  }
}