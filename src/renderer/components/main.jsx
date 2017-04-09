import React from 'react';
import Header from './Header';
import Order from './Order';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    };

    this.renderOrders = this.renderOrders.bind(this);
  }

  renderOrders() {
    return this.state.orders.map((order) => (
      <Order key={order} number={order} />
    ));
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="orders-container">
          {this.renderOrders()}
        </div>
        <div className="thanks-message">
          Your order is ready to collect. Thank you!
        </div>
      </div>
    );
  }
}
