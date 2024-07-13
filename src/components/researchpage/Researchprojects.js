import React from 'react';
import './Researchprojects.css';
import logo from './our-projects-logo.png';

// Import image paths for each project
import project1 from './project1.png';
import project2 from './project2.jpeg';
import project3 from './project3.jpeg';
import project4 from './project4.jpeg';

const projects = [
  { title: 'Project One', description: 'Description for project one.', image: project1 },
  { title: 'Project Two', description: 'Description for project two.', image: project2 },
  { title: 'Project Three', description: 'Description for project three.', image: project3 },
  { title: 'Project Four', description: 'Description for project four.', image: project4 },
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
