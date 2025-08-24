import React, { useState } from "react";
import "./Projects.scss";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample projects data - you can replace with real projects
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack React application with payment processing and admin dashboard.",
      longDescription: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment processing with Stripe, and an admin dashboard for inventory management.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: "2",
      title: "Task Management Dashboard",
      description: "Modern project management tool with real-time collaboration features.",
      longDescription: "A sophisticated project management dashboard featuring drag-and-drop task organization, real-time updates, team collaboration tools, and detailed analytics. Built with modern React patterns and TypeScript for type safety.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Drag & Drop API"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      demoLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: "3",
      title: "Weather Analytics API",
      description: "RESTful API providing weather data analysis and forecasting services.",
      longDescription: "A robust API service that aggregates weather data from multiple sources, provides historical analysis, and offers predictive forecasting. Includes rate limiting, authentication, and comprehensive documentation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      githubLink: "https://github.com/example",
      featured: false
    },
    {
      id: "4",
      title: "Mobile Fitness Tracker",
      description: "React Native app for tracking workouts and nutrition goals.",
      longDescription: "A comprehensive fitness tracking mobile application with workout logging, nutrition tracking, progress visualization, and social features. Includes offline functionality and data synchronization.",
      technologies: ["React Native", "TypeScript", "SQLite", "AsyncStorage", "Charts"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      demoLink: "https://example.com",
      featured: false
    },
    {
      id: "5",
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search and virtual tours.",
      longDescription: "A modern real estate platform featuring property listings, advanced filtering, virtual tours, mortgage calculator, and agent management system. Includes map integration and mobile responsiveness.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "MapBox", "AWS S3"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      demoLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: "6",
      title: "DevOps Monitoring Dashboard",
      description: "Real-time infrastructure monitoring and alerting system.",
      longDescription: "A comprehensive DevOps dashboard for monitoring server performance, application health, and deployment metrics. Features real-time alerts, custom dashboards, and integration with popular monitoring tools.",
      technologies: ["React", "D3.js", "WebSockets", "Docker", "Kubernetes", "Prometheus"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "mobile", name: "Mobile" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my development work, from full-stack applications to specialized tools.
            Each project demonstrates different aspects of modern web development.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="featured-projects">
          <h3 className="featured-title">Featured Work</h3>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.demoLink && (
                        <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
                          <span>🔗</span> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                          <span>📁</span> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{categories.find(c => c.id === project.category)?.name}</div>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <button 
                    className="project-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="all-projects">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.demoLink && (
                        <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
                          <span>🔗</span> Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                          <span>📁</span> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{categories.find(c => c.id === project.category)?.name}</div>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <div className="modal-category">{categories.find(c => c.id === selectedProject.category)?.name}</div>
            </div>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <p className="modal-description">{selectedProject.longDescription}</p>
              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                {selectedProject.demoLink && (
                  <a href={selectedProject.demoLink} className="modal-btn demo" target="_blank" rel="noopener noreferrer">
                    🔗 Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a href={selectedProject.githubLink} className="modal-btn github" target="_blank" rel="noopener noreferrer">
                    📁 View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;