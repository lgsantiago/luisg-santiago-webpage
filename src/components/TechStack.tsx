import React, { useState, useEffect } from "react";
import "./TechStack.scss";

interface TechCategory {
  id: string;
  name: string;
  icon: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  level: number; // 1-5 proficiency level
  icon: string;
  description: string;
  yearsOfExperience: number;
}

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.tech-stack-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const techCategories: TechCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: "🎨",
      technologies: [
        {
          name: "React",
          level: 5,
          icon: "⚛️",
          description: "Expert in building scalable React applications with modern patterns",
          yearsOfExperience: 5
        },
        {
          name: "TypeScript",
          level: 5,
          icon: "🔷",
          description: "Strong typing for better code quality and developer experience",
          yearsOfExperience: 4
        },
        {
          name: "Next.js",
          level: 4,
          icon: "▲",
          description: "Full-stack React framework for production applications",
          yearsOfExperience: 3
        },
        {
          name: "JavaScript (ES6+)",
          level: 5,
          icon: "🟨",
          description: "Modern JavaScript with deep understanding of the language",
          yearsOfExperience: 8
        },
        {
          name: "HTML5 & CSS3",
          level: 5,
          icon: "🌐",
          description: "Semantic markup and modern CSS including Flexbox, Grid",
          yearsOfExperience: 10
        },
        {
          name: "SCSS/Sass",
          level: 4,
          icon: "🎨",
          description: "Advanced CSS preprocessing with mixins and functions",
          yearsOfExperience: 6
        },
        {
          name: "Tailwind CSS",
          level: 4,
          icon: "🌊",
          description: "Utility-first CSS framework for rapid UI development",
          yearsOfExperience: 2
        },
        {
          name: "React Native",
          level: 3,
          icon: "📱",
          description: "Cross-platform mobile app development",
          yearsOfExperience: 2
        }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      technologies: [
        {
          name: "Node.js",
          level: 4,
          icon: "🟢",
          description: "Server-side JavaScript runtime for scalable applications",
          yearsOfExperience: 4
        },
        {
          name: "Express.js",
          level: 4,
          icon: "🚂",
          description: "Minimal and flexible Node.js web framework",
          yearsOfExperience: 4
        },
        {
          name: "Python",
          level: 3,
          icon: "🐍",
          description: "Versatile programming language for various applications",
          yearsOfExperience: 3
        },
        {
          name: "RESTful APIs",
          level: 5,
          icon: "🔗",
          description: "Design and implementation of REST API architectures",
          yearsOfExperience: 6
        },
        {
          name: "GraphQL",
          level: 3,
          icon: "🔺",
          description: "Query language for APIs with efficient data fetching",
          yearsOfExperience: 2
        },
        {
          name: "JWT",
          level: 4,
          icon: "🔐",
          description: "JSON Web Tokens for secure authentication",
          yearsOfExperience: 4
        }
      ]
    },
    {
      id: "database",
      name: "Database",
      icon: "🗄️",
      technologies: [
        {
          name: "MongoDB",
          level: 4,
          icon: "🍃",
          description: "NoSQL database for flexible, scalable data storage",
          yearsOfExperience: 4
        },
        {
          name: "PostgreSQL",
          level: 3,
          icon: "🐘",
          description: "Advanced open source relational database",
          yearsOfExperience: 2
        },
        {
          name: "MySQL",
          level: 3,
          icon: "🐬",
          description: "Popular relational database management system",
          yearsOfExperience: 3
        },
        {
          name: "Redis",
          level: 3,
          icon: "🔴",
          description: "In-memory data structure store for caching and sessions",
          yearsOfExperience: 2
        },
        {
          name: "Firebase",
          level: 4,
          icon: "🔥",
          description: "Google's platform for building mobile and web applications",
          yearsOfExperience: 3
        }
      ]
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: "🛠️",
      technologies: [
        {
          name: "Git & GitHub",
          level: 5,
          icon: "🐙",
          description: "Version control and collaborative development",
          yearsOfExperience: 8
        },
        {
          name: "Docker",
          level: 3,
          icon: "🐳",
          description: "Containerization for consistent development environments",
          yearsOfExperience: 2
        },
        {
          name: "AWS",
          level: 3,
          icon: "☁️",
          description: "Amazon Web Services for cloud infrastructure",
          yearsOfExperience: 2
        },
        {
          name: "Vercel",
          level: 4,
          icon: "▲",
          description: "Platform for frontend frameworks and static sites",
          yearsOfExperience: 3
        },
        {
          name: "Webpack",
          level: 3,
          icon: "📦",
          description: "Module bundler for modern JavaScript applications",
          yearsOfExperience: 4
        },
        {
          name: "Jest",
          level: 4,
          icon: "🃏",
          description: "JavaScript testing framework with focus on simplicity",
          yearsOfExperience: 4
        },
        {
          name: "ESLint & Prettier",
          level: 4,
          icon: "✨",
          description: "Code quality and formatting tools for JavaScript",
          yearsOfExperience: 5
        }
      ]
    }
  ];

  const activeCategories = techCategories.find(cat => cat.id === activeCategory);

  const getProficiencyLabel = (level: number): string => {
    const labels = ["", "Beginner", "Intermediate", "Proficient", "Advanced", "Expert"];
    return labels[level] || "";
  };

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Technical Expertise</div>
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills, tools, and technologies I work with to build modern applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {techCategories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="technologies-container">
          {activeCategories && (
            <div className="technologies-grid">
              {activeCategories.technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`tech-card ${isVisible ? 'animate' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tech-header">
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-info">
                      <h3 className="tech-name">{tech.name}</h3>
                      <div className="tech-experience">{tech.yearsOfExperience}+ years</div>
                    </div>
                  </div>
                  
                  <div className="tech-proficiency">
                    <div className="proficiency-label">
                      {getProficiencyLabel(tech.level)}
                    </div>
                    <div className="proficiency-bar">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`proficiency-dot ${i < tech.level ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="tech-summary">
          <div className="summary-stats">
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Tech Categories</div>
            </div>
          </div>
          
          <div className="summary-text">
            <p>
              I'm passionate about learning new technologies and staying current with industry trends. 
              My diverse skill set allows me to work across the full stack, from database design 
              to user interface implementation.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="cta-btn primary">
                See Projects
              </a>
              <a href="mailto:luis.santiagoayala@gmail.com" className="cta-btn secondary">
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;