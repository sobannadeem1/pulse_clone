// Image1.jsx
import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Image1.css"; // Add your CSS file for styling if needed

const Image1 = () => {
  const title = "Image 1 Title"; // Set a specific title for this page
  const description = "Description for Image 1"; // Optional description

  return (
    <div className="image1-container">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <header className="custom-header">
        <h1>
          Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An
          80% Client Drop
        </h1>
      </header>

      <div className="content">
        <img src="image1.png" />
      </div>
      <div className="text-content">
        <h1>From 80% in-person to fully remote</h1>
        <p>
          Instructors with LA Tutors traditionally conducted lessons in person.
          Even with the opportunity for virtual classes, it was simply easier to
          arrange meetings at a cafe, library, or another location.
        </p>
        <p>
          The COVID pandemic and subsequent lockdowns made physical lessons
          impossible. As a result, LA Tutors faced a drop of 80% in business.
          Not only were in-person classes off the table, but standardized
          testing, their most popular service, was largely canceled in 2020.
        </p>

        <p>For Arash, that meant it was time to focus on a new strategy.</p>
        <p>
          “We had used Zoom and other services for the past few years, so we
          could quickly change gears and work remotely,” says Arash.
        </p>
        <p>
          “And since schools were closed, we shifted our focus to general
          academics instead of test prep. ” Arash also decided to expand his
          customer base in San Francisco and New York during the lockdown. Since
          his team was working from home, scaling his business based on his
          success in LA was easier than ever. Arash opened offices in these new
          locations, began advertising for students, and hired new tutors to
          meet demand. With school closures, parents were looking for online
          tutors to fill in. When the cities began to reopen, his tutors could
          meet their students in person.
        </p>
      </div>
    </div>
  );
};

export default Image1;
