import Layout from "@theme/Layout";
import React from "react";

const ProjectPage = (props) => {

  const { customData = {} } = props.route || {};
  const { title = 'Default Title', content = 'Default Content', img = '/default.png' } = customData;

  return (
    <Layout>
      <main>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img} alt={title} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      </div>
      </main>
    </Layout>
  );
};

export default ProjectPage;
