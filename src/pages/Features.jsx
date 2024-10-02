import React from "react";
import "../styles/Features.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <section className="hero-section">
        <h1>Need an accurate financial forecast?</h1>
        <h3>Use Pulse to project your cash flow with confidence.</h3>
        <Link to="/signup">
          <button className="cta-button">Try 30 Days Free</button>
        </Link>
      </section>
      <section className="cashflow-section">
        <div className="left-content">
          <h1 style={{ textAlign: "center" }}>Manage your cash flow.</h1>
          <ul className="features-list">
            <li>
              <strong>Enter your cash flow projections</strong> Add single
              income or expenses to your cash flow for complete control.
            </li>
            <li>
              <strong>Automate recurring entries</strong> Reduce manual entry
              with recurring income and expense logic.
            </li>
            <li>
              <strong>View Detailed Transactions</strong> Add multiple lines to
              a single item to make your cash flow easy to understand.
            </li>
            <li>
              <strong>Adjust past transactions</strong> Edit any entry at any
              time.
            </li>
            <li>
              <strong>Dial in growth and expense curves</strong> Anticipating
              growth? Automate it.
            </li>
            <li>
              <strong>Play with scenarios</strong> Toggle income and expenses on
              and off to see impact.
            </li>
          </ul>
        </div>
      </section>
      <section
        className="cashflow-section"
        style={{ backgroundColor: "#eafaf1" }}
      >
        <div className="left-content">
          <h1 style={{ textAlign: "center" }}>
            Visualize your income and expenses.
          </h1>
          <ul className="features-list">
            <li>
              <strong>Track you cash flow over any time range</strong> Monitor
              your cash flow by week, month, or custom date range. Check your
              cash on hand at the beginning of each month and view each day’s
              incoming and outgoing funds.
            </li>
            <li>
              <strong>Organize cash flow into categories</strong> Know where
              your money’s coming from and going.
            </li>
            <li>
              <strong>Group cash flow by customer</strong>Know who your best
              (and worst) customers will be.
            </li>
            <li>
              <strong>Group cash flow by project</strong> Edit any entry at any
              time.
            </li>
          </ul>
        </div>
      </section>
      <div className="signup">
        <Link to="/signup">
          <h1 style={{ textDecoration: "underline", color: "white" }}>
            Sign Up for a Free 30-Day Trial →
          </h1>
        </Link>
      </div>
      <section className="cashflow-section" style={{ marginTop: "5vh" }}>
        <div className="left-content">
          <h1 style={{ textAlign: "center" }}>
            Connect your accounting software.
          </h1>
          <ul className="features-list">
            <li>
              <strong>Quickbooks Online Integration</strong> Sync at any time to
              get the latest transactions from QuickBooks Online.
            </li>
            <li>
              <strong>Compare actuals and projections</strong>By putting your
              accounting data right alongside your cash flow projections, you
              can compare your projections with your actual cash flow.
            </li>
            <li>
              <strong>Less manual entry and errors</strong> With a direction
              connection, you don’t have to worry about messing anything up.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
