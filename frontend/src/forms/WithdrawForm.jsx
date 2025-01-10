import React, { useState } from 'react';

function WithdrawForm() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Withdraw</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Withdraw</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default WithdrawForm;
