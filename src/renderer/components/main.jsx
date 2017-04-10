import React from 'react';
import fetch from 'isomorphic-fetch';
import Order from './Order';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      isLoading: false,
      message: '',
    };
    this.orderUrl = 'http://localhost:3000';
  }

  // Component lifecycle

  componentDidMount() {
    this.loadOrders();
  }

  // Domain logic

  loadOrders() {
    if (this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: true,
      error: false,
    }, () => {
      fetch(this.orderUrl).then((response) => {
        response.json().then((data) => {
          this.setState({
            isLoading: false,
            orders: data.orders,
            message: 'Your order is ready to collect. Thank you!',
          });
        });
      }).catch((error) => {
        const errorMessage = 'There was an error connecting to the server';
        console.log(errorMessage, error);
        this.setState({
          isLoading: false,
          message: errorMessage,
        });
      }).then(() => {
        // finally - will always get called
        setTimeout(() => { this.loadOrders(); }, 3000);
      });
    });
  }

  renderOrders() {
    if (this.state.orders.length > 0) {
      return this.state.orders.map((order) => (
        <Order key={order} number={order} />
      ));
    }
    return null;
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="header-text">
            <h1>Pick-up Location</h1>
            <h2>Location A</h2>
          </div>
        </div>
        <div className="orders-container">
          {this.renderOrders()}
        </div>
        <div className="message">
          {this.state.message}
        </div>
      </div>
    );
  }
}
