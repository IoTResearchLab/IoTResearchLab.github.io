import React, { useEffect, useState } from 'react';
import styles from './publications.module.css';
import Layout from '@theme/Layout';


const Publications = () => {
  const [publications, setPublications] = useState([]);
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
        setPublications(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!publications || publications.length === 0) {
    return <div>No publications found.</div>;
  }

  return (
    <main>
    <Layout>
     
      <div className='container'>
    <div style={{ color: '#00427c' }}>
      <h1>2023 Journal Papers</h1>
      <br />
      <br />
      {publications.map((publication, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', paddingBottom: '20px' }}>
          <div style={{ flex: 9 }}>
            <h2>{publication.title}</h2>
            <p>{publication.authors} <em>{publication.journal}, {publication.year}</em></p>
          </div>
          <div style={{ flex: 3, textAlign: 'right' }}>
            <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
              <img src="/img/pdf.png" alt="PDF" className={styles['pdf-icon']} />
            </a>
          </div>
        </div>
      ))}
    </div></div>
    </Layout>
</main>
  );
};

export default Publications;
