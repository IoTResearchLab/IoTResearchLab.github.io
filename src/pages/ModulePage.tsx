import Layout from "@theme/Layout";
import React from "react";

const MyCustomPage = (props) => {
  // Ensure customData is defined and properly accessed
  const customData = props.route?.customData || {};

  return (
    <Layout>
      {/* Render a default message if customData.some is undefined */}
      <h1>{customData.some || 'Default Data'}</h1>
    </Layout>
  );
};

export default MyCustomPage;
