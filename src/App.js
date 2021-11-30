import React, { useState } from 'react';
//Components
import Question from './components/Question';
import Form from './components/Form';

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
          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
