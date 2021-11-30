import React, { Fragment, useState } from 'react';

//Components
import Error from './Error';

const Question = ({ setBudget, setLeftBudget }) => {
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

export default Question;
