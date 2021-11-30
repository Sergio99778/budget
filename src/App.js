import React, { useState } from 'react';
import Question from './components/Question';

function App() {
  //Budget quantity
  const [budget, setBudget] = useState(0);
  const [leftBudget, setLeftBudget] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        <div className="contenido-principal contenido">
          <Question setBudget={setBudget} setLeftBudget={setLeftBudget} />
        </div>
      </header>
    </div>
  );
}

export default App;
