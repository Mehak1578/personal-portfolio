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
          message: response.data.message
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
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
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
            Have a question or want to work together? Feel free to reach out! 
            I'd love to hear from you and discuss how we can collaborate on your next project.
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
              <div className="detail-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
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
                rows="5"
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
