import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const [isLogin, setLogin] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      
      <Link to="/">
      <div className="logo">
          <img src="/bank_logo.png" alt="" className="logo-image" />
          <span>Bank Web App</span>
        </div>
      </Link>
      {isDesktop && isLogin&&(
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/log-out">Log Out</Link></li>
          </ul>
        </nav>
      )}
      {isDesktop && !isLogin&&(
        <nav>
          <ul> 
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
        </nav>
      )}


      {!isDesktop && (
        <div
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
          <li><Link to="/create-user" onClick={toggleSidebar}>Sign Up</Link></li>
          <li><Link to="/deposit" onClick={toggleSidebar}>Deposit</Link></li>
          <li><Link to="/withdraw" onClick={toggleSidebar}>Withdraw</Link></li>
          <li><Link to="/transactions" onClick={toggleSidebar}>Transactions</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
