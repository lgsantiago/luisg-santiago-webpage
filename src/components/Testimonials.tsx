import React, { useState, useEffect } from "react";
import "./Testimonials.scss";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project?: string;
  linkedin?: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample testimonials data - replace with real testimonials
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStartup Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Luis delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and modern development practices resulted in a 40% increase in conversion rates. The code quality was outstanding and the project was delivered on time.",
      rating: 5,
      project: "E-Commerce Platform",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CTO",
      company: "Growth Solutions LLC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with Luis was a game-changer for our startup. He transformed our complex requirements into a beautiful, scalable React application. His expertise in TypeScript and modern frameworks is evident in every line of code.",
      rating: 5,
      project: "Task Management Dashboard",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Agency Pro",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Luis created a stunning website that perfectly captures our brand identity. The performance optimizations he implemented improved our page load speeds by 60%. He's not just a developer, he's a problem solver.",
      rating: 5,
      project: "Corporate Website Redesign"
    },
    {
      id: "4",
      name: "David Kim",
      role: "Founder",
      company: "FitTech Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "The mobile app Luis built for our fitness platform has been a huge success. His React Native expertise and understanding of UX principles resulted in a 4.8-star app store rating. Highly recommended!",
      rating: 5,
      project: "Mobile Fitness App",
      linkedin: "https://linkedin.com/in/example"
    },
    {
      id: "5",
      name: "Jennifer Walsh",
      role: "Operations Manager",
      company: "Real Estate Global",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      content: "Luis developed a comprehensive real estate platform that streamlined our entire business process. The advanced search functionality and virtual tours feature have significantly improved our client satisfaction rates.",
      rating: 5,
      project: "Real Estate Platform"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextTestimonial = () => {
    const next = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
    goToTestimonial(next);
  };

  const prevTestimonial = () => {
    const prev = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    goToTestimonial(prev);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Client Feedback</div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-description">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="testimonials-container">
          {/* Main Testimonial Display */}
          <div className="testimonial-main">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].content}
                </p>
                
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                {testimonials[currentTestimonial].project && (
                  <div className="testimonial-project">
                    <span className="project-label">Project:</span>
                    <span className="project-name">{testimonials[currentTestimonial].project}</span>
                  </div>
                )}
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-role">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  {testimonials[currentTestimonial].linkedin && (
                    <a 
                      href={testimonials[currentTestimonial].linkedin}
                      className="linkedin-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="linkedin-icon">💼</span>
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonial-controls">
            <button 
              className="control-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>

          {/* Auto-play Toggle */}
          <button 
            className={`autoplay-toggle ${isAutoPlaying ? 'playing' : 'paused'}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Statistics */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">Average Rating</div>
            <div className="stat-stars">{renderStars(5)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{testimonials.length}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Project Success</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>Ready to Work Together?</h3>
          <p>Let's discuss your next project and see how I can help bring your ideas to life.</p>
          <div className="cta-buttons">
            <a href="mailto:luis.santiagoayala@gmail.com" className="cta-btn primary">
              <span className="btn-icon">📧</span>
              Start a Conversation
            </a>
            <a href="#projects" className="cta-btn secondary">
              <span className="btn-icon">👀</span>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;