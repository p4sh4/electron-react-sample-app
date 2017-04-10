/* eslint-disable no-console */

// Helper functions

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

// Main functions

function generateOrders() {
  const orderCount = getRandomInt(1, 12);
  const orders = [];
  for (let i = 0; i < orderCount; i += 1) {
    orders.push(getRandomInt(100, 999));
  }
  return orders;
}

function ordersObject() {
  return {
    orders: generateOrders(),
  };
}

// Server

const http = require('http');

const app = http.createServer((request, response) => {
  const orders = ordersObject();
  response.writeHead(200, 'Content-Type', 'application/json');
  response.write(JSON.stringify(orders));
  response.end();
});

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('An error occured', err);
  }
  console.log(`Orders server listening on port ${port}`);
});

