import { CameraIcon } from "@heroicons/react/outline";
import React from "react";
import { ContentfulRichText } from "../components/ContentfulRichText";
import Layout from "../components/Layout";
import {
  fetchContentPage,
  fetchContentPageSlugs,
} from "../services/api/contentPages";
import { ContentPageClass } from "../types/ContentPage";

interface Props {
  data: ContentPageClass;
}

const ContentPage = ({ data }: Props) => {
  return (
    <Layout>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {data.pageTitle}
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={data?.featureImage?.url}
                      alt={data?.featureImage?.description}
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span className="ml-2">
                      {data?.featureImage?.description}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <div className="text-lg text-gray-500">
                  <ContentfulRichText data={data.pageContent.json} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths({ preview = false }) {
  const pages = await fetchContentPageSlugs(preview);

  return {
    paths: pages.items.map((page) => {
      const pageTitle = page.pageTitle;
      const slug = pageTitle.toLowerCase().replaceAll(" ", "-");

      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const pages = await fetchContentPageSlugs(preview);
  const currentPage = pages.items.filter(
    (page) => page.pageTitle.toLowerCase().replaceAll(" ", "-") === params.slug
  )[0];
  const page = await fetchContentPage(currentPage.sys.id, preview);

  return {
    props: {
      data: page,
    },
  };
}

export default ContentPage;
