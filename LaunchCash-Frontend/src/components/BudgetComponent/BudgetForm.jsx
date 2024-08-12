import React from 'react';
import BudgetComponent from './path/to/BudgetComponent';


function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <BudgetComponent
        budgetType="Budget"
        amount={500}
        setShowModal={setShowModal}
      />
      {showModal && <div>Modal Content Here</div>}
    </div>
  );
}

export default App;