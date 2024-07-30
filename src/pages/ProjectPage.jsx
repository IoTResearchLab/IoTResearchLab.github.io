// src/pages/ProjectPage.jsx
import React from 'react';
import Layout from '@theme/Layout';
import './ProjectPage.css'; // Import the stylesheet

const ProjectPage = (props) => {
  const { customData } = props;

  console.log('customData:', customData); // Debug log

  if (!customData) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, introduction, paragraphs, publications } = customData;

  return (
    <Layout title={title}>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{introduction}</p>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            {paragraph.title && <h3>{paragraph.title}</h3>}
            <p>{paragraph.paragraph}</p>
            {paragraph.img && <img src={paragraph.img} alt={paragraph.title} style={{ maxWidth: '100%' }} />}
            <hr style={{ margin: '2rem 0' }} />
          </div>
        ))}
        {publications.length > 0 && (
          <div>
            <h2>Publications</h2>
            <ul>
              {publications.map((publication, index) => (
                <li key={index}>
                  <a href={publication.url} target="_blank" rel="noopener noreferrer">
                    {publication.title}
                  </a>
                  <p>Authors: {publication.authors}</p>
                  <p>Date: {publication.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectPage;
