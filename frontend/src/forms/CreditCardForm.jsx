import React, { useState } from "react";
import "../styles/CreditCard.css";

function CreditCardForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        ssid: "",
        email: "",
        phone: "",
        salary: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="credit-card-container">
            {!submitted ? (
                <form className="credit-card-form" onSubmit={handleSubmit}>
                    <h2>Apply for a Credit Card</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />

                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        required
                    />

                    <label htmlFor="ssid">SSID:</label>
                    <input
                        type="text"
                        id="ssid"
                        name="ssid"
                        value={formData.ssid}
                        onChange={handleChange}
                        placeholder="Enter your SSID"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />

                    <label htmlFor="salary">Salary:</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="Enter your annual salary"
                        required
                    />

                    <button type="submit">Submit Application</button>
                </form>
            ) : (
                <div className="confirmation">
                    <h2>Application Submitted</h2>
                    <p>Thank you for applying for a credit card!</p>
                    <p>Your application will be processed within 5 business days.</p>
                </div>
            )}
        </div>
    );
}

export default CreditCardForm;
