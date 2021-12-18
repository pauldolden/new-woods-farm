export const queryAllSheepProfiles = `
query {
    sheepProfileCollection(order: name_ASC) {
      items {
        name
        dateOfBirth
        description {
          json
        }
        image {
          url
          description
        }
      }
    }
  }
`;
