import { ContentPage } from "../../types/ContentPage";
import { ContentPageSlugs } from "../../types/ContentPageSlugs";
import { fetchGraphQL } from "./config";
import { queryContentPageSlugs } from "./queries/queryContentPageSlugs";

export const fetchContentPageSlugs = async (preview: boolean) => {
  const { data }: ContentPageSlugs = await fetchGraphQL(
    queryContentPageSlugs,
    preview
  );

  const { contentPageCollection } = data;
  return contentPageCollection;
};

export const fetchContentPage = async (pageId: string, preview: boolean) => {
  const { data }: ContentPage = await fetchGraphQL(
    `query {
        contentPage(id: "${pageId}") {
          pageTitle
          pageContent {
            json
          }
          featureImage {
              url,
              description
          }
        }
      }
      `,
    preview
  );

  const { contentPage } = data;
  return contentPage;
};
