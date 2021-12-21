import React from "react";
import { NewsSection } from "../types/HomePage";
import { Article } from "./Article";

interface Props {
  data: NewsSection;
}

const BlogSection = ({ data }: Props) => {
  return (
    <div className="relative bg-green-700 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {data?.sectionHeader}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {data?.sectionText?.json.content.map((item) =>
              item.content.map((item) => item.value)
            )}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data?.latestPostsCollection?.items?.map((post) => (
            <Article data={post} key={post.sys.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
