import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import DepositForm from './forms/DepositForm';
import WithdrawForm from './forms/WithdrawForm';
import TransactionsList from './forms/TransactionsList';
import BankAd from './forms/BankAd'; // Import the BankAd component
import Footer from "./components/Footer"; // Import Footer
import Header from './components/Header';
import ApplyCC from './forms/CreditCardForm'; // Import the ApplyCC component
import './styles/app.css';

function App() {
    return (
        <Router>
            <Header>

            </Header>

            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="home-container">
                                <h2>Welcome to Bank Web App</h2>
                                <p2>Manage your finances easily and securely.</p2>

                                {/* Ads Section */}
                                <div className="ads-container">
                                    <BankAd />
                                    <BankAd />
                                    <BankAd />
                                </div>

                                {/* Features Section */}
                                <section className="features">
                                    <h2>Why Choose Us?</h2>
                                    <div className="feature-list">
                                        <div className="feature">
                                            <h3>Secure Banking</h3>
                                            <p>Enjoy state-of-the-art security for your financial transactions.</p>
                                        </div>
                                        <div className="feature">
                                            <h3>24/7 Support</h3>
                                            <p>We’re here for you anytime, anywhere.</p>
                                        </div>
                                        <div className="feature">
                                            <h3>Easy Access</h3>
                                            <p>Access your account on any device, at any time.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        }
                    />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/SignUp" element={<SignUpForm />} />
                    <Route path="/deposit" element={<DepositForm />} />
                    <Route path="/withdraw" element={<WithdrawForm />} />
                    <Route path="/transactions" element={<TransactionsList />} />
                    <Route path="/apply-cc" element={<ApplyCC />}/>
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
