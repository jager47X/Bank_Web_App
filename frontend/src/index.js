import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for rendering
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();
