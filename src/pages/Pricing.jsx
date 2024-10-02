import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <section className="intro-section">
        <h1>
          <strong>Try Pulse free for</strong>
          <br />
          30 days.
        </h1>
        <p>
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="plans-section">
        <div className="plan">
          <h2>Small Business Plan</h2>
          <p className="price">$59 per month</p>
          <p>You get all Pulse Basics, plus:</p>
          <ul>
            <li>Financial accounts management</li>
            <li>Integrate with QuickBooks for accurate cash flow</li>
            <li>Track your actual cash flow</li>
          </ul>
          <button className="cta-button">Sign Up Now</button>
        </div>
        <div className="plan premium">
          <h2>Unlock Extra Features</h2>
          <p className="price">$89 per month</p>
          <p>Get it all, plus:</p>
          <ul>
            <li>Unlimited financial accounts</li>
            <li>Advanced reporting and review tools</li>
            <li>Invoice attachments and auditing features</li>
          </ul>
          <button className="cta-button">Try Premium</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <p>
          “Pulse is worth every penny because it empowers business owners with
          critical financial insight.”
        </p>
        <p>
          <strong>Sunwest Marketing, Inc.</strong>
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h3>FAQ</h3>
        <div className="faq">
          <h4>How does the 30-day free trial work?</h4>
          <p>
            You can use Pulse absolutely free for 30 days. After 30 days, we
            will charge the credit card you used when signing up.
          </p>
        </div>
        <div className="faq">
          <h4>
            If I upgrade an existing account, do I get another free trial?
          </h4>
          <p>
            New accounts only get a 30-day free trial. Existing accounts will be
            billed at the new rate.
          </p>
        </div>
        <div className="faq">
          <h4>Will I be able to cancel my account if I don't use Pulse?</h4>
          <p>Yes, you can cancel your account at any time.</p>
        </div>
        <div className="faq">
          <h4>What types of payments do you accept?</h4>
          <p>
            We accept payments made online using Visa, MasterCard, Discover, and
            American Express.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
