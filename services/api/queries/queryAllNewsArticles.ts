export const queryAllNewsArticles = `
query {
    newsArticleCollection(order: sys_firstPublishedAt_DESC) {
      items {
        sys {
          id
          firstPublishedAt
        }
        title
        content {
          json
        }
         previewImage {
          url
          description
        }
        author {
          ...author
        }
        description {
          json
        }
        contentfulMetadata {
          tags {
            name
          }
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
  }
`;
