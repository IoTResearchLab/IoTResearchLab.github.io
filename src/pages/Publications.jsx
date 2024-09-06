import React, { useEffect, useState } from 'react';
import styles from './publications.module.css'; // Importing the CSS module correctly
import Layout from '@theme/Layout';
import { RingLoader } from 'react-spinners';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPublications = async () => {
      try {
        const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/publications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPublications(data.map(pub => ({
          ...pub,
          publisher: pub.publisher || pub.journal
        })));
        setError(null);
      } catch (err) {
        setError('Failed to fetch publications: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
    
  }, []);

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RingLoader color="#00427c" size={150} loading={loading} />
    </div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  const groupedPublications = publications.reduce((acc, publication) => {
    const year = publication.year || 'Undated';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedPublications).sort((a, b) => {
    if (a === 'Undated') return 1;
    if (b === 'Undated') return -1;
    return b.localeCompare(a);
  });

  return (
    <main>
      <Layout>
        <div className={styles.container}>
          {sortedYears.map(year => (
            <div key={year} className={styles.yearSection}>
              <h1 className={styles.yearTitle}>{year === 'Undated' ? 'Other Publications' : `${year} Publications`}</h1>
              {groupedPublications[year].map(pub => (
                <div key={pub._id} className={styles.publicationItem}>
                  <div className={styles.publicationInfo}>
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.publicationTitle}>
                      {pub.title}
                    </a>
                    <div className={styles.publicationItem}>Authors: {pub.authors}.</div>
                    <div className={styles.publicationItem2}>{pub.publisher}</div>

                  </div>
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
