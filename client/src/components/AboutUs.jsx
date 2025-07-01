import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="background-decorations">
        {/* Background shapes */}
        <img src="/images/Ellipse 10.svg" alt="Ellipse 1" className="ellipse1" />
        <img src="/images/Subtract-5.svg" alt="Ellipse 7" className="ellipse7" />
        <img src="/images/Subtract.svg" alt="Ellipse 10" className="ellipse10" />
        <img src="/images/Rectangle 58.svg" alt="Line" className='line58'/>
        {/* Add more background images here if necessary */}
      </div>

      <div className="content-container">
        <div className="images-container">
          {/* Images section */}
          <div className="image-box">
            <img src="/images/AboutUs2.svg" alt="Client meeting" />
          </div>
          <div className="image-box img-box2">
            <img src="/images/aboutUs1.svg"  alt="Team discussion" />
          </div>
          <div className="image-box img-box3">
            <img src="/images/AboutUs3.svg"  alt="Business interaction" />
          </div>
        </div>

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Fifteen years of experience in real estate, excellent customer service,<br/> and a 
            commitment to work hard, listen, and follow through. We provide quality service <br/>  to
            build relationships with clients and, more importantly, maintain those <br/>  relationships
            by communicating effectively.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
