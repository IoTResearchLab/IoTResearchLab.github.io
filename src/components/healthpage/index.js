import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: <a href="docs/intro">IOT in Health Care</a>,
    imgSrc: '/img/health.webp',
    description: (
      <>
Healthcare is shifting towards preventive care, but heart care management is overlooked by both wellness and MedTech companies. With widespread digital connectivity, there's a significant opportunity for connected health devices and remote patient monitoring to fill this gap. This can enhance heart care management and integrate it into the broader preventive care landscape.      </>
    ),
  },
  {
    title: <a href="docs/intro">IoT-driven Traffic Management: Enhancing Urban Mobility with Smart Solutions</a>,
    imgSrc: '/img/smart-city.webp', // Use relative path here
    description: (
      <>
        Addresses the challenges of maintaining user privacy amidst the proliferation of interconnected devices, emphasizing strategies and technologies to secure personal data and communications in IoT environments.
      </>
    ),
  },
  {
    title: <a href="docs/intro">IoT Infrastructure and Applications</a>,
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


export default function healthpage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.text}>Research Fields</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
