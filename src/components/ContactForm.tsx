import React, { useState, useRef } from 'react';
import './ContactForm.scss';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 20) return 'Message must be at least 20 characters';
        if (value.trim().length > 1000) return 'Message must not exceed 1000 characters';
        return '';
      
      default:
        return '';
    }
  };

  // Real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation for critical fields
    if (['name', 'email', 'subject', 'message'].includes(name) && value.trim()) {
      const error = validateField(name, value);
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'subject', 'message'].includes(key)) {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual email service (EmailJS, Netlify Forms, etc.)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just log the form data and show success
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Focus/blur handlers for enhanced UX
  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFocusedField('');
    
    // Validate on blur for better UX
    if (['name', 'email', 'subject', 'message'].includes(name)) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Character count for message
  const messageLength = formData.message.length;
  const messageMaxLength = 1000;

  return (
    <section id="contact" className="contact-form-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Ready to bring your ideas to life? I'd love to hear about your project and 
            discuss how we can create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Ready to Start Your Project?</h3>
              <p>
                Whether you need a new website, want to improve an existing application, 
                or have questions about web development, I'm here to help.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>luis.santiagoayala@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Miami, Florida</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-text">
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <p>Or connect with me on:</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/luisg-santiago/" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@lgsantiago" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📺</span>
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitStatus === 'success' && (
              <div className="form-message success">
                <div className="message-icon">✅</div>
                <div className="message-content">
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message error">
                <div className="message-icon">❌</div>
                <div className="message-content">
                  <h4>Oops! Something went wrong</h4>
                  <p>Please try again or email me directly at luis.santiagoayala@gmail.com</p>
                </div>
              </div>
            )}

            <div className="form-grid">
              <div className="form-group">
                <label className={`form-label ${focusedField === 'name' || formData.name ? 'focused' : ''}`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === 'email' || formData.email ? 'focused' : ''}`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === 'company' || formData.company ? 'focused' : ''}`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('company')}
                  className="form-input"
                  placeholder="Your company name (optional)"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className={`form-label ${focusedField === 'budget' || formData.budget ? 'focused' : ''}`}>
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('budget')}
                  className="form-input form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">$50,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label className={`form-label ${focusedField === 'subject' || formData.subject ? 'focused' : ''}`}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                className={`form-input ${errors.subject ? 'error' : ''}`}
                placeholder="What's your project about?"
                disabled={isSubmitting}
              />
              {errors.subject && <div className="form-error">{errors.subject}</div>}
            </div>

            <div className="form-group full-width">
              <label className={`form-label ${focusedField === 'timeline' || formData.timeline ? 'focused' : ''}`}>
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                onFocus={() => handleFocus('timeline')}
                className="form-input form-select"
                disabled={isSubmitting}
              >
                <option value="">When do you need this completed?</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-months+">6+ months</option>
                <option value="flexible">I'm flexible</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className={`form-label ${focusedField === 'message' || formData.message ? 'focused' : ''}`}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Tell me about your project, goals, and any specific requirements..."
                rows={6}
                disabled={isSubmitting}
              />
              <div className="textarea-footer">
                {errors.message && <div className="form-error">{errors.message}</div>}
                <div className={`character-count ${messageLength > messageMaxLength ? 'over-limit' : ''}`}>
                  {messageLength}/{messageMaxLength}
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Message...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="success-icon">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <span className="submit-icon">🚀</span>
                    Send Message
                  </>
                )}
              </button>
              
              <p className="form-disclaimer">
                By submitting this form, you agree to our privacy policy. 
                Your information will never be shared with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;