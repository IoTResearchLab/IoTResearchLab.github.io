import React from 'react';
import Layout from '@theme/Layout';
import TeamMember from '../components/team/TeamMember';
import './team.css';

const teamMembers = [
  {
    name: 'Prof. Khalid Elgazar',
    role: 'Director and Principal Investigator',
    image: '/img/dr.khaled.jpeg',
  },
  {
    name: 'Dr. Alaa Khamis',
    role: 'Adjunct Professor at Ontario Tech University\nSmart Mobility Technical Leader at General Motors\nExpertise: Smart mobility, autonomous and connected vehicles, cognitive IoT, algorithmic robotics, humanitarian robotics, intelligent data processing and analysis, machine learning',
    image: '/img/dr.alaa.jpeg',
  },
  {
    name: 'Dr. Sanaa Alwidian',
    role: 'Affiliate Faculty\nCollaborative researcher at Ontario Tech University',
    image: '/img/dr.sanaa.jpeg',
  },
  // Add more team members here
];

const TeamPage = () => {
  return (
    <Layout title="Our Team">
      <div className="team-page">
        <h1 className="text2">Meet Our Team</h1>
        <div className="team-first-member">
          <TeamMember
            name={teamMembers[0].name}
            role={teamMembers[0].role}
            image={teamMembers[0].image}
          />
        </div>
        <h1 className="text2">Affiliate Scholars</h1>
        <div className="team-members">
          {teamMembers.slice(1).map((member, index) => (
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
