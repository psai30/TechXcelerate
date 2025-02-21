import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"; // Importing the CSS file

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bracelet.jpg" className="d-block w-100 c-img" alt="Earrings" />
          </div>
          <div className="carousel-item">
            <img src="/images/bangle.jpg" className="d-block w-100 c-img" alt="Bangle" />
          </div>
          <div className="carousel-item">
            <img src="/images/ring.jpg" className="d-block w-100 c-img" alt="Ring" />
          </div>
        </div>

        {/* Carousel Navigation */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Header Section */}
      <header>
        <div className="search-container">
          <input type="text" id="searchBar" placeholder="Search for jewelry..." />
          <button onClick={() => alert("Search feature coming soon!")}>Search</button>
        </div>

        <div className="logo-container">
          <img src="/images/svarnora2.JPG" alt="Swarnora Logo" className="logo" />
        </div>

        <nav>
          <ul>
            <li><Link to="/">Stores</Link></li>
            <li><Link to="/">Contact</Link></li>

            {user ? (
              <>
                <li><button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>

      {/* Main Banner */}
      <section className="main-banner">
        <div className="banner-content">
          <h1>Discover Timeless Elegance</h1>
          <p>Indulge in exquisite craftsmanship with Swarnora's signature jewelry.</p>
          <Link to="/" className="cta-button">Explore Now</Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections">
        <h2>Featured Collections</h2>
        <div className="collections-grid">
          <div className="collection-item">
            <img src="https://images.jdmagicbox.com/quickquotes/images_main/-6tikuhkj.jpg" alt="Gold" />
            <h3>Gold</h3>
          </div>
          <div className="collection-item">
            <img src="/images/ring.jpg" alt="Silver" />
            <h3>Silver</h3>
          </div>
          <div className="collection-item">
            <img src="/images/bracelet.jpg" alt="Platinum" />
            <h3>Platinum</h3>
          </div>
          <div className="collection-item">
            <img src="/images/necklace.jpg" alt="Diamond" />
            <h3>Diamond</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-item">
          <p>"Absolutely in love with the designs! Swarnora offers the best quality and elegance."</p>
          <h4>- A Happy Customer</h4>
        </div>
        <div className="testimonial-item">
          <p>"A seamless shopping experience with timeless pieces. Highly recommend!"</p>
          <h4>- Jewelry Enthusiast</h4>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Swarnora is dedicated to curating timeless jewelry with exquisite craftsmanship.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Collections</Link></li>
              <li><Link to="/">Gifting</Link></li>
              <li><Link to="/">Style Hub</Link></li>
              <li><Link to="/">Stores</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@swarnora.com</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Swarnora. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
