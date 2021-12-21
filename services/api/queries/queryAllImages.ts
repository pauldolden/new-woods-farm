export const queryAllImages = `
query {
  assetCollection(where: { contentfulMetadata: {
    tags: {
       id_contains_all: ["gallery"]
    }
  }}) {
    items {
      url
      description
    }
  }
}
`;
