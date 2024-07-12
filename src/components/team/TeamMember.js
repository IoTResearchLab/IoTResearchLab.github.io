import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, image }) => {
  const roleLines = role.split('\n');
  return (
    <div className="team-member">
      <img src={image} alt={`${name}'s profile`} />
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
