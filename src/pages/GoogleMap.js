import React from 'react';
import './GoogleMap.css'; // Import the CSS file

const GoogleMap = () => {
  return (
    <div className="map-container">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.2707314151485!2d-78.89957511394583!3d43.94774681464296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51b9135e4e4b3%3A0x988c862a1eee1d29!2sSoftware%20and%20Informatics%20Research%20Centre%20(SIRC)!5e0!3m2!1sen!2sca!4v1720985320043!5m2!1sen!2sca" width="600" height="450"     style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    </div>
  );
};

export default GoogleMap;
