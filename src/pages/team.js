import React from 'react';
import Layout from '@theme/Layout';
import TeamMember from '../components/team/TeamMember';
import './team.css';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Project Manager',
    image: '/img/photo.jpeg', // Make sure this path is correct and the image exists
  },
  {
    name: 'Jane Smith',
    role: 'Developer',
    image: '/img/photo.jpeg',
  },
  // Add more team members here
];

const TeamPage = () => {
  return (
    <Layout title="Our Team">
      <div className="team-page">
        <h1 className='text2'>Meet Our Team</h1>
        <h2 className='text2'>Affiliate Scholars</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
