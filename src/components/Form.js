import React, { useState } from 'react';
import shortid from 'shortid';

//Components
import Error from './Error';

const Form = ({ setExpense, setCreateExpense }) => {
  //Form state
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  //Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      setError(true);
      return;
    } else {
      setError(false);
      //Expense object
      const expense = {
        name,
        quantity,
        id: shortid.generate(),
      };
      //Adding new expense
      setExpense(expense);
      setCreateExpense(true);
      //Reset form
      setName('');
      setQuantity(0);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your expenses</h2>
      {error ? <Error message="Invalid data" /> : null}
      <div className="campo">
        <label htmlFor="">Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: transport"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Expense quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 800"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        />
      </div>
      <button type="submit" className="button-primary u-full-width">
        Add expense
      </button>
    </form>
  );
};

export default Form;
