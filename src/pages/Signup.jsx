import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    siteAddress: "",
    nameOnCard: "",
    cardNumber: "",
    termsAgreed: false,
    privacyAgreed: false,
    newsletterSubscribed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.siteAddress)
      newErrors.siteAddress = "Site address is required";
    if (!formData.nameOnCard) newErrors.nameOnCard = "Name on card is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.termsAgreed)
      newErrors.termsAgreed = "You must agree to the Terms of Use";
    if (!formData.privacyAgreed)
      newErrors.privacyAgreed = "You must agree to the Privacy Policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("signup successful");
    }
  };

  const pulseclick = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div className="navbar2">
        <img
          className="logo"
          src="pulse-logo.svg"
          alt="Pulse logo"
          onClick={pulseclick}
          style={{ cursor: "pointer" }}
        />
        <p>Take control of your cash flow with the #1 cash flow software.</p>
      </div>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              required
            />
            {errors.companyName && (
              <span className="error">{errors.companyName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Create a Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a Password"
              required
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label>Your Pulse Site Address</label>
            <input
              type="text"
              name="siteAddress"
              value={formData.siteAddress}
              onChange={handleChange}
              placeholder="Site Address"
              required
            />
            <span>.pulseapp.com</span>
            {errors.siteAddress && (
              <span className="error">{errors.siteAddress}</span>
            )}
          </div>

          <section className="billing-section">
            <h2>Billing Information</h2>
            <div className="form-group">
              <label>Name on card</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                placeholder="Name on card"
                required
              />
              {errors.nameOnCard && (
                <span className="error">{errors.nameOnCard}</span>
              )}
            </div>

            <div className="form-group">
              <label>Credit or debit card</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Credit or debit card"
                required
              />
              {errors.cardNumber && (
                <span className="error">{errors.cardNumber}</span>
              )}
            </div>
          </section>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                required
              />
              I have read and agree to Pulse's <a href="#">Terms of Use</a>
            </label>
            {errors.termsAgreed && (
              <span className="error">{errors.termsAgreed}</span>
            )}

            <label>
              <input
                type="checkbox"
                name="privacyAgreed"
                checked={formData.privacyAgreed}
                onChange={handleChange}
                required
              />
              I have read and agree to Pulse's <a href="#">Privacy Policy</a>
            </label>
            {errors.privacyAgreed && (
              <span className="error">{errors.privacyAgreed}</span>
            )}

            <label>
              <input
                type="checkbox"
                name="newsletterSubscribed"
                checked={formData.newsletterSubscribed}
                onChange={handleChange}
              />
              I want to receive a monthly newsletter with helpful cash flow
              advice
            </label>
          </div>

          <button type="submit" className="start-trial-btn">
            Start Trial
          </button>

          <p className="trial-info">
            You're signing up for a free 30-day trial of the Plus plan. At the
            end of the trial on October 30, we'll charge you $59 a month to keep
            using Pulse, and you can cancel anytime.
          </p>
        </form>
        <div className="right-section">
          <div className="right-content">
            <h2>Pulse Plus</h2>
            <p>
              Pulse is trusted by businesses all over the world to keep their
              cash flow in check. Manage your business’s financial health, plan
              for the future, and track your income and expenses—all in one
              place.
            </p>
            <ul>
              <li>Comprehensive cash flow projections</li>
              <li>Track income and expenses with ease</li>
              <li>Financial insights and reporting</li>
              <li>Monthly newsletters with tips</li>
            </ul>
            <h3>Need more from Pulse </h3>
            <p>
              If you have a complex business with multiple financial accounts,
              currencies, or auditing needs, you should try our Pulse Unlimited
              plan for only $30 more per month.
            </p>
            <Link to="/signup">
              <button className="btn1">Switch Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
