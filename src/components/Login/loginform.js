import React, { useState } from 'react';
import './loginform.css';

function LoginForm({ onLogin }) {
  const [users, setUsers] = useState([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more user objects as needed
  ]);

  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      setLoginSuccess(true);
      setLoginError('');
      onLogin(); // Execute the callback function to indicate successful login
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }

    event.currentTarget.reset();
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const newUsername = event.currentTarget.elements.newUsername.value;
    const newPassword = event.currentTarget.elements.newPassword.value;

    const existingUser = users.find((user) => user.username === newUsername);

    if (existingUser) {
      setSignupError('Username already exists. Please choose a different username.');
    } else {
      setUsers((prevUsers) => [...prevUsers, { username: newUsername, password: newPassword }]);
      setSignupError('');
      setLoginSuccess(false);
      alert('Sign up successful! You can now login with your credentials.');
      event.currentTarget.reset();
    }
  };

  return (
    <div className="login-form-container">
      <form id="loginForm" onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
      {loginSuccess && <h3 className="success-message">Login successful!</h3>}
      <br />
      <form id="signupForm" onSubmit={handleSignupSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="newUsername">New Username:</label>
        <input type="text" id="newUsername" name="newUsername" />
        <br />
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" id="newPassword" name="newPassword" />
        <br />
        <button type="submit">Sign Up</button>
        {signupError && <p className="error-message">{signupError}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
