import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default TeamMember;
