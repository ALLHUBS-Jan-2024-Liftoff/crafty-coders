import React from "react";
import "./Transaction.css";



// Static transaction data
const staticTransactions = [
    {
      id: 1,
      sender: "Spongebob",
      receiver: "Patrick",
      amount: 100,
      transactiondate: "2024-06-31"
    },
    {
      id: 2,
      sender: "Patrick",
      receiver: "Spongebob",
      amount: 75.00,
      transactiondate: "2024-07-02"
    },
    {
      id: 3,
      sender: "Sandy",
      receiver: "Spongebob",
      amount: 500.00,
      transactiondate: "2024-08-01"
    }
  ];


const TransactionItem = ({ sender, receiver, amount, transactiondate }) => (
  <li>
    <span>{transactiondate}</span> - 
    <span>From: {sender}</span> - 
    <span>To: {receiver}</span> - 
    <span>Amount: ${amount.toFixed(2)}</span>
  </li>
);

const Transaction = () => {
  return (
    <div className="Transaction">
      <h2>Transaction History</h2>
      {staticTransactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {staticTransactions.map((transaction) => (
            <TransactionItem 
              key={transaction.id}
              sender={transaction.sender}
              receiver={transaction.receiver}
              amount={transaction.amount}
              transactiondate={transaction.transactiondate}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transaction;





// Function to render each transaction using api when its ready 
// const TransactionItem = ({ sender, receiver, amount, transactiondate }) => (
//   <li>
//     <span>{transactiondate}</span> - 
//     <span>From: {sender}</span> - 
//     <span>To: {receiver}</span> - 
//     <span>Amount: ${amount.toFixed(2)}</span>
//   </li>
// );

// const Transaction = () => {
//   const [transactions, setTransactions] = useState([]);

  // Function to fetch transactions from the API
//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch('/api/transactions');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       setTransactions(data);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   return (
//     <div className="Transaction">
//       <h2>Transaction History</h2>
//       {transactions.length === 0 ? (
//         <p>No transactions found.</p>
//       ) : (
//         <ul>
//           {transactions.map((transaction) => (
//             <TransactionItem 
//               key={transaction.id}
//               sender={transaction.sender}
//               receiver={transaction.receiver}
//               amount={transaction.amount}
//               transactiondate={transaction.transactiondate}
//             />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Transaction;

    
