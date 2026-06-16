import { Link } from 'react-router-dom';
import './SignupPage.css';

export const SignupPage = () => {
  return (
    <>
      <title>Signup</title>

      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-card">
            <div className="signup-header">
              <h1>Create Account</h1>
            </div>

            <form className="signup-form">
              <div className="form-group row">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>
                <div>

                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="form-input"
                  />
                </div>
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

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="form-input"
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                />
                <label htmlFor="terms">
                  I agree to the <span className="link-primary">Terms and Conditions</span>
                </label>
              </div>

              <button type="submit" className="signup-button button-primary">
                Create Account
              </button>
            </form>

            <div className="signup-footer">
              <p>Already have an account?</p>
              <Link to="/login" className="link-primary">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
