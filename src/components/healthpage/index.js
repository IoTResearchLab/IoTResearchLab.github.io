import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: <a href="/XBeats-A-Smart-ECG-Monitoring-Platform">XBeats,A Smart ECG Monitoring Platform</a>,
    imgSrc: '/img/project5.gif',
    description: (
      <>
      </>
    ),
  },
  {
    title: <a href="/Responding-to-Agitation-Agression-in-Dementia">Responding to Agitation/Agression in Dementia</a>,
    imgSrc: '/img/project9.jpeg',
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
