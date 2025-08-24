import React from "react";
import "./Videos.scss";

const Videos: React.FC = () => (
  <section id="videos" className="section-videos">
    <div className="container">
      <div className="section-header">
        <div className="section-subtitle">Featured Content</div>
        <h2 className="section-title">YouTube Channel</h2>
        <p className="section-description">
          Check out my latest tutorials and insights on web development, 
          programming tips, and technology trends.
        </p>
      </div>

      <div className="videos-grid">
        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/-goKGvmlqBw"
              title="Web Development Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3 className="video-title">Web Development Fundamentals</h3>
            <p className="video-description">
              Learn the essential concepts and best practices for modern web development.
            </p>
          </div>
        </div>

        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/nqQJLwiOTIY"
              title="React Best Practices"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3 className="video-title">React Best Practices</h3>
            <p className="video-description">
              Discover professional techniques for building scalable React applications.
            </p>
          </div>
        </div>

        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/gsr8uDATCQA"
              title="TypeScript Deep Dive"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3 className="video-title">TypeScript Deep Dive</h3>
            <p className="video-description">
              Master TypeScript for better code quality and developer experience.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <p className="cta-text">
          Want to see more content and stay updated with the latest tutorials?
        </p>
        <a 
          href="https://www.youtube.com/@lgsantiago" 
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="youtube-icon">📺</span>
          Subscribe to My Channel
        </a>
      </div>
    </div>
  </section>
);

export default Videos;
