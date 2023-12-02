// Login.js

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';



import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Client-side form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('Invalid email or password');
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Redirect to the home page if the user is already logged in
  if (auth.currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <h2 className='title'>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label className='login-fields'>
          Email:
          <input className='input-login' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='login-fields'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='submit_button' type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
