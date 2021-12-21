import React from "react";
import Contact from "../components/Contact";
import { ContentfulRichText } from "../components/ContentfulRichText";
import Layout from "../components/Layout";
import {
  fetchContactForm,
  fetchContactPageData,
} from "../services/api/contact";
import { ContactSection } from "../types/ContactForm";
import { ContactPageClass } from "../types/ContactPage";

interface Props {
  data: ContactSection;
  pageData: ContactPageClass;
}

const contact = ({ data, pageData }: Props) => {
  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 h-full">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {pageData.pageTitle}
            </h2>
            <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              <ContentfulRichText data={pageData.pageContent.json} />
            </div>
          </div>

          {/* @ts-ignore */}
          <Contact data={data} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params, preview }) {
  const formData = await fetchContactForm(preview);
  const pageData = await fetchContactPageData(preview);

  return {
    props: {
      data: formData,
      pageData,
    },
  };
}

export default contact;
