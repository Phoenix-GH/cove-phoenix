import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import Menu from './menu';
import s from './dashboardHeader.scss';

const links = [
  { name: 'Alarm System', route: '' },
  { name: 'CO + Smoke + Flood', route: '' },
  { name: 'Medical Button', route: '' },
  { name: 'Camera', route: '' },
]

export default class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <Container>
          <div className="dashboard-header__inner">
            <img className="dashboard-header__logo" src="/static/images/logoteal.png" height="32px" alt="Cove Logo" />

            <div className="dashboard-header__links">
              { links.map((link, i) => (
                <div key={i}>
                  <a>{link.name}</a>
                </div>
              ))}
            </div>

            <div className="dashboard-header__actions">
              <a>Sign Out</a>
              <img src="/static/images/person.svg" alt=""/>
            </div>
          </div>
        </Container>
        <style jsx>{s}</style>
      </div>
    );
  }
}