import React from "react";
import logo from "../img/logo.png";
import profileImg from "../img/profile.jpg";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => (
  <>
    {/* Modern Navigation */}
    <nav className="navigation">
      <div className="navigation-content">
        <div className="logo-box">
          <img src={logo} alt="LG Santiago Logo" className="logo" />
          <span className="logo-text">LG Santiago</span>
        </div>
        <ThemeToggle />
      </div>
    </nav>

    {/* Modern Hero Section */}
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <div className="subtitle">Software Engineer & Developer Advocate</div>
          <h1 className="title">
            Building the Future
            <br />
            One Line at a Time
          </h1>
          <p className="description">
            I'm a passionate software engineer based in Miami, specializing in creating 
            powerful web applications that help businesses connect with their customers. 
            Let's build something amazing together.
          </p>
          <div className="cta-buttons">
            <a
              href="https://www.youtube.com/@lgsantiago"
              className="btn-modern btn-primary"
            >
              Watch My Videos
            </a>
            <a
              href="#projects"
              className="btn-modern btn-secondary"
            >
              View My Projects
            </a>
          </div>
        </div>
        
        <div className="header-profile">
          <div className="profile-container">
            <img 
              src={profileImg} 
              alt="Luis G Santiago Profile" 
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
