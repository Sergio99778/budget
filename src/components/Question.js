import React, { Fragment } from 'react';

const Question = () => {
  return (
    <Fragment className="Container">
      <h2>Define your budget</h2>
      <form action="">
        <input type="number" className="u-full-width" placeholder="Budget" />
        <button className="button-primary u-full-width" type="submit">
          Define !
        </button>
      </form>
    </Fragment>
  );
};

export default Question;
