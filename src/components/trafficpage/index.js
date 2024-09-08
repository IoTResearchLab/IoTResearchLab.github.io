import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { RingLoader } from 'react-spinners'; // Import the loader

// Static Feature List for Smart Mobility
const FeatureList = [
  {
    title: <a style={{ color: 'var(--custom-header-color)' }} href="/Road-Detection-Improvements-Of-Autnomos-Vechiles">Road Detection Improvements Of Autonomous Vehicles</a>,
    imgSrc: '/img/project11.gif', // Use relative path here
    description: <></>,
  },
  {
    title: 'Smart Intersections, Making Our Roads Safer',
    imgSrc: '/img/project8.jpeg', // Use relative path here
    description: <></>,
  },
  {
    title: <a style={{ color: 'var(--custom-header-color)' }} href="/Real-Time-Traffic-Analytics-From-live-Camera-Feeds">Real-Time Traffic Analytics From Live Camera Feeds</a>,
    imgSrc: '/img/project10.gif', // Use relative path here
    description: <></>,
  },
  {
    title: <a style={{ color: 'var(--custom-header-color)' }} href="/Smart-Roads-and-Traffic-Prediction">Smart Roads and Traffic Prediction</a>,
    imgSrc: '/img/project7.jpeg', // Use relative path here
    description: <></>,
  },
];

// Feature Component
function Feature({ imgSrc, title, description }) {
  const resolvedImgSrc = useBaseUrl(imgSrc);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={resolvedImgSrc} className={styles.featureImg} alt="Feature" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.title}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [dynamicFeatures, setDynamicFeatures] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch the projects from the API
    async function fetchProjects() {
      try {
        const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/projects'); // Adjust the endpoint if needed
        const projects = await response.json();

        // Filter the projects by 'type' field to only include 'smart mobility' projects
        const smartMobilityProjects = projects.filter(project => project.type === 'smart mobility');

        // Transform the projects to fit the FeatureList structure
        const dynamicData = smartMobilityProjects.map((project) => ({
          title: <a style={{ color: 'var(--custom-header-color)' }} href={`/${project.slug}`}>{project.projectName}</a>,
          imgSrc: project.imgSrc || '/img/default.jpg', // Use a default image if imgSrc is missing
          description: <></>, // Add description if needed
        }));

        setDynamicFeatures(dynamicData);
      } catch (error) {
        console.error('Error fetching dynamic features:', error);
      } finally {
        setLoading(false); // Stop loading when the fetch completes
      }
    }

    fetchProjects();
  }, []);

  // Combine static and dynamic features
  const allFeatures = [...FeatureList, ...dynamicFeatures];

  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.text}>Field Projects</h1>
        {loading ? ( // Conditional rendering based on loading state
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RingLoader color="#00427c" size={150} loading={loading} />
          </div>
        ) : (
          <div className="row">
            {allFeatures.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
