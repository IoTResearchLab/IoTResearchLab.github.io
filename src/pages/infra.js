import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/infrapage';

import Heading from '@theme/Heading';
import styles from './infra.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {customFields}= siteConfig;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <div className={clsx('customheader', styles.customheader)}>
        {customFields.infraTitle}
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
      title={`${siteConfig.infratitle}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
