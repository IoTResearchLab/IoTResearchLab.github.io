import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/phone-of-things">Phone Of Things</a>,
    imgSrc: '/img/project13.png',
    description: (
      <>
      </>
    ),
  },
  {
    title: <a  style={{  color: 'var(--custom-header-color)'}} href="/Violent-and-Suspicious-Events-Detection-System">Violent and Suspicious Events Detection System</a>,
    imgSrc: '/img/project14.gif',
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/protecting-user-privacy-in-the-connected-world">Protecting User Privacy in the Connected world</a>,
    imgSrc: '/img/project2.jpeg',
    description: (
      <>
      </>
    ),
  },
  {
    title: '[ARC] Building IoT infrastructure',
    imgSrc: '/img/project1.png',
    description: (
      <>
      </>
    ),
  },
  {
    title:'[ARC] Dynamic Access Control in IoT Scenarios',
    imgSrc: '/img/project3.jpeg',
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}}href="/On-Demand-Sensing-For-Smart-City-Services">On-Demand Sensing For Smart City Services</a>,
    imgSrc: '/img/project4.jpeg',
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/farming-like-never-yield-estimation-and-visualization-for-precision-agriculture">Farming Like Never: Yield Estimation and Visualization for Precision Agriculture</a>,
    imgSrc: '/img/project6.gif',
    description: (
      <>
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
        <Heading as="h3" className={styles.title}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.text}>Field Projects</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
