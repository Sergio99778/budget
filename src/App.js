import React, { useEffect, useState } from 'react';
//Components
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
  //Budget quantities
  const [budget, setBudget] = useState(0);
  const [leftBudget, setLeftBudget] = useState(0);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);
  //Show initial question
  const [showQuestion, setShowQuestion] = useState(true);
  //Expenses
  const [expenses, setExpenses] = useState([]);

  //Use effect updates
  useEffect(() => {
    if (createExpense) setExpenses([...expenses, expense]);

    setLeftBudget(leftBudget - expense.quantity);
  }, [expense]);
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
                <Form setCreateExpense={setCreateExpense} setExpense={setExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} leftBudget={leftBudget} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
