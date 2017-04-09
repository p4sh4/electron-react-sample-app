import React from 'react';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World!',
    };
  }

  render() {
    return (
      <div className="main">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}