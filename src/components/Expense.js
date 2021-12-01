import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => {
  return (
    <div className="gastos-realizados">
      <li>
        <p>{expense.name}</p>
        <span className="gasto">$ {expense.quantity}</span>
      </li>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default Expense;
