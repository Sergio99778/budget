import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const BudgetControl = ({ budget, leftBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {budget}</div>
      <div className={checkBudget(budget, leftBudget)}>Restante: $ {leftBudget}</div>
    </Fragment>
  );
};

export default BudgetControl;
