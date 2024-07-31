// src/pages/ProjectPage.jsx
import React from 'react';
import Layout from '@theme/Layout';
import './ProjectPage.css'; 

const ProjectPage = (props) => {
  const { customData } = props;

  console.log('customData:', customData);
  if (!customData) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, introduction, paragraphs, publications } = customData;

  return (
    <main>
    <Layout title={title}>
      <div className="project-page-container">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{introduction}</p>
        <hr style={{ margin: '2rem 0' }} />

        {paragraphs.map((paragraph, index) => (
          <div key={index}>
              {paragraph.title && <h3>{paragraph.title}</h3>}
            <div className="paragraph-container">
            {paragraph.paragraph && <p>{paragraph.paragraph}</p>}
            {paragraph.img && <img src={paragraph.img} alt={paragraph.title} />}
            
            </div>
            <hr style={{ margin: '2rem 0' }} />
          </div>
        ))}
        {publications.length > 0 && (
          <div>
            <h3>Publications</h3>
            <ul>
              {publications.map((publication, index) => (
                <li key={index}>
                  <a href={publication.url} target="_blank" rel="noopener noreferrer">
                    {publication.title}
                  </a>
                  <br/>
                  <pub1>{publication.authors}</pub1>
                  <br/>
                  <publ>{publication.date}</publ>
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
/* {paragraphs.map((paragraph, index) => (
          <div key={index}>
            {paragraph.title && <h3>{paragraph.title}</h3>}
            <p>{paragraph.paragraph}</p>
            {paragraph.img && <img src={paragraph.img} alt={paragraph.title} style={{ maxWidth: '100%' }} />}
            <hr style={{ margin: '2rem 0' }} />
          </div>
        ))}*/