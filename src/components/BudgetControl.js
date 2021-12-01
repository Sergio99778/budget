import React, { Fragment } from 'react';

const BudgetControl = ({ budget, leftBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {budget}</div>
      <div className="alert">Restante: $ {leftBudget}</div>
    </Fragment>
  );
};

export default BudgetControl;
