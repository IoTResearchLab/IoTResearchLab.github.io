import React, { useState } from 'react';
import './join-us.css';

const JoinUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('pdf', pdf);

    try {
      const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/upload-pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setPdf(null);
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="join-us-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label><br/>
        <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label><br/>
        <textarea id="message" name="message" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="pdf">Upload PDF:</label><br/>
        <input type="file" id="pdf" name="pdf" accept="application/pdf" onChange={(e) => setPdf(e.target.files[0])} required /><br/><br/>
      </div>
      <div>
        <input type="submit" value="Submit" className="submit-btn"/>
      </div>
    </form>
  );
};

export default JoinUsForm;
