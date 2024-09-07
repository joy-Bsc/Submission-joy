import React, { useState, useContext } from 'react';
import './SignIn.css'; // Import CSS file for styling
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy user data
    const userData = { email, name: 'User Name' };
    login(userData);
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back!</h1>
        <p>Enter your Credentials to access your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <a href="/terms">Terms & Policy</a></label>
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>

        <div className="social-login">
          <button className="google-login">Sign in with Google</button>
          <button className="apple-login">Sign in with Apple</button>
        </div>

        <div className="signup">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>

      <div className="login-promo">
        <div className="promo-content">
          <h1>FurniFlex</h1>
          <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;