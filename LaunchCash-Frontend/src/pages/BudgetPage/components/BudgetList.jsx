
import React from 'react';
import './BudgetList.css';

const BudgetList = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="budget-list">
          <div className="summary">
            <h2>Summary</h2>
            <div className="summary-item income">
              <span>Income:</span>
              <span>${income.toFixed(2)}</span>
            </div>
            <div className="summary-item expense">
              <span>Expenses:</span>
              <span>${expenses.toFixed(2)}</span>
            </div>
            <div className="summary-item balance">
              <span>Balance:</span>
              <span>${(income - expenses).toFixed(2)}</span>
            </div>
          </div>
    
          <h2>Transactions</h2>
          <ul className="transaction-list">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className={transaction.type === 'income' ? 'income' : 'expense'}
              >
                {transaction.name}: ${transaction.amount.toFixed(2)} ({transaction.type})
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default BudgetList;