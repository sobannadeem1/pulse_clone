import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Yes, your business can survive
            <span className="highlight-text"> that expense.</span>
          </h1>
          <p>
            Do you know how much money you’ll have in two weeks? Two months? Two
            years? Business owners who use Pulse have better cash flow habits
            and a firm grasp on the pulse of their business.{" "}
            <strong>First month free.</strong>
          </p>
          <button className="cta-btn">Try 30 Days Free</button>
          <p className="pricing-text">
            Plans start at $29. <Link to="/pricing">See full pricing.</Link>
          </p>
        </div>
        <div className="arrow"></div>
        <div className="chart-container">
          <div className="bar green-bar" style={{ height: "120px" }}></div>
          <div className="bar red-bar" style={{ height: "100px" }}></div>
          <div className="bar green-bar" style={{ height: "150px" }}></div>
          <div className="bar red-bar" style={{ height: "80px" }}></div>
          <div className="bar green-bar" style={{ height: "200px" }}></div>
          <div className="bar red-bar" style={{ height: "50px" }}></div>
        </div>
      </section>
      <section className="quotes-section">
        <h2>Business owners trust Pulse.</h2>
        <p style={{ fontWeight: "bolder" }}>
          Below are real quotes from business owners.
        </p>

        <div className="quote">
          <p className="heading">
            “I like that it provides the opportunity to test scenarios.”
          </p>
          <p>
            You can quickly toggle income and expenses off and on to see what
            happens based on different scenarios to see how they impact your
            bottom line. When you can forecast your cash flow this quickly and
            easily, you’re empowered to make smarter business decisions.
          </p>
        </div>

        <div className="quote">
          <p className="heading">
            “Pulse shows me how to track cash flow the right way.”
          </p>
          <p>
            Stop stumbling your way through spreadsheets not knowing what you
            don’t know. Pulse shows you a simple, easy to understand chart that
            answers the questions you have about your cash flow.
          </p>
        </div>

        <div className="quote">
          <p className="heading">“It’s easy to set up and understand.”</p>
          <p>
            Our user friendly design makes Pulse a breeze to set up and manage
            your cash flow. It’s so easy that over half of our customers are
            able to use Pulse every day without it taking up too much of their
            time.
          </p>
        </div>

        <div className="quote">
          <p className="heading">
            “It used to take us hours to manually do in Excel what Pulse does
            out of the box.”
          </p>
          <p>
            If you’re trying to manage your cash flow in systems that aren’t
            specifically designed for that purpose, you’re wasting the one
            resource more valuable than your cash, your time.
          </p>
        </div>

        <div className="quote">
          <p className="heading">“I like the simplicity.”</p>
          <p>
            Pulse is meant to do one thing really well—cash flow management. No
            other product on the market is as focused on putting you in control
            of how cash moves in and out of your business.
          </p>
        </div>

        <div className="quote">
          <p className="heading">“I like that Pulse is web-based.”</p>
          <p>
            You can access Pulse from any computer, any time. There’s no
            software to install.
          </p>
        </div>

        <div className="quote">
          <p className="heading">
            “I can connect it to my accounting software.”
          </p>
          <p>
            With our direct connection to QuickBooks Online, keeping your cash
            flow projections and your actual performance in sync is a breeze.
          </p>
        </div>
      </section>
      <hr />
      <div className="section-container">
        <div className="text-side">
          <h1>Make smarter business decisions with Pulse.</h1>
          <p>
            Do you know if you can hire another employee or take some money out
            of the company? Should you take on that new project or should turn
            it down? With Pulse, you immediately see how business decisions will
            impact your cash in the future, which in turn gives you the
            confidence you need to know if the decision is right.
          </p>
        </div>
        <div className="quote-side">
          <div className="quote-container">
            <img src="profile.jpg" alt="Carl Smith" className="profile-pic" />
            <p className="quote-text">
              "Pulse makes my business smarter. We make better decisions because
              we can see further. You could say it has lowered our stress level
              by removing the fear of not knowing."
            </p>
            <p className="author">CARL SMITH, BUREAU OF DIGITAL</p>
            <Link to="/customer" className="cta-link">
              Read Customer Story →
            </Link>
          </div>
        </div>
      </div>

      <section className="feature-section2">
        <div className="feature-header2">
          <h1>Pulse is specifically designed for small businesses.</h1>
          <p>
            Our customers include creative and technology agencies, service
            providers, restaurants, manufacturers, retail shops, contractors,
            freelancers, and more.
          </p>
          <button className="cta-button2">
            Sign Up for a Free 30-Day Trial
          </button>
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-header">
          <h1>Can your spreadsheets do this?</h1>
          <p>
            Pulse is like your cash flow spreadsheet, except the math isn’t
            wrong. Also, Pulse has:
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-item">
            <img
              src="20892608.jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Multiple Cash Flow Views Icon"
              className="feature-icon"
            />
            <h3>Multiple Cash Flow Views</h3>
            <p>
              Monitor your cash flow on a yearly, monthly, weekly, daily
              transactional basis.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="2253648.jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Customers and Projects Icon"
              className="feature-icon"
            />
            <h3>Customers and Projects</h3>
            <p>
              Run cash flow reports on customers and projects to see how
              profitable they’re going to be.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="busines.jpg"
              style={{ width: "100px", height: "100px", borderRadius: "20px" }}
              alt="Visual Reports Icon"
              className="feature-icon"
            />
            <h3>Visual Reports</h3>
            <p>
              With our easy-to-understand reports, you can see cash moving in
              and out of your business.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="currency.jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Currency Conversion Icon"
              className="feature-icon"
            />
            <h3>Currency Conversion</h3>
            <p>
              If your business operates on multiple currencies, we have you
              covered with today’s exchange rates.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="29.jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Invite Your Team Icon"
              className="feature-icon"
            />
            <h3>Invite Your Team</h3>
            <p>
              Invite your team to help out, or showcase your projections to
              investors by giving them read-only access.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="health.jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Quickbooks Online Icon"
              className="feature-icon"
            />
            <h3>Connects to Quickbooks Online</h3>
            <p>
              Save time and reduce errors by keeping Pulse and your accounting
              software in sync.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
