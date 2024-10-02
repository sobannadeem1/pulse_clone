import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/Notfound";
import Customer from "./pages/Customer";
import ReadCase1 from "./pages/ReadCase1";
import Blog from "./pages/Blog";
import Image1 from "./pages/Image1";
import Image2 from "./pages/Image2";
import Image3 from "./pages/Image3";
import Image4 from "./pages/Image4";
import Image5 from "./pages/Image5";
import Image6 from "./pages/Image6";
import Image7 from "./pages/Image7";
import Image8 from "./pages/Image8";
import Image9 from "./pages/Image9";
import Features from "./pages/Features";
import Signup from "./pages/Signup";

const App = () => {
  const location = useLocation(); // Get current path

  return (
    <>
      {location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/read-case1" element={<ReadCase1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/image1" element={<Image1 />} />
        <Route path="/image2" element={<Image2 />} />
        <Route path="/image3" element={<Image3 />} />
        <Route path="/image4" element={<Image4 />} />
        <Route path="/image5" element={<Image5 />} />
        <Route path="/image6" element={<Image6 />} />
        <Route path="/image7" element={<Image7 />} />
        <Route path="/image8" element={<Image8 />} />
        <Route path="/image9" element={<Image9 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
