import Layout from "@theme/Layout";
import React from "react";
const MyCustomPage = (props) => {
  const customData = props.route.customData;
  return (
    <Layout>
      // this will show the text "data" on the page
      <h1>{customData.some}</h1>
    </Layout>
  );
};

export default MyCustomPage;