import React, { useEffect, useState } from 'react';
import './Researchprojects.css';
import logo from '../../../static/img/our-projects-logo.png'; 

import project1 from '../../../static/img/project1.png';
import project3 from '../../../static/img/project3.jpeg';
import project5 from '../../../static/img/project5.gif';
import project7 from '../../../static/img/project7.jpeg';
import project8 from '../../../static/img/project8.jpeg';
import project9 from '../../../static/img/project9.jpeg';
import project10 from '../../../static/img/project10.gif';
import project11 from '../../../static/img/project11.gif';

// Static project list
const staticProjects = [
  { title: 'Road Detection Improvements Of Autnomos Vechiles', description: '', image: project11, link: '/Road-Detection-Improvements-Of-Autnomos-Vechiles' },
  { title: 'Smart Intersictions, Making Our Roads Safer ', description: '', image: project8, link: '' },
  { title: 'Real-Time Traffic Analytics From live Camera Feeds ', description: '', image: project10, link: '/Real-Time-Traffic-Analytics-From-live-Camera-Feeds' },
  { title: '[ARC] Building IoT infrastructure', description: '', image: project1, link: '' },
  { title: '[ARC] Dynamic Access Control in IoT Scenarios', description: '', image: project3, link: '' },
  { title: 'XBeats,A Smart ECG Monitoring Platform', description: '', image: project5, link: '/XBeats-A-Smart-ECG-Monitoring-Platform' },
  { title: 'Smart Roads and Traffic Prediction', description: '', image: project7, link: '/Smart-Roads-and-Traffic-Prediction' },
  { title: 'Responding to Agitation/Agression in Dementia', description: '', image: project9, link: '/Responding-to-Agitation-Agression-in-Dementia' },
];

const ResearchProjects = () => {
  const [dynamicProjects, setDynamicProjects] = useState([]);

  // Fetch dynamic projects from the backend
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/projects'); // Adjust endpoint if necessary
        const projects = await response.json();

        // Transform the dynamic projects to match the structure for displaying
        const dynamicData = projects.map(project => ({
          title: project.projectName,  // Using projectName from the backend
          image: project.imgSrc || '/img/default.jpg', // Use a default image if imgSrc is missing
          link: `/${project.slug}` // Use the slug for the link
        }));

        setDynamicProjects(dynamicData);
      } catch (error) {
        console.error('Error fetching dynamic projects:', error);
      }
    }

    fetchProjects();
  }, []);

  // Combine static and dynamic projects
  const allProjects = [...staticProjects, ...dynamicProjects];

  return (
    <div className="research-projects">
      <h1 className="text">Current Research Projects</h1>
      <img src={logo} alt="Logo" className="logo" />
      <p>Our research realizes the full potential of the internet of things to enable smart interactions and change the way people interact with their surroundings to live smarter, safer, and more productive lives. Our current focus is on creating the required infrastructure support and developing necessary mechanisms to enable on-demand sensing for both the general public and controlled IoT deployments.</p>
      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3><a className='text' href={project.link}>{project.title}</a></h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
