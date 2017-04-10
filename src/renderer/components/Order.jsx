import React from 'react';
import PropTypes from 'prop-types';

// a stateless functional component
const Order = (props) => (
  <div className="order">
    {props.number}
  </div>
);

Order.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Order;
