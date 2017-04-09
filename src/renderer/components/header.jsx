import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>Pick-up Location</h1>
          <h2>Location A</h2>
        </div>
      </div>
    );
  }
}