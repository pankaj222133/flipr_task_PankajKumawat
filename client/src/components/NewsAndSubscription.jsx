import React, { useState } from "react";

const NewsAndSubscription = () => {
  // State to manage the email input and response messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    // Send POST request to the backend
    try {
      const response = await fetch("http://localhost:5000/api/subscriptions/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setMessage({ type: "success", text: "Subscribed successfully!" });
      } else {
        // Failure
        setMessage({ type: "error", text: data.error || "Subscription failed. Please try again." });
      }
    } catch (error) {
      // Error
      setMessage({ type: "error", text: "There was an error with the subscription." });
    }

    setLoading(false); // Hide loading state
  };

  return (
    <footer className="footer">
      <div className="aboveFooter">
        <div className="content">
          <h2>
            Learn more about our listing process, as well as <br />
            our additional staging and design work.
          </h2>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      <div className="bluePart">
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>
        <div className="subscribe-section">
          <label htmlFor="email">Subscribe Us</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required
          />
          <button className="subscribe-btn" onClick={handleSubscribe} disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          {/* Displaying the success or error message */}
          {message && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>

      <div className="endPart">
        <div className="copyright">
          <p>All Rights Reserved 2023</p>
        </div>
        <div className="endLogo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NewsAndSubscription;
