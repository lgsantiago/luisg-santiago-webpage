import React from "react";
import logo from "../img/logo.png";
import profileImg from "../img/profile.jpg";
import ThemeToggle from "./ThemeToggle";
import useScrollNavigation from "../hooks/useScrollNavigation";

const Header: React.FC = () => {
  const navigationItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "tech-stack", label: "Tech Stack", href: "#tech-stack" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "videos", label: "Videos", href: "#videos" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const { activeSection, scrollToSection } = useScrollNavigation(
    navigationItems,
    {
      offset: 80,
      smooth: true,
    }
  );

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Modern Navigation */}
      <nav className="navigation">
        <div className="navigation-content">
          <div className="logo-box">
            <img src={logo} alt="LG Santiago Logo" className="logo" />
            <span className="logo-text">LG Santiago</span>
          </div>

          <div className="nav-menu">
            {navigationItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Modern Hero Section */}
      <header id="home" className="header">
        <div className="header-content">
          <div className="header-text">
            <div className="subtitle">
              Software Engineer & Developer Advocate
            </div>
            <h1 className="title">
              Building Smarter Solutions
              <br />
              for the Future
            </h1>
            <p className="description">
              I'm a passionate software engineer based in Miami, specializing in
              creating powerful web applications that help businesses connect
              with their customers. Let's build something amazing together.
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
                onClick={(e) => handleNavClick(e, "projects")}
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
};

export default Header;
