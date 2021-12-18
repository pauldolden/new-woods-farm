import React from "react";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

interface Props {}

const contact = (props: Props) => {
  return (
    <Layout>
      <Contact data={null} />
    </Layout>
  );
};

export default contact;
