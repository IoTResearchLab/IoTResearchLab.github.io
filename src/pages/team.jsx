import React, { useEffect, useState } from 'react';
import styles from './team.module.css';
import Layout from '@theme/Layout';
import { RingLoader } from 'react-spinners';

const Team = () => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://iot-backend-server-sparkling-sun-1719.fly.dev/Team');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Group team members by type, defaulting to 'No Type' for empty types
        const classifiedTeam = data.reduce((acc, member) => {
          const { type = 'No Type' } = member;
          if (!acc[type]) acc[type] = [];
          acc[type].push(member);
          return acc;
        }, {});

        setTeam(classifiedTeam);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RingLoader color="#00427c" size={150} loading={loading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Object.keys(team).length) {
    return <div>No team members found.</div>;
  }

  // Sort the keys so empty strings and 'No Type' appear first
  const sortedKeys = Object.keys(team).sort((a, b) => {
    if (a === 'No Type' || a === '') return -1;
    if (b === 'No Type' || b === '') return 1;
    return a.localeCompare(b); // Sort alphabetically for other types
  });

  return (
    <main>
      <Layout>
        <div className="container">
          <div className={styles.customHeader}>Meet Our Team</div>
          {sortedKeys.map((type) => (
            <div key={type} className={styles.typeSection}>
              {type !== 'No Type' && <div className={styles.typeHeader}>{type}</div>}
              {team[type].map((member, index) => (
                <div key={index} className={styles.teamMember}>
                  <div className={styles.imageContainer}>
                    <img src={member.image} alt={member.name} className={styles.teamImage} />
                  </div>
                  <div className={styles.infoContainer}>
                    <div className={styles.customName}>
                      {member.personalLink ? (
                        <a href={member.personalLink} target="_blank" rel="noopener noreferrer" className={styles.customName}>
                          {member.name}
                        </a>
                      ) : (
                        member.name
                      )}
                    </div>
                    <div className={styles.customPosition}>{member.position}</div>
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

export default Team;
