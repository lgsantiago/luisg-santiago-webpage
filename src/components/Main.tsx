import React from "react";
import "./Main.scss";
import AnimatedSection from "./AnimatedSection";

const Main: React.FC = () => (
  <main id="about" className="about-section">
    <div className="container">
      <AnimatedSection animation="fade-in-down" className="section-header">
        <div className="section-subtitle">Get to Know Me</div>
        <h2 className="section-title">About Luis Santiago</h2>
        <p className="section-description">
          Passionate about creating digital experiences that make a difference
        </p>
      </AnimatedSection>

      <div className="about-content">
        <AnimatedSection animation="fade-in-left" delay={200} className="about-text">
          <p className="about-paragraph lead">
            Hey there! I'm a software engineer based in sunny Miami, passionate
            about building innovative web applications that help businesses
            thrive in the digital world.
          </p>

          <p className="about-paragraph">
            I specialize in creating powerful, user-friendly applications using
            modern technologies like React, TypeScript, and Node.js. Whether
            it's a sleek landing page or a complex web platform, I focus on
            delivering solutions that not only look great but perform
            exceptionally.
          </p>

          <AnimatedSection animation="fade-in-up" delay={400} className="skills-grid" stagger>
            <div className="skill-item">
              <div className="skill-icon">⚛️</div>
              <span className="skill-name">React & TypeScript</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🚀</div>
              <span className="skill-name">Node.js & APIs</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🎨</div>
              <span className="skill-name">UI/UX Design</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">☁️</div>
              <span className="skill-name">Cloud Platforms</span>
            </div>
          </AnimatedSection>

          <p className="about-paragraph">
            When I'm not coding, you'll find me creating educational content on
            YouTube, exploring new restaurants, or staying active with fitness.
            I believe in continuous learning and love sharing knowledge with the
            developer community.
          </p>

          <AnimatedSection animation="fade-in-up" delay={600} className="cta-container">
            <a
              href="mailto:luis.santiagoayala@gmail.com"
              className="btn-contact"
            >
              <span className="btn-icon">✉️</span>
              Let's Work Together
            </a>
            <div className="contact-info">
              <span className="contact-icon">📧</span>
              <span className="contact-text">luis.santiagoayala@gmail.com</span>
            </div>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-right" delay={300} className="about-visual">
          <AnimatedSection animation="scale-in" delay={800} className="stats-container" stagger>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">YouTube Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Miami</div>
              <div className="stat-label">Based</div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </div>
  </main>
);

export default Main;
