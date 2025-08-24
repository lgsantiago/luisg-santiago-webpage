import React from "react";
import "./Links.scss";
import youtube from "../img/youtube.svg";
import medium from "../img/medium.svg";
import linkedin from "../img/linkedin.svg";

const Links: React.FC = () => (
  <section className="section-links">
    <div className="container">
      <div className="section-header">
        <div className="section-subtitle">Let's Connect</div>
        <h2 className="section-title">Find Me Online</h2>
        <p className="section-description">
          Follow me on social media for the latest updates, tutorials, and insights 
          into web development and technology.
        </p>
      </div>

      <div className="social-links">
        <a 
          href="https://www.youtube.com/@lgsantiago" 
          className="social-link youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img src={youtube} alt="YouTube" />
          </div>
          <div className="social-info">
            <div className="social-name">YouTube</div>
            <div className="social-description">Tutorials & Tech Tips</div>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/luisg-santiago/" 
          className="social-link linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img src={linkedin} alt="LinkedIn" />
          </div>
          <div className="social-info">
            <div className="social-name">LinkedIn</div>
            <div className="social-description">Professional Network</div>
          </div>
        </a>

        <a 
          href="https://medium.com/@luisg_santiago" 
          className="social-link medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img src={medium} alt="Medium" />
          </div>
          <div className="social-info">
            <div className="social-name">Medium</div>
            <div className="social-description">Articles & Insights</div>
          </div>
        </a>

        <a 
          href="mailto:luis.santiagoayala@gmail.com" 
          className="social-link email"
        >
          <div className="social-icon">
            <span className="emoji-icon">✉️</span>
          </div>
          <div className="social-info">
            <div className="social-name">Email</div>
            <div className="social-description">Direct Contact</div>
          </div>
        </a>
      </div>

      <div className="connect-footer">
        <p className="footer-text">
          Ready to collaborate on your next project?
        </p>
        <a href="mailto:luis.santiagoayala@gmail.com" className="footer-cta">
          <span className="cta-icon">🚀</span>
          Let's Build Something Amazing
        </a>
      </div>
    </div>
  </section>
);

export default Links;
