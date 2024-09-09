import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import './ProjectPage.css'; 

const backendServerUri = 'https://iot-backend-server-sparkling-sun-1719.fly.dev/projects';

const ProjectPage = (props) => {
  const { customData, match } = props;
  const [pageData, setPageData] = useState(customData || null); // Start with customData if available
  const [loading, setLoading] = useState(!customData); // Set loading state only if customData isn't provided

  const slug = match?.params?.slug; // Get the slug from the route params if available

  useEffect(() => {
    if (!customData && slug) { // Fetch data only if it's not provided as props
      const fetchData = async () => {
        try {
          const response = await fetch(`${backendServerUri}/${slug}`);
          const data = await response.json();
          setPageData(data);
        } catch (error) {
          console.error('Error fetching project data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [slug, customData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <div>No data found for this project.</div>;
  }

  const { title, subtitle, introduction, paragraphs, publications } = pageData;

  return (
    <main>
      <Layout title={title}>
        <div className="project-page-container">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          <p>{introduction}</p>
          <hr style={{ margin: '2rem 0' }} />

          {Array.isArray(paragraphs) && paragraphs.map((paragraph, index) => (
            <div key={index}>
              {paragraph.title && <h3>{paragraph.title}</h3>}
              <div className="paragraph-container">
                {paragraph.paragraph && <p>{paragraph.paragraph}</p>}
                {paragraph.img && <img src={paragraph.img} alt={paragraph.title} />}
              </div>
              <hr style={{ margin: '2rem 0' }} />
            </div>
          ))}

{Array.isArray(publications) && publications.length > 0 && 
  publications.some(publication => publication.title || publication.url || publication.authors || publication.date) && (
    <div>
      <h3>Publications</h3>
      <ul>
        {publications
          .filter(publication => publication.title || publication.url || publication.authors || publication.date)
          .map((publication, index) => (
            <li key={index}>
              {publication.url ? (
                <div>
                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                  {publication.title || "Untitled"}
                </a></div>
              ) : (
                <div className='publicationtit'>{publication.title || "Untitled"}</div>
              )}
              <span className="pub1">{publication.authors }</span>
              <br />
              <span className="publ">{publication.date }</span>
            </li>
          ))}
      </ul>
    </div>
)}

        </div>
      </Layout>
    </main>
  );
};

export default ProjectPage;
