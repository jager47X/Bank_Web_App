import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    // Validate input
    if (!userName.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    console.log('Registering:', userName, email, phone);

    const userDto = {
      userName: userName.trim(),
      password: password.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDto),
    };

    try {
      const res = await fetch('/auth/createUser', options);
      if (!res.ok) {
        throw new Error('Failed to create account. Please try again.');
      }

      const apiRes = await res.json();
      console.log('API Response:', apiRes);

      if (apiRes.status) {
        alert('Your account has been created!');
        navigate('/'); // Redirect to home page
      } else {
        setMessage(apiRes.message || 'Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={signUp}>
      {message && <p className="error-message">{message}</p>}
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Account'}
      </button>
    </form>
  );
}

export default SignUpForm;
