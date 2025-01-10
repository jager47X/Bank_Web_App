import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@bankwebapp.com</p>
                    <p>Phone: +1 (800) 123-4567</p>
                </div>
                <div className="footer-section address">
                    <h3>Address</h3>
                    <p>1234 Bank Street</p>
                    <p>Finance City, FC 56789</p>
                </div>
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        Bank Web App is your trusted partner for secure and easy financial
                        management. Join us and make banking a breeze!
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Bank Web App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
