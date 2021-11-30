import React from 'react';

const Form = () => {
  return (
    <form>
      <h2>Add your expenses</h2>
      <div className="campo">
        <label htmlFor="">Expense name</label>
        <input type="text" className="u-full-width" placeholder="Example: transport" />
      </div>
      <div className="campo">
        <label htmlFor="">Expense quantity</label>
        <input type="number" className="u-full-width" placeholder="Example: 800" />
      </div>
      <button type="submit" className="button-primary u-full-width">
        Add expense
      </button>
    </form>
  );
};

export default Form;
