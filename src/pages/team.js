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
  {
    name: 'Dr. Hatem Abou-zeid',
    role: 'Adjunct Assistant Professor at Ontario Tech University\nAssistant Professor, University of Calgary \nExpertise: Radio resource algorithm designs and intellectual property development in the areas of network intelligence and low latency communications',
    image: '/img/dr.hatem.jpeg',
  },
  {
    name: 'Dr. Abdulmonem Rashwan',
    role: 'Collaborative Professor\nExpertise: Industrial Internet-of-Things and the next generation of computing networks',
    image: '/img/dr.abdulmonem.png',
  },  {
    name: 'Ghadeer Abdelkader',
    role: 'joined since 2019\nThesis Theme: Connected and Automated Vehicles, VRUs Intent Prediction, Smart Mobility, IoT in Transportation',
    image: '/img/ghadeer.jpeg',
  },  {
    name: 'Abeer Badawi',
    role: 'Ph.D. Student, Since 2020\nThesis Theme: Artificial Intelligence, Big Data, Data Mining, and IoT in healthcare.',
    image: '/img/abeer.jpeg',
  },  {
    name: 'Abdelrahman Elewah',
    role: 'Ph.D. Student, Since 2021\nThesis Theme: Artificial Intelligence and Public sensing.',
    image: '/img/abdelrahman.jpeg',
  },  {
    name: 'Sifatul Mustafi',
    role: 'Joined Ph.D., Since 2022\n Masters : 2022 OntarioTechU, Canada\nThesis Theme: Machine learning algorithms on real-time IoT data to address \nthe traffic congestion problem',
    image: '/img/sifatul.jpeg',
  },  {
    name: 'Hebatallah Ouda',
    role: 'Joined Ph.D , Since 2022\nThesis Theme:  Internet of Things, ​Cloud Computing, Machine Learning, ​Edge Computing, Big Data',
    image: '/img/hebatallah.jpeg',
  },
    {
    name: 'Ammar Elmoghazy',
    role: 'Masters Student, Since 2022\nThesis Theme:  Autonmous Vechiles and V2X communications.\n\n\n',
    image: '/img/ammar.jpeg',
  },
    {
    name: 'Hossam Tarek',
    role: 'Masters Student, Since 2022\nThesis Theme:  Software Systems',
    image: '/img/hossam.jpeg',
  },
    {
    name: 'Somayya Elmoghazy',
    role: 'Joined Ph.D., Since 2022\nThesis Theme:  Artificial Intelligence and Machine Learning in IoT.',
    image: '/img/somayya.jpeg',
  },
  {
    name: 'Haytham Mohamed Abdelaal',
    role: 'PhD 2023, OntarioTechU, Canada\nThesis Theme: Phone of Things (PoT) - Bridging IoT and VoIP technologies for seamless IoT interaction and ambient-aware telephony solutions',
    image: '/img/haytham.jpeg',
  },{
    name: 'Ahmad Mousa',
    role: 'Masters: 2023, OntarioTechU, Canada\n​Thesis Theme:  Healthcare​',
    image: '/img/ahmed-musa.jpeg',
  },{
    name: 'Ahmed Elgazwy',
    role: 'Master: 2023, OntarioTechU, Canada\nThesis Theme:  Artificial Intelligence, and IoT in Healthcare.\nCurrent Job: Teaching Assistant, Ain Shams University, Egypt​',
    image: '/img/ahmed-elgazwy.jpeg',
  },{
    name: 'Taghreed Alghamdi',
    role: 'PhD 2023, OntarioTechU, Canada\nThesis Theme: Leveraging IoT to Provide Realiable Smart City Services\nCurrent Job: Assistant Proffesor, Baha University, Saudi Arabia ​',
    image: '/img/taghreed.png',
  },{
    name: 'Ahmed Badr',
    role: 'PhD 2022, OntarioTechU, Canada\nThesis Theme: IoT in Healthcare, Hardware Prototyping,System Design and Real-time data analytics.\nCurrent Job: Lead Software Engineer, NSI',
    image: '/img/ahmed-badr.jpeg',
  },{
    name: 'Dr. Sittichai Sukreep',
    role: 'Research fellow 2021, OntarioTechU, Canada\nThesis Theme: AI, machine learning, real-time data analysis ',
    image: '/img/dr.sittichai.jpeg',
  },{
    name: 'Reed Dennis',
    role: 'Masters: 2022, OntarioTechU, Canada\nThesis Theme:  Real-time Traffic Monitoring and Intelligent Decision Support ',
    image: '/img/reed.jpeg',
  },{
    name: 'Dipkumar Patel',
    role: 'Masters :2022, OntarioTechU, Canada\nThesis Theme: Improving ADAS technologies to achieve better autonomy\nCurrent Job: Senior Data Scientist, Sanofi​',
    image: '/img/dipkumar.jpeg',
  },{
    name: 'Youssef Osman',
    role: 'Master: 2021, OntarioTechU, Canada\nThesis Theme:  Data Analytics for Smart Farming, computer vision, data engineering\nCurrent Job: Data Scientist, TD Canada Trust',
    image: '/img/youssef-osman.png',
  },{
    name: 'Sayani Sarkar',
    role: 'PhD, UL Lafayette, USA\nThesis: Intelligent Energy-Efficient Drones: Path Planning, Real-Time Monitoring, and Decision-Making.\nCurrent Job: Assistant Professor at Bellarmine University, Louisville, Ky, USA',
    image: '/img/sayani.webp',
  },{
    name: 'Dr. Ashraf Alkhresheh ',
    role: 'PhD 2019, Queen School of Computing\nThesis: Dynamic Access Control in IoT Environments\nCurrent Job: Assistant Professor at Tafila Technical University, Jordan',
    image: '/img/dr.ashraf.png',
  },{
    name: 'Rizwan Merchant',
    role: 'Masters: 2019, UL Lafayette, USA\nThesis: Cyber and Physical Security of EV Charging Stations\nCurrent Job: Systems Safety Engineer at SAIC, Lafayette, LA, USA',
    image: '/img/rizwan.jpeg',
  },{
    name: 'Youssef Tarek',
    role: 'Software Engineering\nAlamein international University',
    image: '/img/youssef-tarek.jpeg',
  },
  {
    name: 'Ahmed Shokr',
    role: 'Software Engineering\nAlamein international University',
    image: '/img/ahmed-shokr.jpeg',
  },
];

const alumniStartIndex = 12; 
const internStartIndex = 24; 
const TeamPage = () => {
  const renderTeamMembersWithHeaders = (members) => {
    const elements = [];
    members.forEach((member, index) => {
      if (index === alumniStartIndex) {
        elements.push(<h1 key="alumni-title" className="section-title">Alumni</h1>);
      }
      if (index === internStartIndex) {
        elements.push(<h1 key="intern-title" className="section-title">Interns</h1>);
      }
     
      elements.push(
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
        />
      );
    });
    return elements;
  };

  return (
    <Layout title="Our Team">
      <div className="team-page">
        <h1 className="text2">Meet Our Team</h1>
        <div className="team-first-member">
      
          <TeamMember
            name={teamMembers[0].name}
            role={teamMembers[0].role}
            image={teamMembers[0].image}
            isFirstMember={true}
          />
        </div>
        <h1 className="text2">Affiliate Scholars</h1>
        <div className="team-members">
          {renderTeamMembersWithHeaders(teamMembers.slice(1))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
