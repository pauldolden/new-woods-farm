import { AllImages } from "../../types/AllImages";
import { GalleryPage } from "../../types/GalleryPage";
import { fetchGraphQL } from "./config";
import { queryAllImages } from "./queries/queryAllImages";
import { queryGalleryPage } from "./queries/queryGalleryPage";

export const fetchAllImages = async (preview: boolean) => {
  const { data }: AllImages = await fetchGraphQL(queryAllImages, preview);

  const { assetCollection } = data;
  return assetCollection;
};

export const fetchGalleryPageData = async (preview: boolean) => {
  const { data }: GalleryPage = await fetchGraphQL(queryGalleryPage, preview);

  const { galleryPage } = data;
  return galleryPage;
};
