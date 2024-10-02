import React, { useState } from "react";
import "../styles/Blog.css";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog posts data
  const postsData = [
    {
      id: 1,
      category: "Survive & Thrive",
      title:
        "Growth in a Downturn: How Anah Fayy of LA Tutoring Pivoted After an 85% Client Drop",
      description:
        "Learn how Anah Fayy pivoted her tutoring business after an 85% drop in clients...",
      imgSrc: "image1.png",
      link: "/image1",
    },
    {
      id: 2,
      category: "Entrepreneurship",
      title:
        "Monetizing a Network: How Jodi Brandstetter Started Her Second Business",
      description:
        "Jodi shares how she grew her business book publishing network...",
      imgSrc: "image2.png",
      link: "/image2",
    },
    {
      id: 3,
      category: "Pro Tips",
      title:
        "5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital",
      description: "Brogan Renshaw built a 6-figure business from nothing...",
      imgSrc: "image3.png",
      link: "/image3",
    },
    {
      id: 4,
      category: "Small Business",
      title:
        "5 Cash Flow Tips and Business Insights for Self-Employed Millennials from Justin Green CFP",
      description:
        "Justin Green shares his best tips for managing cash flow...",
      imgSrc: "image4.png",
      link: "/image4",
    },
    {
      id: 5,
      category: "Entrepreneurship",
      title:
        "Starting a Business: Tips from Writer Nicole Rollender of Strand Writing Services",
      description:
        "Nicole Rollender started her writing business back in 2014...",
      imgSrc: "image5.png",
      link: "/image5",
    },
    {
      id: 6,
      category: "Business",
      title:
        "Streamline Your Operations for Success: How Jonathan Seckler Grew His Business",
      description:
        "Jonathan Seckler shares how he grew his business from $2,000 to 7-figures...",
      imgSrc: "image6.png",
      link: "/image6",
    },
    {
      id: 7,
      category: "Small Business",
      title:
        "Balancing Your Side-Hustle and Full-Time Gig: How Greg Marano Manages Freelancing",
      description:
        "Greg Marano shares his insights into managing a full-time job and freelancing...",
      imgSrc: "image7.png",
      link: "/image7",
    },
    {
      id: 8,
      category: "Small Business",
      title:
        "Big Goals and Basic Cash Flow: How Isaac Mashman Built His Top-Rated PR Firm",
      description:
        "Isaac Mashman shares how setting big goals and a solid team helped build his PR firm...",
      imgSrc: "image8.png",
      link: "/image8",
    },
    {
      id: 9,
      category: "Pro Tips",
      title:
        "How Ryan David of We Buy Houses Pennsylvania Launched and Grew His Business",
      description:
        "Ryan David shares how he launched and grew his business to success...",
      imgSrc: "image9.png",
      link: "/image9",
    },
  ];

  // Categories
  const categories = [
    "All",
    "News",
    "Business",
    "Pro Tips",
    "Small Business",
    "Entrepreneurship",
    "Cash Flow Basics",
    "Survive & Thrive",
    "Hustle & Cash Flow",
  ];

  const navigate = useNavigate();
  const filteredPosts =
    selectedCategory === "All"
      ? postsData
      : postsData.filter((post) => post.category === selectedCategory);
  const imageclick = (link) => {
    navigate(link);
  };
  return (
    <div className="blog-container">
      <h1>Survive And Thrive</h1>

      <div className="blog-content">
        {/* Categories Section */}
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={
                  category === selectedCategory ? "active-category" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Blog Posts Section */}
        <div className="posts">
          {filteredPosts.map((post) => (
            <div className="post" key={post.id}>
              <img
                src={post.imgSrc}
                onClick={() => imageclick(post.link)}
                style={{ cursor: "pointer" }}
              />
              <div className="post-content">
                <span className="category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link to={post.link}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
