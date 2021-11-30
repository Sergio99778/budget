import React, { Fragment, useState } from 'react';

//Components
import Error from './Error';

const Question = () => {
  //Budget quantity
  const [budget, setBudget] = useState(0);
  //Error
  const [error, setError] = useState(false);

  //handleChange
  const handleChange = (e) => {
    setBudget(parseInt(e.target.value));
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if (budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  return (
    <Fragment>
      <h2>Define your budget</h2>
      {error ? <Error message="The budget is not valid" /> : null}
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="number" className="u-full-width" placeholder="Budget" value={budget} />
        <button className="button-primary u-full-width" type="submit">
          Define !
        </button>
      </form>
    </Fragment>
  );
};

export default Question;
