import { useState } from 'react';
import api from '../api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await api.post('/api/contact', formData);
      
      if (response.data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been received.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection.';
      } else if (error.response) {
        errorMessage = error.response.data?.message || 'Server error. Please try again later.';
      } else if (error.request) {
        errorMessage = 'Cannot connect to server. Please make sure the backend is running.';
      }
      
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: errorMessage
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-container fade-in">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            Have a project in mind or want to connect? Feel free to reach out. I'd be happy to discuss ideas and opportunities.
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>mehakreshma96589@gmail.com</p>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Delhi, India</p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/mehak-rathore-106459324/" target="_blank" rel="noopener noreferrer" className="detail-item detail-link">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>View LinkedIn Profile</p>
              </div>
            </a>

            <a
              href="https://github.com/Mehak1578"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-item detail-link"
            >
              <div className="detail-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#181717"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <h3>GitHub</h3>
                <p>View GitHub Profile</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <p className="form-intro">Send me a message and I'll get back to you as soon as possible.</p>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="8"
                placeholder="Your message..."
                disabled={status.loading}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.success && (
              <div className="alert alert-success">
                {status.message}
              </div>
            )}

            {status.error && (
              <div className="alert alert-error">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
