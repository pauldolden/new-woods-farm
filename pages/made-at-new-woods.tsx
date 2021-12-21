import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import { ContentfulRichText } from "../components/ContentfulRichText";
import { CraftedItem } from "../components/CraftedItem";
import Layout from "../components/Layout";
import { fetchCraftingPageData } from "../services/api/crafting";
import { CraftingPageClass } from "../types/CraftingPage";

interface Props {
  data: any[];
  pageData: CraftingPageClass;
}

const madeatnewwoods = ({ data, pageData }: Props) => {
  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 flex-1">
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
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {data.map((item) => (
              <CraftedItem data={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params, preview }) {
  const pageData = await fetchCraftingPageData(preview);

  return {
    props: {
      data: [],
      pageData,
    },
  };
}

export default madeatnewwoods;
