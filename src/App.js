import React, { useState } from 'react';
//Components
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {
  //Budget quantities
  const [budget, setBudget] = useState(0);
  const [leftBudget, setLeftBudget] = useState(0);
  //Show initial question
  const [showQuestion, setShowQuestion] = useState(true);
  //Expenses
  const [expenses, setExpenses] = useState([]);
  //Add new expense function
  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question setShowQuestion={setShowQuestion} setBudget={setBudget} setLeftBudget={setLeftBudget} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addNewExpense={addNewExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
