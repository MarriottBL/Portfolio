import { FunctionComponent, useState } from "react";
import axios from 'axios';
import "./EmailFrame.css";

export type EmailFrameType = {
  className?: string;
};

const EmailFrame: FunctionComponent<EmailFrameType> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://localhost:3001/send', formData)
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <section className={`email-frame ${className}`}>
      <form onSubmit={sendEmail}>
        <div className="input-wrapper">
          <div className="input-container">
            <label className="name-label">Your name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="email-wrapper">
            <label className="email-label">Your email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="message-input">
            <label className="message-label">Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>
        </div>
        <div className="submit-button">
          <button type="submit" className="send-button">
            <img className="send-icon" alt="" src="/send.svg" />
            <div className="send-text">Send Message</div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default EmailFrame;
