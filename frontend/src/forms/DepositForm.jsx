import React, { useState } from 'react';
function DepositForm() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Deposit</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Deposit</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default DepositForm;
