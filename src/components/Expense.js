import React from 'react';

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

export default Expense;
