// src/pages/BudgetPage/components/BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ addTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' or 'expense'

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ name, amount: parseFloat(amount), type });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default BudgetForm;
