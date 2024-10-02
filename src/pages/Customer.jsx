import React from "react";
import "../styles/Customer.css";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <section className="testimonials">
      <h2>See What Our Customers Are Saying About Pulse</h2>
      <div className="testimonials-container">
        {/* Testimonial 1 */}
        <div className="testimonial">
          <Link to="/read-case1">
            <img src="man1.jpg" />
          </Link>
          <p>
            Casimir Loeber from RealtyNinja tells us how Pulse takes the 'fear
            and stress out of cash flow projection and management.'
          </p>
          <strong>
            HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW
          </strong>
          <Link to="/read-case1">Read Case Study →</Link>
        </div>

        <div className="testimonial">
          <Link to="/read-case1">
            <img src="man2.jpg" />
          </Link>
          <p>
            Pulse helps us monitor the heart-rate of our business and reconcile
            our monthly operational expenses.
          </p>
          <strong>
            HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG
          </strong>
          <Link to="/read-case1">Read Case Study →</Link>
        </div>

        <div className="testimonial">
          <Link to="/read-case1">
            <img src="man3.jpg" />
          </Link>
          <p>
            Pulse gives the folks at nGen Works confidence in their cash flow.
          </p>
          <strong>
            HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS
          </strong>
          <Link to="/read-case1">Read Case Study →</Link>
        </div>

        <div className="testimonial">
          <Link to="/read-case1">
            <img src="man4.jpg" />
          </Link>
          <p>
            After using Pulse at his previous agency, Carl came back to Pulse
            because it gives him a feeling of control over his business.
          </p>
          <strong>BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW</strong>
          <Link to="/read-case1">Read Case Study →</Link>
        </div>
      </div>
    </section>
  );
};

export default Customer;
