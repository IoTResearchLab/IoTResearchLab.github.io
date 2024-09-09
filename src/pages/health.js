import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/healthpage';

import Heading from '@theme/Heading';
import styles from './health.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {customFields}= siteConfig;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <div className={clsx('customheader', styles.customheader)}>

        {customFields.healthTitle}
        </div>
            <div className={clsx('customTagline', styles.customTagline)}>
        {siteConfig.tagline}</div>
  
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
