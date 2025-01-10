import React, { useState } from 'react';
import "../styles/form.css";
import { Navigate } from 'react-router-dom';

function LoginForm() {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [shouldRedirect, setShouldRedirect] = React.useState(false);
    const [message, setMessage] = React.useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
   
    };

    // redirect
    if(shouldRedirect){
        return <Navigate to="/" replace={true} />;
    }
    function logIn() {
        setMessage('');
        console.log('Loging in ' + userName + ' ' + password);
        // send request to back end
        const userDto = {
            userName: userName,
            password: password
        };
        console.log(userDto);
        const options = {
            method: 'POST',
            body: JSON.stringify(userDto)
        };
        fetch('/auth/login', options) // network call = lag
            //.then((res) => res.json()) // it worked, parse result
            .then((apiRes) => {
                console.log(apiRes);
                if(apiRes.ok){
                    console.log('Login worked');
                    setShouldRedirect(true);
                }else{
                    setMessage('Failed to log in');
                }
                console.log('Worked'); // RestApiAppResponse

            })
            .catch((error) => {
                console.log(error);
                setMessage('Failed to log in');
            }) // it did not work
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default LoginForm;
