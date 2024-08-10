
import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import './BudgetPage.css'; 

const BudgetPage = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1 className="page-title">Income and Expenses </h1>
      <BudgetForm addTransaction={addTransaction} />
      <BudgetList transactions={transactions} />
    </div>
  );
};

export default BudgetPage;
