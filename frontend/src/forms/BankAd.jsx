import React from "react";
import { Link } from "react-router-dom";
import "../styles/BankAd.css";

function BankAd() {
  return (
    <div className="bank-ad">
      <h1>🎉 Get $100 Credit on Us! 🎉</h1>
      <p>
        Apply for our exclusive credit card today and receive <strong>$100</strong> as a welcome gift!
      </p>
      <ul>
        <li>No annual fees for the first year</li>
        <li>Earn cashback on every purchase</li>
        <li>Exclusive rewards and offers</li>
      </ul>
      <Link to="/apply-cc">
    <button type="button">Apply Now</button>
      </Link>
    </div>
  );
}

export default BankAd;
