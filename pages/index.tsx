import React from "react";
import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import { MeetSheep } from "../components/MeetSheep";
import { fetchHomePage } from "../services/api/homepage";
import { HomePageClass } from "../types/HomePage";

interface Props {
  data: HomePageClass;
}

const index = ({ data }: Props) => {
  return (
    <Layout>
      <Banner data={data.bannerSection} />
      <MeetSheep data={data.sheepProfilesSection} />
      <BlogSection data={data.newsSection} />
      <FAQ data={data.faqSection} />
      <Contact data={data.contactSection} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const data = await fetchHomePage(preview);

  return {
    props: {
      data,
    },
  };
}

export default index;
