import { fragmentPostedBy } from "./fragmentPostedBy";

export const fragmentLatestPost = `
fragment latestPost on NewsArticle {
    title
    content {
      json
    }
    previewImage {
      description
      url
    }
    author {
        ...${fragmentPostedBy}
    }
    sys {
      firstPublishedAt
    }
    contentfulMetadata {
        tags {
          name
        }
      }
  }`;
