import React from 'react';
import './join-us.css'; // Import the CSS file

const JoinUsForm = () => {
  return (
    <form action="https://example.com/form-submit-url" method="post" className="join-us-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email" required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label><br/>
        <input type="text" id="subject" name="subject" required /><br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label><br/>
        <textarea id="message" name="message" rows="4" cols="50" required ></textarea><br/><br/>
      </div>
      <div>
        <input type="submit" value="Submit" className="submit-btn"/>
      </div>
    </form>
  );
};

export default JoinUsForm;
