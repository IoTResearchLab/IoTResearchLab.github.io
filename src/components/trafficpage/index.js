import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/Road-Detection-Improvements-Of-Autnomos-Vechiles">Road Detection Improvements Of Autnomos Vechiles</a>,
    imgSrc: '/img/project11.gif', // Use relative path here
    description: (
      <>
      </>
    ),
    
  },
  {
    title: 'Smart Intersictions, Making Our Roads Safer',
    imgSrc: '/img/project8.jpeg', // Use relative path here
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/Real-Time-Traffic-Analytics-From-live-Camera-Feeds">Real-Time Traffic Analytics From live Camera Feeds</a>,
    imgSrc: '/img/project10.gif', // Use relative path here
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/Smart-Roads-and-Traffic-Prediction">Smart Roads and Traffic Prediction</a>,
    imgSrc: '/img/project7.jpeg', // Use relative path here
    description: (
      <>
      </>
    ),
  },
  {
    title: <a style={{  color: 'var(--custom-header-color)'}} href="/RegTraffic-A-Regression-based-Traffic-Simulator">RegTraffic: A Regression based Traffic Simulator</a>,
    imgSrc: '/img/project12.png', // Use relative path here
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
