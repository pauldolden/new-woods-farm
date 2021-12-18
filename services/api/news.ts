import { NewsArticleIDs } from "../../types/NewsArticleIds";
import { NewsArticle } from "../../types/NewsArticle";
import { fetchGraphQL } from "./config";
import { queryNewsArticleIds } from "./queries/queryNewsArticleIds";

export const fetchNewsArticleIDs = async (preview: boolean) => {
  const { data }: NewsArticleIDs = await fetchGraphQL(
    queryNewsArticleIds,
    preview
  );

  const { newsArticleCollection } = data;
  return newsArticleCollection;
};

export const fetchNewsArticle = async (postId: string, preview: boolean) => {
  const { data }: NewsArticle = await fetchGraphQL(
    `
  query {
    newsArticle(id: "${postId}" ) {
      title
      content {
        json
      }
      previewImage {
        description
        url
      }
      description {
        json
      }
      author {
        ...author
      }
      sys {
        id
        firstPublishedAt
      }
      contentfulMetadata {
        tags {
          name
        }
      }
    }
  }
  
  fragment author on Author {
    name
    title
    image {
      url
      description
    }
  }`,
    preview
  );
  const { newsArticle } = data;
  return newsArticle;
};
