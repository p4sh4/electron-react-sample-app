import React from 'react';

export default class Order extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="order">
        {this.props.number}
      </div>
    );
  }
}