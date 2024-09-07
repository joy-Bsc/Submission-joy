import React, { useState, useContext } from 'react';
import './SignUp.css'; // Separate CSS for styling
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const SignUp = () => {
  const { login } = useContext(AuthContext); // To log the user in after signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Perform signup logic here (e.g., call an API to create a new user)
      // Assuming signup is successful, log the user in
      await login(email, password);
      navigate('/'); // Redirect to home page after successful signup
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section - Signup Form */}
      <div className="signup-form-container">
        <h2>Welcome To</h2>
        <h1 className="brand">Furni<span>Flex</span></h1>
        <p>Signup to purchase your desired products</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="First name (optional)" 
            />
            <input 
              type="text" 
              placeholder="Last name (optional)" 
            />
          </div>

          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          
          <div className="password-input">
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button 
              type="button" 
              className="toggle-password" 
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />

          {error && <p className="error-message">{error}</p>}

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <a href="#">Terms & Policy</a></label>
          </div>

          <button type="submit" className="signup-button">Signup</button>
        </form>

        <div className="alternative-signup">
          <p>or</p>
          <button className="google-signup">Sign in with Google</button>
          <button className="apple-signup">Sign in with Apple</button>
        </div>

        <p className="signin-link">
          Have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </div>

      {/* Right Section - Branding */}
      <div className="branding-container">
        <div className="branding-content">
          <h1>Furni<span>Flex</span></h1>
          <p>
            Discover a seamless shopping experience with our curated collection of products. 
            From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;