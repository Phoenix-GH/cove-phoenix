import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { func } from 'prop-types';

export default class CustomizeAlarmEvents extends Component {

  static propTypes = {
    changeType: func.isRequired,
  }

  save = () => {
    // save some things then invoke onSubmit
    this.props.changeType('messageEvents');
  }

  render() {
    return (
      <div>
        <h4 className="text-center mb-sm">Customize Alarm Events</h4>
            <div className="p-lg">
              <h5>Alarm Events</h5>
              <div className="flex-col">
                <div>
                  <div>
                    <input id="alarm-event-battery" type="checkbox" />
                    <label htmlFor="alarm-event-battery">Battery Updates</label>
                  </div>
                  <div>
                    <input id="alarm-event-burglar" type="checkbox" />
                    <label htmlFor="alarm-event-burglar">Burglar Alarm</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input id="alarm-event-fire" type="checkbox" />
                    <label htmlFor="alarm-event-fire">Fire Alarm</label>
                  </div>
                  <div>
                    <input id="alarm-event-CO" type="checkbox" />
                    <label htmlFor="alarm-event-CO">CO Alarm</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input id="alarm-event-motion" type="checkbox" />
                    <label htmlFor="alarm-event-motion">Motion Alerts</label>
                  </div>
                  <div>
                    <input id="alarm-event-sensor" type="checkbox" />
                    <label htmlFor="alarm-event-sensor">Sensor Activity Alerts</label>
                  </div>
                </div>
              </div>
            </div>
        <div className="text-right">
          <button
            className="btn btn--white"
            onClick={() => this.props.changeType('edit')}
          >
            Cancel
          </button>
          <button
            className="btn btn--primary ml-sm"
            onClick={this.save}
          >
            Update Alarm Events
          </button>
        </div>
      </div>
    );
  }
}