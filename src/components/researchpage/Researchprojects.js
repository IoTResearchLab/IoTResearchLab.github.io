import React from 'react';
import './Researchprojects.css';
import logo from '../../../static/img/our-projects-logo.png'; 

import project1 from '../../../static/img/project1.png';
import project2 from '../../../static/img/project2.jpeg';
import project3 from '../../../static/img/project3.jpeg';
import project4 from '../../../static/img/project4.jpeg';
import project5 from '../../../static/img/project5.gif';
import project6 from '../../../static/img/project6.gif';
import project7 from '../../../static/img/project7.jpeg';
import project8 from '../../../static/img/project8.jpeg';
import project9 from '../../../static/img/project9.jpeg';
import project10 from '../../../static/img/project10.gif';
import project11 from '../../../static/img/project11.gif';
import project12 from '../../../static/img/project12.png';
import project13 from '../../../static/img/project13.png';
import project14 from '../../../static/img/project14.gif';

const projects = [
  { title: 'Road Detection Improvements Of Autnomos Vechiles', description: '', image: project11, link: '/Road-Detection-Improvements-Of-Autnomos-Vechiles' },
  { title: 'Phone Of Things', description: '', image: project13, link: '/phone-of-things' },
  { title: 'Smart Intersictions, Making Our Roads Safer ', description: '', image: project8, link: '' },
  { title: 'Real-Time Traffic Analytics From live Camera Feeds ', description: '', image: project10, link: '/Real-Time-Traffic-Analytics-From-live-Camera-Feeds' },
  { title: 'Violent and Suspicious Events Detection System', description: '', image: project14, link: '/Violent-and-Suspicious-Events-Detection-System' },
  { title: 'Protecting User Privacy in the Connected world', description: '.', image: project2, link: '/protecting-user-privacy-in-the-connected-world' },
  { title: '[ARC] Building IoT infrastructure', description: '', image: project1, link: '' },
  { title: '[ARC] Dynamic Access Control in IoT Scenarios', description: '', image: project3, link: '' },
  { title: 'On-Demand Sensing For Smart City Services', description: '', image: project4, link: '/On-Demand-Sensing-For-Smart-City-Services' },
  { title: 'XBeats,A Smart ECG Monitoring Platform', description: '', image: project5, link: '/XBeats-A-Smart-ECG-Monitoring-Platform' },
  { title: 'Farming Like Never: Yield Estimation and Visualization for Precision Agriculture', description: '', image: project6, link: '/farming-like-never-yield-estimation-and-visualization-for-precision-agriculture' },
  { title: 'Smart Roads and Traffic Prediction', description: '', image: project7, link: '/Smart-Roads-and-Traffic-Prediction' },
  { title: 'Responding to Agitation/Agression in Dementia', description: '', image: project9, link: '/Responding-to-Agitation-Agression-in-Dementia' },
  { title: 'RegTraffic: A Regression based Traffic Simulator ', description: '', image: project12, link: '/RegTraffic-A-Regression-based-Traffic-Simulator' },
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
            <h3><a href={project.link}>{project.title}</a></h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
