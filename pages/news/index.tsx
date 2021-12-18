import React from "react";
import { Article } from "../../components/Article";
import { ContentfulRichText } from "../../components/ContentfulRichText";
import Layout from "../../components/Layout";
import {
  fetchAllNewsArticles,
  fetchNewsPageData,
} from "../../services/api/news";
import { NewsArticleCollection } from "../../types/AllNewsArticles";
import { NewsScreen } from "../../types/NewsPage";

interface Props {
  data: NewsArticleCollection;
  pageData: NewsScreen;
}

const index = ({ data, pageData }: Props) => {
  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
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
            {data.items.map((article) => (
              <Article data={article} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params, preview }) {
  const articles = await fetchAllNewsArticles(preview);
  const pageData = await fetchNewsPageData(preview);

  return {
    props: {
      data: articles,
      pageData,
    },
  };
}

export default index;
