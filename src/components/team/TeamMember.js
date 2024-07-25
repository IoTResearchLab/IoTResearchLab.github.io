import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, image, isFirstMember }) => {
  const roleLines = role.split('\n');
  return (
  
    <div className={`team-member ${isFirstMember ? 'first-member' : ''}`}>
      <img src={image} alt={`${name}'s profile`} className={isFirstMember ? 'first-member-image' : ''} />
      <h3>{name}</h3>
      <p>
        {roleLines.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div> 
  
  );
};

export default TeamMember;
