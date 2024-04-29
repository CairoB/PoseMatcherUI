import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          'service_vdp4378',
          'contact_form',
          e.target,
          'OGe4eYQ8gighe9dPg'
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000);
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000);
          }
        );
      
      e.target.reset();
    };
    return (
      <div className="form-container">
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="user_name">Name:</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          <div>
            <label htmlFor="user_email">Email:</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div>
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
          </div>
        </form>
      </div>
    );
  };

export default ContactForm;

