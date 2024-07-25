import React from 'react';
import './join-us.css'; // Import the CSS file

const JoinUsForm = () => {
  return (
    <form action="https://formspree.io/f/xkgwgyvb" method="POST" class="join-us-form">
    <div class="form-group">
      <label for="name">Name:</label><br/>
      <input type="text" id="name" name="name" required /><br/><br/>
    </div>
    <div class="form-group">
      <label for="email">Email:</label><br/>
      <input type="email" id="email" name="email" required /><br/><br/>
    </div>
    <div class="form-group">
      <label for="subject">Subject:</label><br/>
      <input type="text" id="subject" name="subject" required /><br/><br/>
    </div>
    <div class="form-group">
      <label for="message">Message:</label><br/>
      <textarea id="message" name="message" rows="4" cols="50" required></textarea><br/><br/>
    </div>
    <div>
      <input type="submit" value="Submit" class="submit-btn"/>
    </div>
  </form>
  
  );
};

export default JoinUsForm;
