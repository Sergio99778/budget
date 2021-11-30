import React, { Fragment, useState } from 'react';

const Question = () => {
  //Budget quantity
  const [budget, setBudget] = useState(0);

  //handleChange
  const handleChange = (e) => {
    setBudget(parseInt(e.target.value));
  };

  return (
    <Fragment>
      <h2>Define your budget</h2>
      <form action="">
        <input onChange={handleChange} type="number" className="u-full-width" placeholder="Budget" value={budget} />
        <button className="button-primary u-full-width" type="submit">
          Define !
        </button>
      </form>
    </Fragment>
  );
};

export default Question;
