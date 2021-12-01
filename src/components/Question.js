import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

//Components
import Error from './Error';

const Question = ({ setBudget, setLeftBudget, setShowQuestion }) => {
  //Quantity
  const [quantity, setQuantity] = useState(0);
  //Error
  const [error, setError] = useState(false);

  //handleChange
  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    } else {
      setError(false);
      setBudget(quantity);
      setLeftBudget(quantity);
      setShowQuestion(false);
    }
  };

  return (
    <Fragment>
      <h2>Define your budget</h2>
      {error ? <Error message="The budget is not valid" /> : null}
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="number" className="u-full-width" placeholder="Budget" value={quantity} />
        <button className="button-primary u-full-width" type="submit">
          Define !
        </button>
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setLeftBudget: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
