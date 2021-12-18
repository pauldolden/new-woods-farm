export const queryAllImages = `
query {
    assetCollection {
      items {
        url
        description
      }
    }
  }
`;
