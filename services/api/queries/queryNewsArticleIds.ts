export const queryNewsArticleIds = `
query {
    newsArticleCollection {
      items {
        sys {
          id
        }
      }
    }
  }`;
