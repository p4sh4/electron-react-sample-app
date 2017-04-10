// Helper functions

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

// Main functions

function generateOrders() {
  let orderCount;
  // you can pass a -varsize argument to the node server.js command
  // to have a random 1-12 amount of orders on each load instead of 12
  if (process.argv[2] === '--varsize') {
    orderCount = getRandomInt(1, 12);
  } else {
    orderCount = 12;
  }
  // use a set to make sure all order numbers are unique
  const orders = new Set();
  while (orders.size < orderCount) {
    orders.add(getRandomInt(100, 999));
  }
  const ordersArray = [...orders];
  return ordersArray;
}

function ordersObject() {
  return {
    orders: generateOrders(),
  };
}

// Server
/* eslint-disable no-console */

const http = require('http');

const app = http.createServer((request, response) => {
  const orders = ordersObject();
  response.writeHead(200, 'Content-Type', 'application/json');
  response.write(JSON.stringify(orders));
  response.end();
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log('An error occured', err);
  }
  console.log(`Orders server listening on port ${port}`);
});

