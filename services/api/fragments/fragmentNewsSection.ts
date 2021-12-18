import { fragmentLatestPost } from "./fragmentLatestPost";

export const fragmentNewsSection = `
fragment news on HomePageNews {
    sectionHeader
    sectionText {
      json
    }
    latestPostsCollection {
      items {
        ...${fragmentLatestPost}
      }
    }
  }`;
