import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
import { SkeletonLoader } from './Loading';

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
  const [isLoading, setIsLoading] = useState(true);

  // Sample testimonials data - replace with real testimonials
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c64c29b4?w=150&h=150&fit=crop&crop=face",
      content: "Working with Luis was an absolute game-changer for our project. His technical expertise and attention to detail resulted in a product that exceeded our expectations. The final deliverable was not only functional but also beautifully designed.",
      rating: 5,
      project: "E-commerce Platform",
      linkedin: "https://www.linkedin.com/in/sarahjohnson"
    },
    {
      id: "2", 
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Luis delivered exceptional results on our web application. His problem-solving skills and ability to translate complex requirements into elegant solutions made the entire development process smooth and efficient.",
      rating: 5,
      project: "SaaS Dashboard",
      linkedin: "https://www.linkedin.com/in/michaelchen"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Marketing Director", 
      company: "GrowthLabs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The website Luis created for us has significantly improved our conversion rates. His understanding of both technical implementation and user experience design is truly impressive. Highly recommended!",
      rating: 5,
      project: "Marketing Website"
    }
  ];

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, isLoading]);

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
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Client Feedback</div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-description">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-main">
            {isLoading ? (
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <div className="testimonial-content">
                  <SkeletonLoader variant="text" lines={4} height={20} />
                  <div style={{ marginTop: '20px', marginBottom: '16px' }}>
                    <SkeletonLoader variant="rectangular" width={120} height={20} />
                  </div>
                  <SkeletonLoader variant="rectangular" width={150} height={16} />
                </div>
                <div className="testimonial-author" style={{ marginTop: '24px' }}>
                  <SkeletonLoader variant="circular" width={60} height={60} />
                  <div className="author-info">
                    <SkeletonLoader variant="text" width={120} height={18} />
                    <SkeletonLoader variant="text" width={180} height={14} />
                  </div>
                </div>
              </div>
            ) : (
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
            )}
          </div>

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

          <button 
            className={`autoplay-toggle ${isAutoPlaying ? 'playing' : 'paused'}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

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