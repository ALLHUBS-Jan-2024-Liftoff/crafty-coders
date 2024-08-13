import React from 'react';



const BudgetItem = ({ item }) => {
  return (
    <div className="budget-item">
      <h3>{item.name}</h3>
      <p>Amount: ${item.amount.toFixed(2)}</p>
    </div>
  );
};

export default BudgetItem;
