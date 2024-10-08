import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/traffic">Smart Mobility and Traffic Management</a>,
    imgSrc: '/img/smart-city.webp', // Use relative path here
    description: (
      <>
     We try to utilize IoT technology to enhance urban transportation systems. By integrating real-time data from sensors and devices, these systems optimize traffic flow, reduce congestion, and improve safety. Innovations like adaptive traffic signals and connected vehicles contribute to more efficient and sustainable urban mobility.
     </>
    ),
  },
  {
    title: <a  style={{  color: 'var(--custom-header-color)'}}href="/health">IoT in Health Care</a>,
    imgSrc: '/img/health.webp',
    description: (
      <>
        Healthcare is shifting towards preventive care, but heart care management is overlooked by both wellness and MedTech companies. With widespread digital connectivity, there's a significant opportunity for connected health devices and remote patient monitoring to fill this gap. This can enhance heart care management and integrate it into the broader preventive care landscape.
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/infra">IoT Infrastructure and Applications</a>,
    imgSrc: '/img/infra.webp',
    description: (
      <>
        Involves creating foundational networks and frameworks to support interconnected IoT devices and applications, ensuring reliable connectivity and efficient data management across various domains like smart cities, healthcare, and agriculture.
      </>
    ),
  },
];

function Feature({ Svg, imgSrc, title, description }) {
  const resolvedImgSrc = useBaseUrl(imgSrc);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : imgSrc ? (
          <img src={resolvedImgSrc} className={styles.featureImg} alt="Feature image" />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.text}>Research Fields</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{ clear: 'both', width: '100%', textAlign: 'center', marginTop: '40px' }}>
          <a href="/research" className={styles.customButton}>Research Projects</a>
        </div>
        <hr style={{ margin: '2rem 0' }} />
        <div className={styles.newSection}>
          <h1 className={styles.text2}>Our University</h1>
          <div className={styles.buildingSection}>
            <div className={styles.left}>
              <img src={useBaseUrl('/img/building.jpeg')} alt="Building" className={styles.buildingImage} />
            </div>
            <div className={styles.right}>
              <img src={useBaseUrl('/img/ontariotech.png')} alt="Ontario Tech University" className={styles.logo} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="https://ontariotechu.ca/" className={styles.customButton2}>About Ontario Tech University</a>
          </div>
        </div>
      </div>
    </section>
  );
}
