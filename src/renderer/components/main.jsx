import React from 'react';
import Header from './header';

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
        <Header />
      </div>
    );
  }
}