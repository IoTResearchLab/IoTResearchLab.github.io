import React from 'react';
import './Researchprojects.css';
import logo from './our-projects-logo.png'; // Ensure this path is correct

// Import image paths for each project
import project1 from './project1.png';
import project2 from './project2.jpeg';
import project3 from './project3.jpeg';
import project4 from './project4.jpeg';
import project5 from './project5.gif';
import project6 from './project6.gif';
import project7 from './project7.jpeg';
import project8 from './project8.jpeg';
import project9 from './project9.jpeg';
import project10 from './project10.gif';
import project11 from './project11.gif';
import project12 from './project12.png';
import project13 from './project13.png';
import project14 from './project14.gif';

const projects = [
  { title: 'Road Detection Improvements Of Autnomos Vechiles', description: 'Description for project eleven.', image: project11 },
  { title: 'Phone Of Things', description: 'Description for project thirteen.', image: project13 },
  { title: 'Smart Intersictions, Making Our Roads Safer ', description: 'Description for project eight.', image: project8 },

  { title: 'Real-Time Traffic Analytics From live Camera Feeds ', description: 'Description for project ten.', image: project10 },
  { title: 'Violent and Suspicious Events Detection System', description: 'Description for project fourteen.', image: project14 },

  { title: 'Protecting User Privacy in the Connected world', description: 'Description for project two.', image: project2 },
  { title: '[ARC] Building IoT infrastructure', description: 'Description for project one.', image: project1 },

  { title: '[ARC] Dynamic Access Control in IoT Scenarios', description: 'Description for project three.', image: project3 },
  { title: 'On-Demand Sensing For Smart City Services', description: 'Description for project four.', image: project4 },
  { title: 'XBeats,A Smart ECG Monitoring Platform', description: 'Description for project five.', image: project5 },
  { title: 'Farming Like Never: Yield Estimation and Visualization for Precision Agriculture', description: 'Description for project six.', image: project6 },
  { title: 'Smart Roads and Traffic Prediction', description: 'Description for project seven.', image: project7 },
  { title: 'Responding to Agitation/Agression in Dementia', description: 'Description for project nine.', image: project9 },
  { title: 'RegTraffic: A Regression based Traffic Simulator ', description: 'Description for project twelve.', image: project12 },
  // Add more projects as needed
];

const ResearchProjects = () => {
  return (
    <div className="research-projects">
      <h1 className="text">Current Research Projects</h1>
      <img src={logo} alt="Logo" className="logo" />
      <p>Our research realizes the full potential of the internet of things to enable smart interactions and change the way people interact with their surroundings to live smarter, safer, and more productive lives. Our current focus is on creating the required infrastructure support and developing necessary mechanisms to enable on-demand sensing for both the general public and controlled IoT deployments.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
