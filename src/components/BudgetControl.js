import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({ budget, leftBudget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {budget}</div>
      <div className={checkBudget(budget, leftBudget)}>Restante: $ {leftBudget}</div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  leftBudget: PropTypes.number.isRequired,
};

export default BudgetControl;
