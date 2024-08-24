import React, { useEffect, useState } from 'react';
import styles from './publications.module.css'; // External CSS file
import Layout from '@theme/Layout';
import Loading from './Loading';
import { RingLoader } from 'react-spinners';

const Publications = () => {
  const [publications, setPublications] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/publications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const classifiedPublications = data.reduce((acc, pub) => {
          const { year, type = 'Journal Papers' } = pub; // Default type to 'Journal Papers' if not specified
          if (!acc[year]) acc[year] = {};
          if (!acc[year][type]) acc[year][type] = [];
          acc[year][type].push(pub);
          return acc;
        }, {});

        setPublications(classifiedPublications);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <RingLoader color="#00427c" size={150} loading={loading} />
  </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Object.keys(publications).length) {
    return <div>No publications found.</div>;
  }

  return (
    <main>
      <Layout>
        <div className={styles.container}>
          {Object.keys(publications).map(year => (
            <div key={year} className={styles.yearSection}>
              <h1 className={styles.yearTitle}>{year} Publications</h1>
              <br/>
              {Object.keys(publications[year]).map(type => (
                <div key={type}>
                  <h2 className={styles.typeTitle}>{type}</h2>
                  {publications[year][type].map((publication, index) => (
                    <div key={index} className={styles.publicationItem}>
                      <div className={styles.publicationInfo}>
                        <h2 className={styles.publicationTitle}>{publication.title}</h2>
                        <p className={styles.publicationDetails}>
                          {publication.authors} <em>{publication.journal}, {publication.year}</em>
                        </p>
                      </div>
                      <div className={styles.pdfLink}>
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <img src="/img/pdf.png" alt="PDF" className={styles.pdfIcon} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default Publications;
