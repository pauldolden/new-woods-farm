export const queryContentPageSlugs = `
query {
    contentPageCollection {
      items {
        pageTitle
        sys {
            id
          }
      }
    }
  }
`;
