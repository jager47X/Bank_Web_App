import React, { useEffect, useState } from 'react';


function TransactionsList() {
    const [transactions, setTransactions] = useState([]);
 
    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((txn, index) => (
                    <li key={index}>
                        {txn.transactionType}: ${txn.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsList;
