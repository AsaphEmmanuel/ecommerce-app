import React from 'react';
import { Link } from 'react-router-dom';
// import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <title>Signup</title>

      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-card">
            <div className="signup-header">
              <h1>Login</h1>
              <p className="signup-subtitle">Login today and start shopping</p>
            </div>

            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="form-input"
                />
              </div>

              <button type="submit" className="signup-button button-primary">
                Create Account
              </button>
            </form>

            <div className="signup-footer">
              <p>Already have an account?</p>
              <Link to="/signup" className="link-primary">
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
