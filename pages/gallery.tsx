import React, { useEffect, useState } from "react";
import { ContentfulRichText } from "../components/ContentfulRichText";
import Layout from "../components/Layout";
import { fetchAllImages, fetchGalleryPageData } from "../services/api/gallery";
import { AssetCollection } from "../types/AllImages";
import { GalleryPageClass } from "../types/GalleryPage";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface Props {
  data: AssetCollection;
  pageData: GalleryPageClass;
}

const gallery = ({ data, pageData }: Props) => {
  const [imageSrc, setImageSrc] = useState("");
  const [openLightbox, setOpenLightbox] = useState(false);

  useEffect(() => {
    if (imageSrc) {
      setOpenLightbox(true);
    }
  }, [imageSrc]);

  return (
    <Layout>
      {openLightbox && (
        <Lightbox
          mainSrc={imageSrc}
          onCloseRequest={() => {
            setImageSrc("");
            setOpenLightbox(false);
          }}
        />
      )}
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 h-full">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {pageData?.pageTitle}
            </h2>
            <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              <ContentfulRichText data={pageData?.pageContent?.json} />
            </div>
          </div>

          <div
            role="list"
            className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {data.items.map((file) => (
              <div className="relative cursor-pointer" key={file?.url}>
                <div
                  onClick={() => setImageSrc(file?.url)}
                  className="group block w-full aspect-w-10 aspect-h-7 select-none rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-green-500 overflow-hidden"
                >
                  <img
                    src={file?.url}
                    alt={file?.description}
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />

                  <span className="sr-only">
                    View details for {file?.description}
                  </span>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {file?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params, preview }) {
  const images = await fetchAllImages(preview);
  const pageData = await fetchGalleryPageData(preview);

  return {
    props: {
      data: images,
      pageData,
    },
  };
}

export default gallery;
